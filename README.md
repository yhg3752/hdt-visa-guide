# 현대드림투어 전자여행허가 안내 매뉴얼

해외 출장을 위한 전자여행허가(ETA/ESTA) 신청 안내 사이트입니다.

## 대상 국가
- 🇦🇺 호주 ETA
- 🇳🇿 뉴질랜드 NZeTA
- 🇬🇧 영국 ETA
- 🇨🇦 캐나다 eTA
- 🇺🇸 미국 ESTA

## 구조
- `index.html` — 메인 목차 페이지
- `decks/` — 국가별 매뉴얼 (일반 + 인쇄용 -flat)
- `pdfs/` — 국가별 PDF 다운로드 파일
- `assets/`, `css/`, `js/`, `fonts/` — 정적 리소스

## 배포
순수 정적 사이트입니다. 빌드 과정 없이 Cloudflare Pages에서 바로 서빙됩니다.
- Build command: (없음)
- Build output directory: `/`

작성: 영업2팀
