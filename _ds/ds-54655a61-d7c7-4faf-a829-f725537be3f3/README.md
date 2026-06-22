# 현대드림투어 (HYUNDAI DREAM TOUR) — Design System v1.0

> 현대드림투어 브랜드의 시각·문구·인터랙션 가이드라인을 한 곳에 모은 디자인 시스템입니다.
> 모든 아티팩트(랜딩 페이지, 카드, 썸네일, 배너, 슬라이드 등)에 일관 적용하세요.

---

## ① 브랜드 개요

| 항목 | 내용 |
|---|---|
| **브랜드명** | 현대드림투어 (HYUNDAI DREAM TOUR) |
| **소속** | 현대백화점그룹 계열사 |
| **한 줄 소개** | 해외·국내 기업, 공공기관 및 단체를 대상으로 출장·여행 토탈 서비스와 여행 플랫폼을 제공하는 여행 전문 기업 |
| **슬로건** | **For Your Better Value** — 더 나은 가치를 위한 여행 |
| **타겟 사용자** | 25~50세 직장인 (출장·여행 담당자, 임직원 복지, 행사 기획자) |
| **본사** | 서울특별시 서대문구 충정로 23 |
| **대표번호** | 02-723-2233 |

### 핵심 가치
1. **신뢰 (Trust)** — 현대백화점그룹의 안정성, 180여 항공사·60만 호텔 네트워크
2. **전문성 (Expertise)** — B2B 출장·MICE·여행 플랫폼의 전문화된 노하우
3. **연결 (Connection)** — 고객-여행지-파트너를 잇는 글로벌 동반자

### 핵심 서비스 영역
- **기업출장 (BTM)** — 예약·승인·정산 통합 시스템
- **MICE / 인센티브** — 컨퍼런스·인센티브 투어·단체 이벤트 기획·운영
- **단체여행 / 공공기관** — 임직원 워크숍, 기관 단체여행
- **개별 여행 플랫폼** — 항공·호텔·패키지 예약 서비스

### 자료 출처 (Sources)
사용자 제공 자료:
- `uploads/현대드림투어CI-01.png` — 영문 로고 (HYUNDAI DREAM TOUR)
- `uploads/현대드림투어CI-02.png` — 국문 메인 로고 (현대드림투어)
- `uploads/현대드림투어CI-03.png` — 가로형 국·영문 결합 로고
- 시스템 프롬프트로 제공된 v1.0 디자인 가이드 (컬러 토큰·타이포·컴포넌트 규칙)

> 외부 코드베이스나 Figma 파일은 제공되지 않았으며, 본 시스템은 위 자료를 기반으로 구성되었습니다.
> 실제 운영 중인 hyundaidreamtour.com 사이트의 스크린샷이 추가 제공되면 UI 키트를 더 정확히 보정할 수 있습니다.

---

## ② 콘텐츠 펀더멘털스 (CONTENT FUNDAMENTALS)

### 보이스 & 톤 — *"신뢰감 있고 명료한 비즈니스 한국어"*

| 축 | 설정 |
|---|---|
| **격식** | 격식체 우선. "~합니다 / ~드립니다 / ~할 수 있습니다" |
| **시점** | "고객 / 귀사 / 임직원" — 1인칭 "저희"는 절제, "당신/너" 절대 금지 |
| **분위기** | 차분 · 단정 · 전문적, 그러나 차갑지 않게. 핵심 키워드 "따뜻한 전문성" |
| **장식** | 이모지·느낌표·물결(~) 자제. 강조는 컬러·여백·굵기로 |
| **약어** | 영문 약어(BTM, MICE, B2B) 첫 등장 시 풀이 병기 권장 |

### 카피 패턴

**헤드라인 — 가치 약속형 (짧고 단정)**
- ✅ "출장 업무, 한 번에 정리합니다"
- ✅ "비즈니스 여정을 가치 있게"
- ✅ "180여 항공사, 60만 호텔, 하나의 플랫폼"
- ❌ "최고의 여행을 떠나보세요!!" (느낌표·과장)
- ❌ "당신의 꿈을 현실로~" (감성 과잉, 톤 불일치)

**서브카피 — 사실 기반 부연**
- ✅ "예약부터 정산까지 통합 관리하는 기업 전용 출장 솔루션"
- ✅ "현대백화점그룹의 신뢰 위에 글로벌 네트워크를 더했습니다"

