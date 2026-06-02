/* ============================================================
   Export toolbar — flat 페이지용 인쇄 / PDF 다운로드 툴바
   PDF 저장 버튼은 항상 표시된다 (상시 노출).
   ============================================================ */
(function () {
  // 국가 코드 → PDF 파일명. 코드가 매핑에 없어도 {code}.pdf로 폴백.
  var PDF_FILES = {
    au: 'au.pdf', us: 'us.pdf', uk: 'uk.pdf', ca: 'ca.pdf', nz: 'nz.pdf'
  };

  function getCountryCode() {
    // 트레일링 슬래시까지 대비해 비어있지 않은 마지막 경로 세그먼트를 사용
    var segments = location.pathname.split('/').filter(Boolean);
    var filename = segments.length ? segments[segments.length - 1] : '';
    // .html 확장자 제거 (netlify Pretty URL은 확장자가 없을 수 있음)
    filename = filename.replace(/\.html?$/i, '');
    // -flat 접미사 제거 → 국가 코드만 남김 (au-flat → au)
    filename = filename.replace(/-flat$/i, '');
    return filename;
  }

  function getDocName() {
    var t = (document.title || '문서').split('·')[0].trim();
    return t || '문서';
  }

  function getPdfPath() {
    var code = getCountryCode();
    // 매핑에 있으면 그 이름, 없으면 코드 기반 폴백 (상시 버튼 보장)
    var file = PDF_FILES[code] || (code ? code + '.pdf' : null);
    return file ? '../pdfs/' + file : '../pdfs/';
  }

  function triggerPrint() {
    if (typeof window.showAllSlides === 'function') window.showAllSlides();
    window.print();
  }

  function mountToolbar() {
    if (document.querySelector('.export-toolbar')) return; // 중복 방지

    var docName = getDocName();
    var pdfPath = getPdfPath();

    var bar = document.createElement('div');
    bar.className = 'export-toolbar';
    bar.innerHTML =
      '<span class="doc-name">' + docName + '</span>' +
      '<a href="../index.html" class="btn-back" title="목차로 돌아가기">' +
        '<span class="icon">\u2039</span><span class="label">목차</span>' +
      '</a>' +
      '<a class="btn-pdf" href="' + pdfPath + '" download title="PDF 파일 다운로드">' +
        '<span class="icon">\u2b07\ufe0e</span><span class="label">PDF 저장</span>' +
      '</a>' +
      '<button type="button" data-act="print" title="인쇄 (Ctrl/Cmd+P)">' +
        '<span class="icon">\ud83d\udda8</span><span class="label">인쇄</span>' +
      '</button>';

    document.body.appendChild(bar);

    var printBtn = bar.querySelector('[data-act="print"]');
    if (printBtn) printBtn.addEventListener('click', triggerPrint);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mountToolbar);
  } else {
    mountToolbar();
  }
})();
