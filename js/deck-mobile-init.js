/**
 * deck-mobile-init.js
 *
 * 데스크톱: deck-stage의 기본 슬라이드쇼 뷰어를 그대로 사용(레일 포함).
 * 모바일(768px 이하): deck-stage 뷰어는 가로형 1920×1080 슬라이드를
 *   세로 화면에 맞추면 너무 작아진다. 그래서 모바일에서는
 *   deck-stage 밖으로 슬라이드를 꺼내 flat 페이지처럼
 *   "화면 너비에 맞춰 축소 + 세로 스크롤"로 재배치한다.
 */
(function () {
  'use strict';

  var BP = 768;
  var SLIDE_W = 1920;
  var SLIDE_H = 1080;
  var rearranged = false;
  var originalParent = null;
  var container = null;

  function isMobile() { return window.innerWidth <= BP; }
  function getStage() { return document.querySelector('deck-stage'); }

  /* 모바일: deck-stage 안의 section들을 밖으로 꺼내 세로 스크롤 컨테이너에 배치 */
  function rearrangeForMobile() {
    if (rearranged) { applyScale(); return; }
    var stage = getStage();
    if (!stage) return;

    var sections = Array.prototype.slice.call(stage.querySelectorAll('section'));
    if (!sections.length) return;

    // deck-stage 숨김
    stage.style.display = 'none';
    originalParent = stage.parentNode;

    // 세로 스크롤 컨테이너 생성
    container = document.createElement('div');
    container.id = 'mobile-deck-scroll';
    originalParent.insertBefore(container, stage.nextSibling);

    sections.forEach(function (sec) {
      var wrap = document.createElement('div');
      wrap.className = 'flat-slide-wrap';
      // section을 .slide 클래스로 (manual.css의 flat 규칙 활용)
      sec.classList.add('slide');
      wrap.appendChild(sec);
      container.appendChild(wrap);
    });

    rearranged = true;
    applyScale();
  }

  /* 데스크톱 복귀: 원래 deck-stage로 되돌림 */
  function restoreForDesktop() {
    if (!rearranged) return;
    var stage = getStage();
    if (container && stage) {
      var wraps = container.querySelectorAll('.flat-slide-wrap');
      Array.prototype.forEach.call(wraps, function (wrap) {
        var sec = wrap.querySelector('section');
        if (sec) {
          sec.classList.remove('slide');
          sec.style.removeProperty('--flat-scale');
          stage.appendChild(sec);
        }
      });
      container.remove();
      container = null;
      stage.style.display = '';
    }
    rearranged = false;
  }

  function applyScale() {
    if (!container) return;
    var scale = window.innerWidth / SLIDE_W;
    var wrapH = SLIDE_H * scale;
    container.querySelectorAll('.flat-slide-wrap').forEach(function (wrap) {
      wrap.style.setProperty('--flat-wrap-h', wrapH + 'px');
      var sec = wrap.querySelector('section');
      if (sec) sec.style.setProperty('--flat-scale', scale);
    });
  }

  function init() {
    if (isMobile()) rearrangeForMobile();
    else restoreForDesktop();
  }

  var t;
  window.addEventListener('resize', function () {
    clearTimeout(t);
    t = setTimeout(init, 150);
  });

  // deck-stage가 슬롯을 채운 뒤 실행되도록 약간 지연
  function start() {
    // deck-stage 커스텀 엘리먼트 정의 대기
    if (window.customElements && customElements.whenDefined) {
      customElements.whenDefined('deck-stage').then(function () {
        setTimeout(init, 50);
      });
    } else {
      setTimeout(init, 100);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