**CTA — 행동 동사 + 명료**
- ✅ "문의하기", "자세히 보기", "더 알아보기 →", "지금 시작하기", "상담 예약"
- ❌ "GO!", "Click Here", "🚀 출발"

**숫자 사용**
- 큰 단위는 그대로 노출하여 신뢰감 강조: `180여 항공사`, `60만 호텔`, `50%+ 절감`
- 화살표 `→`는 진행·이동 메타포로 한정 사용

### 라이팅 길이 가이드
- 헤드라인 한글 12~18자
- 서브카피 한글 28~40자, 본문 줄당 28~36자 권장
- 캡션·뱃지는 2~6자 (예: "기업출장", "신규", "추천")

### 다국어
- 한국어 우선, 영문 병기 가능 (예: 기업출장 / Business Travel)
- 슬로건은 항상 **"For Your Better Value"** 로 통일 (대소문자 그대로)

---

## ③ 비주얼 펀더멘털스 (VISUAL FOUNDATIONS)

### 컬러 (Color)
- **Primary · Forest Green (#1E9D8B)** — 1차 CTA, 헤더, 핵심 강조. 전체 화면의 약 **20%**.
- **Secondary · Warm Orange (#CA7700)** — 보조 강조, 뱃지, 일러스트 포인트. **10% 이하**로 절제.
- **Neutral · Gray Scale** — 본문·보더·배경. 페이지 비중 **70%**.
- **순수 `#000` 금지** — 다크 서피스는 항상 `--neutral-900 (#1E1E1E)`.
- 컬러 위 텍스트는 같은 계열 700 톤(어두운 톤) 사용. 다크 배경에선 secondary-100(#F5C988)로 대비 확보.

### 타이포그래피 (Typography)
- **Pretendard** 단일 운용 (한글·영문·숫자를 동일 폰트로 처리). 대안: Noto Sans KR.
- 굵기는 **400 / 500** 두 단계만. 700 이상의 두꺼운 산세리프는 사용 안 함.
- 헤드라인 자간 `-1% ~ -2%`로 단정한 인상.
- 본문 line-height `1.6~1.7`로 충분한 호흡.
- ALL CAPS는 캡션·라벨 일부에만 `letter-spacing 0.05em`.

### 스페이싱 & 레이아웃
- **8px 그리드 엄수.** 13px, 27px 같은 임의 값 금지.
- 컨테이너 최대 폭 **1200px**, 12컬럼, gutter 24px.
- 데스크탑 사이드 패딩 40px / 태블릿 24px / 모바일 16px.
- 섹션 상하 패딩: 데스크탑 96px (`--space-3xl`), 모바일 64px (`--space-2xl`).
- 카드 그리드: 데스크탑 3컬럼 / 태블릿 2컬럼 / 모바일 1컬럼.

### 배경 & 표면 (Backgrounds)
- 페이지 기본 배경 `--neutral-50 (#FAFAFA)`. 무지·플랫.
- **그라데이션 사용 안 함** (브랜드 가이드 명시). 키비주얼도 단색 + 사진/일러스트 조합.
- 다크 강조 섹션은 `--neutral-900` 단색.
- 풀블리드 이미지는 사용 가능하나 위에 텍스트를 올릴 때 70% 어두운 오버레이로 가독 확보.

### 보더 & 코너 라디우스
- 보더 기본 1px solid `--neutral-200 (#D9D9D6)`. 약한 분리는 `--neutral-100`.
- 라디우스 시스템:
  - 뱃지/작은 인풋 — 4px
  - 버튼/인풋/작은 카드 — 8px
  - 카드/컨테이너 — 12px
  - 키비주얼 컨테이너 — 20px
  - 칩/태그 — 999px (pill)
- **혼용 금지** — 한 화면에서 카드는 12px, 인풋은 8px 등 토큰 그대로 사용.

### 엘리베이션 (Shadows)
시스템은 **그림자를 최소한으로** 사용합니다. 강조는 색과 여백으로 우선.
- 기본 상태 — `--shadow-none`
- 카드 호버 / 드롭다운 — `--shadow-md (0 4px 12px rgba(30,30,30,0.08))`
- 미세 강조 — `--shadow-sm`
- 포커스 링 — `0 0 0 3px rgba(30,157,139,0.15)` (primary 15% 알파)

> 네온, 컬러풀 그림자, 강한 드롭섀도, 다중 레이어 섀도는 **사용 금지**.

### 인터랙션 — Hover · Active · Focus

| 상태 | 처리 |
|---|---|
| **Hover (버튼)** | primary-500 → primary-700, transition 120ms |
| **Hover (카드)** | border `--neutral-100` → `--neutral-200`, `--shadow-md` 추가, `translateY(-2px)` |
| **Hover (Ghost)** | 배경 `--neutral-100` 추가 |
| **Active** | `translateY(1px)` + 더 어두운 톤 (primary-700 유지) |
| **Focus** | `box-shadow: var(--focus-ring)` (3px primary 알파 15%) |
| **Disabled** | 배경 `--neutral-200` / 텍스트 `--neutral-600`, `cursor: not-allowed` |

### 모션 (Animation)
- **절제된 모션.** 메인 인터랙션 transition `200ms ease-out` (`var(--motion-base) var(--ease-out)`).
- 빠른 마이크로 — 120ms (`--motion-fast`).
- **바운스·스프링·과장된 패럴랙스 사용 안 함.** 페이드 + 미세 translateY(-2px ~ -4px)가 주력 표현.
- 스크롤 트리거 등장은 200~320ms, opacity 0→1 + translateY 8px→0.

### 투명도 & 블러
- 다크 모달/오버레이 배경 `rgba(30,30,30,0.6)`.
- 다크 카드 위 뱃지 `rgba(202,119,0,0.2)` + secondary-100 텍스트.
- **글래스모피즘(backdrop-blur) 비사용.** 단정한 솔리드 표현이 기조.

### 이미지 톤
- 비즈니스 미팅, 공항, 도시 야경, 글로벌 협업 등 **따뜻하고 명료한 사진**.
- 과채도·인스타그램 필터·강한 비네팅 지양.
- 흑백·세피아·강한 컬러 그레이딩 사용 안 함.
- 인물 사진은 자연광 기조, 표정은 차분한 미소.

### 카드 표준 (요약)
- 기본형: 흰 배경 + 1px `--neutral-100` 보더 + 12px 라디우스 + 24px 패딩. 호버 시 shadow-md + translateY(-2px).
- 강조형(다크): `#1E1E1E` 배경 + 우상단 4px×60px 오렌지 액센트 바.
- 내부 구성: 뱃지 → H3 제목 → body-sm 본문 → Ghost 링크 "자세히 보기 →".

### 레이아웃 룰
- 고정 헤더 (sticky, 흰 배경 + 하단 1px `--neutral-100` 보더, 높이 72px 데스크탑 / 56px 모바일).
- 풋터는 다크(`--neutral-900`) 또는 `--neutral-100` 두 가지.
- 한 화면에 CTA Primary는 **1개만**. 두 개 이상의 액션은 Primary + Secondary(아웃라인) 페어로.

---

## ④ 아이코노그래피 (ICONOGRAPHY)

### 사용 아이콘 셋
- **Lucide Icons** (CDN: `https://unpkg.com/lucide@latest`)
  - 선택 이유: 1.5~2px 균일 스트로크, 둥근 라인 캡, 24×24 그리드 — 현대드림투어의 *Modern Corporate × Warm Minimalism* 무드와 잘 맞음.
  - 사용처: 네비게이션, 폼 인풋, 카드 액션, 푸터 SNS.
- **공식 아이콘 셋이 별도로 제공되지 않아 Lucide를 기본 셋으로 채택했습니다. ⚠️ 사용자 확인 필요** — hyundaidreamtour.com 측에서 사용 중인 자체 아이콘이 있다면 교체 권장.

### 사용 규칙
- 기본 스트로크 1.5px, 컬러 `currentColor` (텍스트와 함께 변경).
- 사이즈: 16px (인라인) · 20px (인풋·버튼) · 24px (네비) · 32px (특별 강조).
- 아이콘만으로 의미 전달 금지 — 항상 라벨 또는 `aria-label` 병기.
- **컬러풀 아이콘·이모지를 아이콘 대용으로 사용 금지.**

### 이모지 정책
- UI 안에서 이모지 사용 **지양**. 카피, 마이크로카피, CTA에 이모지 없음.
- 한정된 경우(이벤트 캡션 등)에만 본문 컬러로 통일된 단색 아이콘으로 대체 권장.

### 유니코드 글리프
- 화살표 `→` `↗` 는 링크/CTA에 한정 사용.
- 구분자 `·` (middot)는 메타 정보(예: "기업출장 · 2025.04.10")에 사용.

### 로고 자산
| 파일 | 용도 |
|---|---|
| `assets/logo-primary-en.png` | 메인 영문 로고 (HYUNDAI DREAM TOUR) |
| `assets/logo-primary-ko.png` | 국문 메인 로고 (현대드림투어) |
| `assets/logo-horizontal-ko.png` | 가로 결합 로고 (영문 + 국문) — 헤더·푸터 권장 |

> 로고는 3컬러 블록(녹색-검정-주황)이 핵심 시각 자산입니다. 단색 처리·기울임·드롭섀도 등 변형 금지. 여백은 최소 로고 높이의 0.5배.

---

## ⑤ 파일 인덱스 (Index)

```
.
├── README.md                  ← 이 문서 (브랜드 개요 + 펀더멘털스)
├── SKILL.md                   ← Claude Skill 매니페스트
├── colors_and_type.css        ← 토큰 시스템 (CSS 변수)
│
├── assets/                    ← 로고·이미지 자산
│   ├── logo-primary-en.png
│   ├── logo-primary-ko.png
│   └── logo-horizontal-ko.png
│
├── preview/                   ← Design System 탭 카드 (color/type/space/component swatches)
│   ├── colors-primary.html
│   ├── colors-secondary.html
│   ├── colors-neutral.html
│   ├── colors-semantic.html
│   ├── type-scale.html
│   ├── type-pairing.html
│   ├── spacing-scale.html
│   ├── radius-scale.html
│   ├── shadow-scale.html
│   ├── buttons.html
│   ├── inputs.html
│   ├── cards.html
│   ├── badges.html
│   └── logo.html
│
└── ui_kits/
    └── marketing/             ← 마케팅 사이트 UI 키트
        ├── README.md
        ├── index.html         ← 인터랙티브 데모 (홈 → 기업출장 → 문의)
        ├── Header.jsx
        ├── Hero.jsx
        ├── ServiceCard.jsx
        ├── StatsBar.jsx
        ├── PartnerLogos.jsx
        ├── FeaturedSection.jsx
        ├── Footer.jsx
        └── primitives.jsx     ← Button, Badge, Input 등 원자 컴포넌트
```

### 사용 방법

다른 HTML 파일에서 토큰 사용:
```html
<link rel="stylesheet" href="../colors_and_type.css">
<button style="background: var(--primary-500); color: #fff; padding: 12px 24px; border-radius: var(--radius-md);">
  문의하기
</button>
```

### 빠른 시작
1. 새 아티팩트를 만들 때 `colors_and_type.css`를 import.
2. `assets/logo-horizontal-ko.png` (또는 `-en.png`)를 헤더에 배치.
3. 컴포넌트는 `ui_kits/marketing/primitives.jsx`에서 가져다 사용.
4. 카피 톤은 §② CONTENT FUNDAMENTALS 참조 — 항상 격식체, 이모지·느낌표 자제.

---

## ⑥ 디자인 규칙 체크리스트 (작업 시 자동 적용)

- [ ] 컬러는 토큰표의 HEX만 사용 (임의 그린/오렌지 변형 없음)
- [ ] Pretendard 단일 운용, weight 400/500만 사용
- [ ] 8px 그리드 엄수 (13px, 27px 같은 임의값 금지)
- [ ] 플랫 디자인 기조 (그라데이션·네온·과도한 그림자 금지)
- [ ] CTA Primary는 한 화면에 1개
- [ ] 슬로건 표기는 **"For Your Better Value"** 통일
- [ ] CTA 텍스트는 행동 동사형 ("문의하기", "자세히 보기")
- [ ] 이모지·느낌표 자제, 격식체 한국어 유지
- [ ] 순수 `#000` 미사용 (다크는 `--neutral-900`)

---

*v1.0 — 2026.05 · 현대드림투어 디자인 시스템 (Hyundai Dream Tour Design System)*
