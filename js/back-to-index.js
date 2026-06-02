/* ============================================================
   Back-to-index button — floats top-right on manual deck pages.
   Links to the table-of-contents (index.html). Hidden in print.
   ============================================================ */
(function () {
  function mount() {
    if (document.getElementById('back-to-index')) return;

    var style = document.createElement('style');
    style.textContent = [
      '#back-to-index{',
      '  position:fixed; top:20px; right:24px; z-index:2147483647;',
      '  display:inline-flex; align-items:center; gap:8px;',
      '  height:42px; padding:0 18px;',
      "  font-family:'Pretendard','Pretendard Variable',system-ui,sans-serif;",
      '  font-size:14px; font-weight:600; letter-spacing:-0.01em;',
      '  color:#1b1b1b; text-decoration:none;',
      '  background:rgba(255,255,255,0.96); border:1px solid rgba(0,0,0,0.12);',
      '  border-radius:999px; box-shadow:0 4px 16px rgba(0,0,0,0.16);',
      '  backdrop-filter:blur(6px); -webkit-backdrop-filter:blur(6px);',
      '  transition:background .15s ease, box-shadow .15s ease, transform .15s ease;',
      '  cursor:pointer;',
      '}',
      '#back-to-index:hover{ background:#fff; box-shadow:0 6px 22px rgba(0,0,0,0.22); transform:translateY(-1px); }',
      '#back-to-index svg{ width:15px; height:15px; flex-shrink:0; }',
      '@media print{ #back-to-index{ display:none !important; } }'
    ].join('\n');
    document.head.appendChild(style);

    var a = document.createElement('a');
    a.id = 'back-to-index';
    a.href = '../index.html';
    a.setAttribute('data-noncommentable', '');
    a.setAttribute('aria-label', '목차로 돌아가기');
    a.innerHTML =
      '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 3L5 8l5 5"/></svg>' +
      '<span>목차로 돌아가기</span>';
    document.body.appendChild(a);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
