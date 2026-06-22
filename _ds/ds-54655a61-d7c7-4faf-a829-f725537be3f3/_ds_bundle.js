/* @ds-bundle: {"format":3,"namespace":"Ds_54655a","components":[],"sourceHashes":{"ui_kits/marketing/App.jsx":"627148d8eef2","ui_kits/marketing/ContactPage.jsx":"50d27784280e","ui_kits/marketing/FeaturedSection.jsx":"b2a63f5c09a9","ui_kits/marketing/Footer.jsx":"226e4fbf9e4f","ui_kits/marketing/Header.jsx":"1717f90b33f5","ui_kits/marketing/Hero.jsx":"7d7b44ec4c42","ui_kits/marketing/ServiceCard.jsx":"7b5118bfdc84","ui_kits/marketing/primitives.jsx":"28ab6d989488"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.Ds_54655a = window.Ds_54655a || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/marketing/App.jsx
try { (() => {
// ============================================================
// App — click-thru demo composing all components
// ============================================================

function App() {
  const [route, setRoute] = React.useState('home');

  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [route]);
  const onNav = id => {
    if (id === 'home') setRoute('home');else if (id === 'contact') setRoute('contact');else if (id === 'business') setRoute('business');else if (id === 'mice' || id === 'group' || id === 'platform') setRoute('business'); // simple fallback for demo
    else setRoute(id);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
    active: route,
    onNav: onNav
  }), route === 'home' && /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, {
    onNav: onNav
  }), /*#__PURE__*/React.createElement(StatsBar, null), /*#__PURE__*/React.createElement(ServiceGrid, {
    onNav: onNav
  }), /*#__PURE__*/React.createElement(FeaturedCase, null), /*#__PURE__*/React.createElement(PartnerLogos, null), /*#__PURE__*/React.createElement(Testimonial, null), /*#__PURE__*/React.createElement(CTABand, {
    onNav: onNav
  })), route === 'business' && /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(BusinessDetailPage, {
    onBack: () => setRoute('contact')
  })), route === 'contact' && /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(ContactPage, {
    onBack: () => setRoute('home')
  })), route === 'login' && /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(LoginPlaceholder, {
    onBack: () => setRoute('home')
  })), route === 'about' && /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(BusinessDetailPage, {
    onBack: () => setRoute('home')
  })), /*#__PURE__*/React.createElement(Footer, null));
}
function CTABand({
  onNav
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "hddt-section",
    style: {
      background: 'var(--primary-50)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hddt-container",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-xl)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "hddt-section-header__eyebrow allcaps"
  }, "Get Started"), /*#__PURE__*/React.createElement("h2", {
    className: "hddt-section-header__title",
    style: {
      marginTop: 'var(--space-sm)'
    }
  }, "\uB3C4\uC785\uC744 \uAC80\uD1A0 \uC911\uC774\uC2DC\uB77C\uBA74, \uD55C \uBC88\uC758 \uC0C1\uB2F4\uC73C\uB85C \uCDA9\uBD84\uD569\uB2C8\uB2E4"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--font-body)',
      color: 'var(--neutral-600)',
      margin: 'var(--space-sm) 0 0',
      maxWidth: 560
    }
  }, "\uB2F4\uB2F9 \uB9E4\uB2C8\uC800\uAC00 \uADC0\uC0AC\uC758 \uCD9C\uC7A5 \uC815\uCC45\uACFC \uADDC\uBAA8\uC5D0 \uB9DE\uCDB0 \uCD5C\uC801\uC758 \uB3C4\uC785 \uBC29\uC548\uC744 \uC81C\uC548\uB4DC\uB9BD\uB2C8\uB2E4.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-md)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => onNav('business')
  }, "\uC11C\uBE44\uC2A4 \uC0C1\uC138"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => onNav('contact')
  }, "\uC0C1\uB2F4 \uC608\uC57D\uD558\uAE30"))));
}
function LoginPlaceholder({
  onBack
}) {
  return /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 400,
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-md)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Login",
    title: "\uACE0\uAC1D \uB85C\uADF8\uC778",
    body: "\uAE30\uC5C5\uD68C\uC6D0 / \uC784\uC9C1\uC6D0 \uB85C\uADF8\uC778\uC744 \uC9C0\uC6D0\uD569\uB2C8\uB2E4."
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "\uC544\uC774\uB514",
    placeholder: "example@company.com"
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "\uBE44\uBC00\uBC88\uD638",
    type: "password",
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg"
  }, "\uB85C\uADF8\uC778"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: onBack
  }, "\u2190 \uD648\uC73C\uB85C")));
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/ContactPage.jsx
try { (() => {
// ============================================================
// ContactPage — inline form (used as sub-screen in demo)
// ============================================================

function ContactPage({
  onBack,
  onSubmit
}) {
  const [form, setForm] = React.useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    category: 'business',
    message: ''
  });
  const [submitted, setSubmitted] = React.useState(false);
  const set = k => e => setForm(f => ({
    ...f,
    [k]: e.target.value
  }));
  const handle = e => {
    e.preventDefault();
    setSubmitted(true);
    onSubmit && onSubmit(form);
  };
  if (submitted) {
    return /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
      className: "hddt-contact-success"
    }, /*#__PURE__*/React.createElement("div", {
      className: "hddt-contact-success__icon"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 28
    })), /*#__PURE__*/React.createElement("h2", {
      className: "hddt-section-header__title"
    }, "\uBB38\uC758\uAC00 \uC815\uC0C1\uC801\uC73C\uB85C \uC811\uC218\uB418\uC5C8\uC2B5\uB2C8\uB2E4"), /*#__PURE__*/React.createElement("p", {
      className: "hddt-contact-success__body"
    }, "\uC601\uC5C5\uC77C \uAE30\uC900 1\uC77C \uB0B4\uC5D0 \uB2F4\uB2F9 \uB9E4\uB2C8\uC800\uAC00 \uD68C\uC2E0\uB4DC\uB9AC\uACA0\uC2B5\uB2C8\uB2E4.", /*#__PURE__*/React.createElement("br", null), "\uAE09\uD55C \uBB38\uC758\uB294 02-723-2233\uC73C\uB85C \uC5F0\uB77D \uBD80\uD0C1\uB4DC\uB9BD\uB2C8\uB2E4."), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: onBack
    }, "\uD648\uC73C\uB85C \uB3CC\uC544\uAC00\uAE30")));
  }
  return /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    className: "hddt-contact"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hddt-contact__intro"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hddt-section-header__eyebrow allcaps"
  }, "Contact"), /*#__PURE__*/React.createElement("h2", {
    className: "hddt-section-header__title"
  }, "\uC0C1\uB2F4 \uC608\uC57D \xB7 \uB3C4\uC785 \uBB38\uC758"), /*#__PURE__*/React.createElement("p", {
    className: "hddt-contact__body"
  }, "\uAE30\uC5C5 \uCD9C\uC7A5, MICE, \uB2E8\uCCB4\uC5EC\uD589 \uB3C4\uC785\uC744 \uAC80\uD1A0 \uC911\uC774\uC2E0\uAC00\uC694? \uC544\uB798 \uC591\uC2DD\uC744 \uC791\uC131\uD574 \uC8FC\uC2DC\uBA74 \uB2F4\uB2F9 \uB9E4\uB2C8\uC800\uAC00 1\uC77C \uB0B4\uC5D0 \uC5F0\uB77D\uB4DC\uB9BD\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("div", {
    className: "hddt-contact__info"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 18
  }), " ", /*#__PURE__*/React.createElement("span", null, "02-723-2233 (\uD3C9\uC77C 09:00\u201318:00)")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 18
  }), " ", /*#__PURE__*/React.createElement("span", null, "contact@hyundaidreamtour.com")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Icon, {
    name: "pin",
    size: 18
  }), " ", /*#__PURE__*/React.createElement("span", null, "\uC11C\uC6B8\uD2B9\uBCC4\uC2DC \uC11C\uB300\uBB38\uAD6C \uCDA9\uC815\uB85C 23")))), /*#__PURE__*/React.createElement("form", {
    className: "hddt-contact__form",
    onSubmit: handle
  }, /*#__PURE__*/React.createElement("div", {
    className: "hddt-contact__row"
  }, /*#__PURE__*/React.createElement(TextField, {
    label: "\uD68C\uC0AC\uBA85",
    placeholder: "\uD604\uB300\uB4DC\uB9BC\uD22C\uC5B4",
    value: form.company,
    onChange: set('company')
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "\uB2F4\uB2F9\uC790\uBA85",
    placeholder: "\uD64D\uAE38\uB3D9",
    value: form.name,
    onChange: set('name')
  })), /*#__PURE__*/React.createElement("div", {
    className: "hddt-contact__row"
  }, /*#__PURE__*/React.createElement(TextField, {
    label: "\uC774\uBA54\uC77C",
    type: "email",
    placeholder: "contact@example.com",
    value: form.email,
    onChange: set('email')
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "\uC5F0\uB77D\uCC98",
    placeholder: "010-0000-0000",
    value: form.phone,
    onChange: set('phone')
  })), /*#__PURE__*/React.createElement(Select, {
    label: "\uBB38\uC758 \uBD84\uC57C",
    value: form.category,
    onChange: set('category'),
    options: [{
      value: 'business',
      label: '기업출장 (BTM)'
    }, {
      value: 'mice',
      label: 'MICE · 인센티브'
    }, {
      value: 'group',
      label: '단체여행'
    }, {
      value: 'platform',
      label: '여행 플랫폼'
    }, {
      value: 'other',
      label: '기타'
    }]
  }), /*#__PURE__*/React.createElement(TextArea, {
    label: "\uBB38\uC758 \uB0B4\uC6A9",
    placeholder: "\uB3C4\uC785 \uADDC\uBAA8, \uC77C\uC815 \uB4F1 \uC790\uC720\uB86D\uAC8C \uC791\uC131\uD574 \uC8FC\uC138\uC694.",
    value: form.message,
    onChange: set('message'),
    rows: 5
  }), /*#__PURE__*/React.createElement("div", {
    className: "hddt-contact__actions"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: onBack
  }, "\u2190 \uB3CC\uC544\uAC00\uAE30"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    type: "submit",
    size: "lg"
  }, "\uBB38\uC758 \uBCF4\uB0B4\uAE30")))));
}
function BusinessDetailPage({
  onBack
}) {
  const features = [{
    icon: 'check',
    title: '통합 예약·승인',
    body: '항공·호텔·차량 예약을 한 화면에서. 출장 정책에 맞춰 자동 승인 라우팅.'
  }, {
    icon: 'check',
    title: '실시간 정산',
    body: '법인카드 매출 자동 매칭과 부서별 비용 리포트로 정산 시간을 42% 단축.'
  }, {
    icon: 'check',
    title: '글로벌 SOS',
    body: '전 세계 24시간 비상 연락망과 위기관리 프로토콜.'
  }, {
    icon: 'check',
    title: '데이터 분석',
    body: '월별 출장비, 노선·도시별 지출, 정책 준수율을 대시보드로 제공.'
  }];
  return /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    className: "hddt-detail"
  }, /*#__PURE__*/React.createElement("button", {
    className: "hddt-detail__back",
    onClick: onBack
  }, "\u2190 \uC804\uCCB4 \uC11C\uBE44\uC2A4"), /*#__PURE__*/React.createElement("span", {
    className: "hddt-section-header__eyebrow allcaps"
  }, "\uAE30\uC5C5\uCD9C\uC7A5 BTM"), /*#__PURE__*/React.createElement("h1", {
    className: "hddt-detail__title"
  }, "\uC608\uC57D\uBD80\uD130 \uC815\uC0B0\uAE4C\uC9C0, \uD55C \uBC88\uC5D0."), /*#__PURE__*/React.createElement("p", {
    className: "hddt-detail__lead"
  }, "\uD604\uB300\uB4DC\uB9BC\uD22C\uC5B4 \uC2A4\uB9C8\uD2B8 \uCD9C\uC7A5 \uC2DC\uC2A4\uD15C\uC740 \uCD9C\uC7A5 \uC815\uCC45\xB7\uC608\uC57D\xB7\uC2B9\uC778\xB7\uC815\uC0B0\uC744 \uD55C \uD50C\uB7AB\uD3FC\uC5D0\uC11C \uC6B4\uC601\uD569\uB2C8\uB2E4. \uC911\uACAC\uAE30\uC5C5\uBD80\uD130 \uB300\uAE30\uC5C5\xB7\uACF5\uACF5\uAE30\uAD00\uAE4C\uC9C0 1,200\uACF3 \uC774\uC0C1\uC774 \uB3C4\uC785\uD588\uC2B5\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("div", {
    className: "hddt-detail__features"
  }, features.map((f, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "hddt-detail__feature"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hddt-detail__feature-icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: f.icon,
    size: 20
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "hddt-detail__feature-title"
  }, f.title), /*#__PURE__*/React.createElement("div", {
    className: "hddt-detail__feature-body"
  }, f.body))))), /*#__PURE__*/React.createElement("div", {
    className: "hddt-detail__cta"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: onBack
  }, "\uB3C4\uC785 \uC0C1\uB2F4 \uC608\uC57D"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg"
  }, "\uC790\uB8CC \uB2E4\uC6B4\uB85C\uB4DC"))));
}
Object.assign(window, {
  ContactPage,
  BusinessDetailPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/ContactPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/FeaturedSection.jsx
try { (() => {
// ============================================================
// StatsBar · PartnerLogos · FeaturedSection · Testimonial
// ============================================================

function StatsBar() {
  const stats = [{
    num: '180+',
    label: '제휴 항공사'
  }, {
    num: '60만',
    label: '호텔 네트워크'
  }, {
    num: '1,200+',
    label: '도입 기업·기관'
  }, {
    num: '32%',
    label: '평균 비용 절감'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "hddt-stats"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hddt-container hddt-stats__grid"
  }, stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "hddt-stats__item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hddt-stats__num"
  }, s.num), /*#__PURE__*/React.createElement("div", {
    className: "hddt-stats__label"
  }, s.label)))));
}
function PartnerLogos() {
  // Placeholder partner mark slots — flat, monochrome
  const partners = ['대한항공', '아시아나항공', '하나투어', '메리어트', '힐튼', '롯데호텔', '제주항공', 'IHG'];
  return /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Partners",
    title: "\uC2E0\uB8B0\uD560 \uC218 \uC788\uB294 \uAE00\uB85C\uBC8C \uD30C\uD2B8\uB108 \uB124\uD2B8\uC6CC\uD06C",
    align: "center"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hddt-partners"
  }, partners.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "hddt-partners__cell"
  }, p))));
}
function FeaturedCase() {
  return /*#__PURE__*/React.createElement(Section, {
    tone: "surface"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hddt-feature"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hddt-feature__media",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hddt-feature__media-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hddt-feature__pill"
  }, "CASE"), /*#__PURE__*/React.createElement("div", {
    className: "hddt-feature__media-title"
  }, "\uB300\uAE30\uC5C5 A\uC0AC \u2014 \uCD9C\uC7A5 \uC6B4\uC601 \uD1B5\uD569"), /*#__PURE__*/React.createElement("div", {
    className: "hddt-feature__media-stats"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "hddt-feature__stat"
  }, "-42%"), /*#__PURE__*/React.createElement("div", {
    className: "hddt-feature__stat-label"
  }, "\uC815\uC0B0 \uCC98\uB9AC \uC2DC\uAC04")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "hddt-feature__stat"
  }, "+98%"), /*#__PURE__*/React.createElement("div", {
    className: "hddt-feature__stat-label"
  }, "\uC815\uCC45 \uC900\uC218\uC728"))))), /*#__PURE__*/React.createElement("div", {
    className: "hddt-feature__copy"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hddt-section-header__eyebrow allcaps"
  }, "Case Study"), /*#__PURE__*/React.createElement("h2", {
    className: "hddt-section-header__title"
  }, "\uCD9C\uC7A5 \uC815\uCC45\uACFC \uC2DC\uC2A4\uD15C\uC744 \uD55C \uBC88\uC5D0 \uC815\uB82C"), /*#__PURE__*/React.createElement("p", {
    className: "hddt-feature__body"
  }, "\uC81C\uC870 \uB300\uAE30\uC5C5 A\uC0AC\uB294 8\uAC1C \uACC4\uC5F4\uC0AC\uC758 \uCD9C\uC7A5 \uC815\uCC45\uC744 \uD1B5\uD569\uD558\uBA74\uC11C \uD604\uB300\uB4DC\uB9BC\uD22C\uC5B4\uC758 BTM\uC744 \uB3C4\uC785\uD588\uC2B5\uB2C8\uB2E4. \uC608\uC57D \uC2B9\uC778\uBD80\uD130 \uCE74\uB4DC \uC815\uC0B0 \uB9E4\uCE6D\uAE4C\uC9C0 \uC790\uB3D9\uD654\uD558\uC5EC \uC6D4 1,200\uAC74\uC758 \uCD9C\uC7A5\uC744 \uBB34\uB9AC \uC5C6\uC774 \uC6B4\uC601\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4."), /*#__PURE__*/React.createElement(ArrowLink, {
    tone: "primary"
  }, "\uC804\uCCB4 \uC0AC\uB840 \uBCF4\uAE30"))));
}
function Testimonial() {
  return /*#__PURE__*/React.createElement(Section, {
    dark: true
  }, /*#__PURE__*/React.createElement("div", {
    className: "hddt-testimonial"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hddt-testimonial__mark"
  }, "\u201C"), /*#__PURE__*/React.createElement("p", {
    className: "hddt-testimonial__quote"
  }, "\uC608\uC57D\uACFC \uC2B9\uC778, \uC815\uC0B0\uC774 \uD55C \uC2DC\uC2A4\uD15C\uC5D0\uC11C \uB05D\uB0A9\uB2C8\uB2E4. \uCD9C\uC7A5 \uB2F4\uB2F9\uC790\uAC00 \uB530\uB85C \uC5D1\uC140\uC744 \uB9CC\uB4E4 \uD544\uC694\uAC00 \uC5C6\uC5B4\uC84C\uC5B4\uC694."), /*#__PURE__*/React.createElement("div", {
    className: "hddt-testimonial__author"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hddt-testimonial__name"
  }, "\uAE40OO \uCC28\uC7A5"), /*#__PURE__*/React.createElement("div", {
    className: "hddt-testimonial__role"
  }, "B\uC0AC \uC778\uC0AC\uCD1D\uBB34\uD300 \xB7 2025"))));
}
Object.assign(window, {
  StatsBar,
  PartnerLogos,
  FeaturedCase,
  Testimonial
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/FeaturedSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Footer.jsx
try { (() => {
// ============================================================
// Footer
// ============================================================

function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "hddt-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hddt-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hddt-footer__top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hddt-footer__brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources && window.__resources.logo || "../../assets/logo-horizontal-ko.png",
    alt: "\uD604\uB300\uB4DC\uB9BC\uD22C\uC5B4",
    className: "hddt-footer__logo"
  }), /*#__PURE__*/React.createElement("p", {
    className: "hddt-footer__tagline"
  }, "For Your Better Value \u2014 \uB354 \uB098\uC740 \uAC00\uCE58\uB97C \uC704\uD55C \uC5EC\uD589")), /*#__PURE__*/React.createElement("div", {
    className: "hddt-footer__cols"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hddt-footer__col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hddt-footer__heading"
  }, "\uC11C\uBE44\uC2A4"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "\uAE30\uC5C5\uCD9C\uC7A5 BTM"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "MICE \xB7 \uC778\uC13C\uD2F0\uBE0C"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "\uB2E8\uCCB4\uC5EC\uD589"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "\uC5EC\uD589 \uD50C\uB7AB\uD3FC")), /*#__PURE__*/React.createElement("div", {
    className: "hddt-footer__col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hddt-footer__heading"
  }, "\uD68C\uC0AC"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "\uD68C\uC0AC\uC18C\uAC1C"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "\uB274\uC2A4\uB8F8"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "\uCC44\uC6A9"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "\uD30C\uD2B8\uB108\uC2ED")), /*#__PURE__*/React.createElement("div", {
    className: "hddt-footer__col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hddt-footer__heading"
  }, "\uACE0\uAC1D\uC9C0\uC6D0"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "\uBB38\uC758\uD558\uAE30"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "\uC790\uC8FC \uBB3B\uB294 \uC9C8\uBB38"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "\uACF5\uC9C0\uC0AC\uD56D"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "\uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC\uBC29\uCE68")))), /*#__PURE__*/React.createElement("div", {
    className: "hddt-footer__bottom"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hddt-footer__info"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Icon, {
    name: "pin",
    size: 14
  }), " \uC11C\uC6B8\uD2B9\uBCC4\uC2DC \uC11C\uB300\uBB38\uAD6C \uCDA9\uC815\uB85C 23"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 14
  }), " 02-723-2233"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 14
  }), " contact@hyundaidreamtour.com")), /*#__PURE__*/React.createElement("div", {
    className: "hddt-footer__legal"
  }, "\xA9 2026 HYUNDAI DREAM TOUR \xB7 \uD604\uB300\uBC31\uD654\uC810\uADF8\uB8F9 \uACC4\uC5F4\uC0AC"))));
}
Object.assign(window, {
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Header.jsx
try { (() => {
// ============================================================
// Header — sticky top nav with logo + primary CTA
// ============================================================

function Header({
  active = 'home',
  onNav
}) {
  const items = [{
    id: 'home',
    label: '홈'
  }, {
    id: 'business',
    label: '기업출장'
  }, {
    id: 'mice',
    label: 'MICE'
  }, {
    id: 'group',
    label: '단체여행'
  }, {
    id: 'about',
    label: '회사소개'
  }];
  return /*#__PURE__*/React.createElement("header", {
    className: "hddt-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hddt-container hddt-header__inner"
  }, /*#__PURE__*/React.createElement("a", {
    className: "hddt-header__brand",
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav && onNav('home');
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources && window.__resources.logo || "../../assets/logo-horizontal-ko.png",
    alt: "\uD604\uB300\uB4DC\uB9BC\uD22C\uC5B4"
  })), /*#__PURE__*/React.createElement("nav", {
    className: "hddt-header__nav",
    "aria-label": "\uC8FC \uBA54\uB274"
  }, items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it.id,
    href: `#${it.id}`,
    className: cx('hddt-header__link', active === it.id && 'is-active'),
    onClick: e => {
      e.preventDefault();
      onNav && onNav(it.id);
    }
  }, it.label))), /*#__PURE__*/React.createElement("div", {
    className: "hddt-header__cta"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    onClick: () => onNav && onNav('login')
  }, "\uB85C\uADF8\uC778"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: () => onNav && onNav('contact')
  }, "\uBB38\uC758\uD558\uAE30"))));
}
Object.assign(window, {
  Header
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Hero.jsx
try { (() => {
// ============================================================
// Hero — key visual section
// ============================================================

function Hero({
  onNav
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "hddt-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hddt-container hddt-hero__grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hddt-hero__copy"
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "primary"
  }, "For Your Better Value"), /*#__PURE__*/React.createElement("h1", {
    className: "hddt-hero__title"
  }, "\uBE44\uC988\uB2C8\uC2A4 \uC5EC\uC815\uC744", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "hddt-hero__title-accent"
  }, "\uAC00\uCE58 \uC788\uAC8C")), /*#__PURE__*/React.createElement("p", {
    className: "hddt-hero__body"
  }, "\uD604\uB300\uBC31\uD654\uC810\uADF8\uB8F9\uC758 \uC2E0\uB8B0 \uC704\uC5D0 180\uC5EC \uD56D\uACF5\uC0AC\uC640 60\uB9CC \uD638\uD154 \uB124\uD2B8\uC6CC\uD06C\uB97C \uB354\uD588\uC2B5\uB2C8\uB2E4. \uC608\uC57D\uBD80\uD130 \uC815\uC0B0\uAE4C\uC9C0, \uCD9C\uC7A5\uACFC \uB2E8\uCCB4\uC5EC\uD589\uC758 \uBAA8\uB4E0 \uACFC\uC815\uC744 \uD55C \uBC88\uC5D0 \uC815\uB9AC\uD558\uC138\uC694."), /*#__PURE__*/React.createElement("div", {
    className: "hddt-hero__actions"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => onNav && onNav('contact')
  }, "\uC0C1\uB2F4 \uC608\uC57D"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => onNav && onNav('business')
  }, "\uC790\uC138\uD788 \uBCF4\uAE30")), /*#__PURE__*/React.createElement("div", {
    className: "hddt-hero__meta"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 16
  }), " 1,200+ \uAE30\uC5C5\xB7\uAE30\uAD00 \uB3C4\uC785"), /*#__PURE__*/React.createElement("span", {
    className: "hddt-hero__meta-dot"
  }, "\xB7"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 16
  }), " \uD3C9\uADE0 \uCD9C\uC7A5\uBE44 32% \uC808\uAC10"))), /*#__PURE__*/React.createElement("div", {
    className: "hddt-hero__visual",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hddt-hero__visual-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hddt-hero__tile hddt-hero__tile--primary"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "globe",
    size: 32
  }), /*#__PURE__*/React.createElement("div", {
    className: "hddt-hero__tile-num"
  }, "180+"), /*#__PURE__*/React.createElement("div", {
    className: "hddt-hero__tile-label"
  }, "\uC81C\uD734 \uD56D\uACF5\uC0AC")), /*#__PURE__*/React.createElement("div", {
    className: "hddt-hero__tile hddt-hero__tile--dark"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "building",
    size: 32
  }), /*#__PURE__*/React.createElement("div", {
    className: "hddt-hero__tile-num"
  }, "60\uB9CC"), /*#__PURE__*/React.createElement("div", {
    className: "hddt-hero__tile-label"
  }, "\uD638\uD154 \uB124\uD2B8\uC6CC\uD06C")), /*#__PURE__*/React.createElement("div", {
    className: "hddt-hero__tile hddt-hero__tile--orange"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "users",
    size: 32
  }), /*#__PURE__*/React.createElement("div", {
    className: "hddt-hero__tile-num"
  }, "1,200+"), /*#__PURE__*/React.createElement("div", {
    className: "hddt-hero__tile-label"
  }, "\uB3C4\uC785 \uACE0\uAC1D\uC0AC")), /*#__PURE__*/React.createElement("div", {
    className: "hddt-hero__tile hddt-hero__tile--light"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chart",
    size: 32
  }), /*#__PURE__*/React.createElement("div", {
    className: "hddt-hero__tile-num"
  }, "32%"), /*#__PURE__*/React.createElement("div", {
    className: "hddt-hero__tile-label"
  }, "\uD3C9\uADE0 \uBE44\uC6A9 \uC808\uAC10"))))));
}
Object.assign(window, {
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/ServiceCard.jsx
try { (() => {
// ============================================================
// ServiceCard — default + featured (dark) variants
// ============================================================

function ServiceCard({
  category,
  title,
  body,
  href = '#',
  onClick,
  icon,
  featured = false
}) {
  if (featured) {
    return /*#__PURE__*/React.createElement("article", {
      className: "hddt-card hddt-card--featured",
      onClick: onClick,
      role: onClick ? 'button' : undefined
    }, /*#__PURE__*/React.createElement("span", {
      className: "hddt-card__accent",
      "aria-hidden": "true"
    }), /*#__PURE__*/React.createElement("div", {
      className: "hddt-card__icon hddt-card__icon--dark"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: icon || 'star',
      size: 28
    })), /*#__PURE__*/React.createElement("span", {
      className: "hddt-badge hddt-badge--dark-tint"
    }, category), /*#__PURE__*/React.createElement("h3", {
      className: "hddt-card__title"
    }, title), /*#__PURE__*/React.createElement("p", {
      className: "hddt-card__body"
    }, body), /*#__PURE__*/React.createElement("a", {
      className: "hddt-arrow-link hddt-arrow-link--warm",
      href: href,
      onClick: e => {
        if (onClick) {
          e.preventDefault();
          onClick();
        }
      }
    }, /*#__PURE__*/React.createElement("span", null, "\uC790\uC138\uD788 \uBCF4\uAE30"), /*#__PURE__*/React.createElement("span", {
      className: "hddt-arrow-link__arrow"
    }, "\u2192")));
  }
  return /*#__PURE__*/React.createElement("article", {
    className: "hddt-card",
    onClick: onClick,
    role: onClick ? 'button' : undefined
  }, /*#__PURE__*/React.createElement("div", {
    className: "hddt-card__icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon || 'briefcase',
    size: 28
  })), /*#__PURE__*/React.createElement("span", {
    className: "hddt-badge hddt-badge--primary"
  }, category), /*#__PURE__*/React.createElement("h3", {
    className: "hddt-card__title"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "hddt-card__body"
  }, body), /*#__PURE__*/React.createElement("a", {
    className: "hddt-arrow-link hddt-arrow-link--primary",
    href: href,
    onClick: e => {
      if (onClick) {
        e.preventDefault();
        onClick();
      }
    }
  }, /*#__PURE__*/React.createElement("span", null, "\uC790\uC138\uD788 \uBCF4\uAE30"), /*#__PURE__*/React.createElement("span", {
    className: "hddt-arrow-link__arrow"
  }, "\u2192")));
}
function ServiceGrid({
  onNav
}) {
  const services = [{
    category: '기업출장',
    icon: 'briefcase',
    title: '스마트 출장 시스템 (BTM)',
    body: '예약·승인·정산을 통합 관리하는 기업 전용 출장 솔루션. 출장 업무 효율을 50% 이상 단축합니다.',
    target: 'business'
  }, {
    category: 'MICE',
    icon: 'users',
    title: '글로벌 MICE 솔루션',
    body: '컨퍼런스·인센티브 투어·전시까지, 전담 PM이 처음부터 끝까지 운영합니다.',
    target: 'mice',
    featured: true
  }, {
    category: '단체여행',
    icon: 'map',
    title: '임직원 단체여행 기획',
    body: '워크숍, 포상휴가, 기관 단체여행 — 규모와 예산에 맞춰 맞춤형 일정을 설계합니다.',
    target: 'group'
  }, {
    category: '개별여행',
    icon: 'plane',
    title: '여행 플랫폼 (드림투어)',
    body: '항공·호텔·패키지를 한 곳에서. 임직원 복지몰 연동까지 지원합니다.',
    target: 'platform'
  }];
  return /*#__PURE__*/React.createElement(Section, {
    id: "services"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Services",
    title: "\uAE30\uC5C5\uACFC \uAE30\uAD00\uC744 \uC704\uD55C \uD1A0\uD0C8 \uC5EC\uD589 \uC194\uB8E8\uC158",
    body: "\uD604\uB300\uB4DC\uB9BC\uD22C\uC5B4\uB294 \uCD9C\uC7A5\xB7MICE\xB7\uB2E8\uCCB4\uC5EC\uD589\xB7\uAC1C\uBCC4\uC5EC\uD589\uC744 \uBAA8\uB450 \uB2E4\uB8E8\uB294 \uC885\uD569 \uC5EC\uD589 \uC804\uBB38 \uAE30\uC5C5\uC785\uB2C8\uB2E4."
  }), /*#__PURE__*/React.createElement("div", {
    className: "hddt-service-grid"
  }, services.map((s, i) => /*#__PURE__*/React.createElement(ServiceCard, {
    key: i,
    category: s.category,
    title: s.title,
    body: s.body,
    icon: s.icon,
    featured: s.featured,
    onClick: () => onNav && onNav(s.target)
  }))));
}
function SectionHeader({
  eyebrow,
  title,
  body,
  align = 'left'
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: cx('hddt-section-header', `is-${align}`)
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    className: "hddt-section-header__eyebrow allcaps"
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    className: "hddt-section-header__title"
  }, title), body && /*#__PURE__*/React.createElement("p", {
    className: "hddt-section-header__body"
  }, body));
}
Object.assign(window, {
  ServiceCard,
  ServiceGrid,
  SectionHeader
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/primitives.jsx
try { (() => {
// ============================================================
// 현대드림투어 — Atomic primitives
// Button · Badge · Input · TextField · ChipLink · Container
// ============================================================

const cx = (...c) => c.filter(Boolean).join(' ');
function Button({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  disabled,
  type = 'button',
  as: As = 'button',
  href
}) {
  const cls = cx('hddt-btn', `hddt-btn--${variant}`, `hddt-btn--${size}`, disabled && 'is-disabled');
  if (As === 'a' || href) {
    return /*#__PURE__*/React.createElement("a", {
      className: cls,
      href: href || '#',
      onClick: onClick
    }, children);
  }
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    className: cls,
    onClick: onClick,
    disabled: disabled
  }, children);
}
function Badge({
  variant = 'primary',
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: cx('hddt-badge', `hddt-badge--${variant}`)
  }, children);
}
function TextField({
  label,
  placeholder,
  value,
  onChange,
  error,
  type = 'text',
  id,
  name
}) {
  const inputId = id || name || (label ? `f-${label.replace(/\s+/g, '-')}` : undefined);
  return /*#__PURE__*/React.createElement("label", {
    className: "hddt-field",
    htmlFor: inputId
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "hddt-field__label"
  }, label), /*#__PURE__*/React.createElement("input", {
    id: inputId,
    name: name,
    type: type,
    className: cx('hddt-input', error && 'is-error'),
    placeholder: placeholder,
    value: value,
    onChange: onChange
  }), error && /*#__PURE__*/React.createElement("span", {
    className: "hddt-field__error"
  }, error));
}
function TextArea({
  label,
  placeholder,
  value,
  onChange,
  rows = 4,
  name
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: "hddt-field"
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "hddt-field__label"
  }, label), /*#__PURE__*/React.createElement("textarea", {
    name: name,
    rows: rows,
    className: "hddt-input hddt-input--multi",
    placeholder: placeholder,
    value: value,
    onChange: onChange
  }));
}
function Select({
  label,
  value,
  onChange,
  options,
  name
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: "hddt-field"
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "hddt-field__label"
  }, label), /*#__PURE__*/React.createElement("select", {
    className: "hddt-input hddt-select",
    name: name,
    value: value,
    onChange: onChange
  }, options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))));
}
function ArrowLink({
  children,
  onClick,
  href = '#',
  tone = 'primary'
}) {
  return /*#__PURE__*/React.createElement("a", {
    className: cx('hddt-arrow-link', `hddt-arrow-link--${tone}`),
    href: href,
    onClick: e => {
      if (onClick) {
        e.preventDefault();
        onClick(e);
      }
    }
  }, /*#__PURE__*/React.createElement("span", null, children), /*#__PURE__*/React.createElement("span", {
    className: "hddt-arrow-link__arrow",
    "aria-hidden": "true"
  }, "\u2192"));
}
function Section({
  children,
  dark,
  tone,
  className,
  id
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    className: cx('hddt-section', dark && 'hddt-section--dark', tone && `hddt-section--${tone}`, className)
  }, /*#__PURE__*/React.createElement("div", {
    className: "hddt-container"
  }, children));
}

