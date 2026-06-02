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

  function applyScale() {
    var scale = window.innerWidth / SLIDE_W;
    var wrapH = SLIDE_H * scale;
    document.querySelectorAll('.flat-slide-wrap').forEach(function (wrap) {
      wrap.style.setProperty('--flat-wrap-h', wrapH + 'px');
      var slide = wrap.querySelector('section.slide');
      if (slide) slide.style.setProperty('--flat-scale', scale);
    });
  }

  function init() {
    if (isMobile()) {
      wrapSlides();
      applyScale();
    } else {
      unwrapSlides();
    }
  }

  var t;
  window.addEventListener('resize', function () {
    clearTimeout(t);
    t = setTimeout(init, 150);
  });

  // 인쇄 시에는 원본 크기로 복원
  window.addEventListener('beforeprint', unwrapSlides);
  window.addEventListener('afterprint', init);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
