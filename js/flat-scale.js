/**
 * flat-scale.js
 * flat 페이지(인쇄용)의 1920×1080 고정 슬라이드를
 * 모바일 화면 너비에 맞춰 축소한다.
 * 각 슬라이드를 래퍼로 감싸고, 축소 비율과 래퍼 높이를 계산해
 * CSS 변수(--flat-scale, --flat-wrap-h)로 전달한다.
 */
(function () {
  'use strict';
  var SLIDE_W = 1920;
  var SLIDE_H = 1080;
  var BP = 768;

  function isMobile() { return window.innerWidth <= BP; }

  function wrapSlides() {
    var slides = document.querySelectorAll('section.slide');
    slides.forEach(function (slide) {
      if (slide.parentElement && slide.parentElement.classList.contains('flat-slide-wrap')) return;
      var wrap = document.createElement('div');
      wrap.className = 'flat-slide-wrap';
      slide.parentNode.insertBefore(wrap, slide);
      wrap.appendChild(slide);
    });
  }

  function unwrapSlides() {
    var wraps = document.querySelectorAll('.flat-slide-wrap');
    wraps.forEach(function (wrap) {
      var slide = wrap.querySelector('section.slide');
      if (slide) {
        wrap.parentNode.insertBefore(slide, wrap);
        wrap.remove();
      }
    });
  }

  function applyScale(scale) {
    var wrapW = SLIDE_W * scale;
    var wrapH = SLIDE_H * scale;
    document.querySelectorAll('.flat-slide-wrap').forEach(function (wrap) {
      wrap.style.setProperty('--flat-wrap-w', wrapW + 'px');
      wrap.style.setProperty('--flat-wrap-h', wrapH + 'px');
      var slide = wrap.querySelector('section.slide');
      if (slide) slide.style.setProperty('--flat-scale', scale);
    });
  }

  /* 임의 CSS 길이(예: '297mm')의 실제 픽셀 값을 측정한다. */
  function lenToPx(css) {
    var probe = document.createElement('div');
    probe.style.cssText = 'position:absolute;left:-9999px;top:0;width:' + css + ';height:0;visibility:hidden;';
    document.body.appendChild(probe);
    var w = probe.getBoundingClientRect().width;
    probe.remove();
    return w;
  }

  /* 인쇄 용지(A4 가로)의 실제 픽셀 너비를 측정해 슬라이드 축소 비율을 구한다. */
  function pageWidthPx() {
    return lenToPx('297mm') || 1122;
  }

  function init() {
    if (isMobile()) {
      wrapSlides();
      applyScale(window.innerWidth / SLIDE_W);
    } else {
      unwrapSlides();
    }
  }

  var t;
  window.addEventListener('resize', function () {
    clearTimeout(t);
    t = setTimeout(init, 150);
  });

  // 인쇄 시: 슬라이드를 래퍼로 감싸고, A4 가로 페이지에 잘림 없이 꽉 맞춰(중앙정렬) 넣는다.
  function prepPrint() {
    wrapSlides();
    var pw = lenToPx('297mm') || 1122;   // A4 가로 폭(px)
    var ph = lenToPx('210mm') || 794;    // A4 가로 높이(px)
    // A4 페이지 안에 16:9 슬라이드를 잘림 없이 맞춤(가로·세로 중 작은 비율) + 중앙정렬
    var scale = Math.min(pw / SLIDE_W, ph / SLIDE_H);
    var sW = SLIDE_W * scale, sH = SLIDE_H * scale;
    var ox = Math.max(0, (pw - sW) / 2);
    var oy = Math.max(0, (ph - sH) / 2);
    document.querySelectorAll('.flat-slide-wrap').forEach(function (wrap) {
      wrap.style.setProperty('--flat-wrap-w', pw + 'px');
      wrap.style.setProperty('--flat-wrap-h', ph + 'px');
      var slide = wrap.querySelector('section.slide');
      if (slide) {
        slide.style.setProperty('--flat-scale', scale);
        slide.style.setProperty('--flat-offset-x', ox + 'px');
        slide.style.setProperty('--flat-offset-y', oy + 'px');
      }
    });
  }
  window.addEventListener('beforeprint', prepPrint);
  window.addEventListener('afterprint', init);

  // Safari 등 beforeprint 미지원 브라우저 대응
  if (window.matchMedia) {
    var mql = window.matchMedia('print');
    var mqlHandler = function (m) { if (m.matches) prepPrint(); else init(); };
    if (mql.addEventListener) mql.addEventListener('change', mqlHandler);
    else if (mql.addListener) mql.addListener(mqlHandler);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