// Tiny inline icon set — line, 1.5px stroke (Lucide-style)
function Icon({
  name,
  size = 20
}) {
  const props = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.5,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true
  };
  switch (name) {
    case 'briefcase':
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
        d: "M3 8h18v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M3 13h18"
      }));
    case 'globe':
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "9"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M3 12h18"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M12 3a14 14 0 0 1 0 18a14 14 0 0 1 0-18"
      }));
    case 'users':
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
        d: "M16 19v-1a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v1"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "9",
        cy: "7",
        r: "4"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M22 19v-1a4 4 0 0 0-3-3.87"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M16 3.13a4 4 0 0 1 0 7.75"
      }));
    case 'plane':
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
        d: "M17.8 19.8 13 14l-3.5 3v3l-2-2-2-2h3l3-3.5L6.2 7.2 4 8 2 6l4-2 2-2 2 2 .8 2-5.4 5.4L9 15l3.5-3 5.8 4.8L20 16l2 2-2 2-2-2-1.2 1.8z"
      }));
    case 'building':
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("rect", {
        x: "4",
        y: "3",
        width: "16",
        height: "18",
        rx: "1"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M10 21v-3h4v3"
      }));
    case 'map':
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
        d: "M9 3 3 5v16l6-2 6 2 6-2V3l-6 2-6-2z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M9 3v16M15 5v16"
      }));
    case 'check':
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
        d: "m20 6-11 11-5-5"
      }));
    case 'arrow':
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
        d: "M5 12h14M13 5l7 7-7 7"
      }));
    case 'phone':
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
        d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"
      }));
    case 'mail':
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("rect", {
        x: "2",
        y: "4",
        width: "20",
        height: "16",
        rx: "2"
      }), /*#__PURE__*/React.createElement("path", {
        d: "m22 6-10 7L2 6"
      }));
    case 'pin':
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
        d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "10",
        r: "3"
      }));
    case 'menu':
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
        d: "M4 6h16M4 12h16M4 18h16"
      }));
    case 'close':
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
        d: "M18 6 6 18M6 6l12 12"
      }));
    case 'star':
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
        d: "m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"
      }));
    case 'chart':
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
        d: "M3 3v18h18"
      }), /*#__PURE__*/React.createElement("path", {
        d: "m7 14 4-4 4 4 5-5"
      }));
    default:
      return null;
  }
}
Object.assign(window, {
  Button,
  Badge,
  TextField,
  TextArea,
  Select,
  ArrowLink,
  Section,
  Icon,
  cx
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/primitives.jsx", error: String((e && e.message) || e) }); }

})();
