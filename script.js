const rtlLanguages = ["ar", "he", "fa", "ur", "ps", "sd", "ug", "yi", "dv", "ku"];

const translations = {
  en: {
    skip: "Skip to main content",
    navLabel: "Project navigation",
    navLocalization: "Localization",
    navNewsletter: "Newsletter",
    languageSwitcher: "Language switcher",
    heroEyebrow: "Localized Clean Energy Control Room",
    heroTitle: "Sustainability Operations Timeline",
    heroCopy: "Tracking Intel's path from semiconductor innovation to responsible operations, renewable energy, water stewardship, waste reduction, and net-zero goals.",
    themeLabel: "Project themes",
    tag1: "RTL Ready",
    tag2: "Bootstrap Grid",
    tag3: "Accessible Form",
    tag4: "Language Detection",
    statusPanelLabel: "Timeline status summary",
    statusHeader: "Localization Monitor",
    statusCopy: "The page can switch between English and Arabic while preserving responsive layout, readable contrast, and keyboard-friendly interactions.",
    featuresLabel: "Project features",
    metric1: "milestones",
    metric2: "info columns",
    metric3: "contrast",
    conceptLabel: "Localization Concept",
    conceptTitle: "One sustainability story, readable in more than one direction.",
    conceptBody: "This update keeps the clean energy control-room identity from the original timeline, then adds localization support, Bootstrap layout tools, accessible form controls, and right-to-left behavior for Arabic readers.",
    timelineLabel: "Interactive Timeline",
    timelineTitle: "From chips to measurable climate goals",
    timelineHint: "Scroll horizontally on desktop. Hover or focus on each node to reveal additional details.",
    timelineAria: "Intel sustainability milestones",
    threeLabel: "Global Access Layer",
    threeTitle: "Making the timeline work for more users",
    threeIntro: "Bootstrap's grid helps this new section adapt from three columns on large screens to a single readable column on mobile devices.",
    feature1Title: "RTL Localization",
    feature1Copy: "The page supports Arabic by switching the document direction, text alignment, Bootstrap RTL stylesheet, and control placement.",
    feature2Title: "Responsive Bootstrap Grid",
    feature2Copy: "A new three-column section uses Bootstrap row and column classes so the layout stays organized on desktop, tablet, and mobile screens.",
    feature3Title: "Accessible Experience",
    feature3Copy: "Images use descriptive alt text, the form has visible labels, buttons have focus states, and the color palette is designed for strong contrast.",
    learnMore: "Learn More",
    accordionLabel: "Interactive QA Notes",
    accordionTitle: "How the localized version was checked",
    accordion1Title: "RTL behavior",
    accordion1Body: "The JavaScript language watcher applies RTL when the HTML language changes to Arabic, Hebrew, Persian, Urdu, or another RTL language.",
    accordion2Title: "Accessibility improvements",
    accordion2Body: "The page includes skip navigation, semantic headings, image alt text, visible labels, required form fields, keyboard focus styles, and reduced-motion support.",
    accordion3Title: "Responsive testing",
    accordion3Body: "The original timeline still scrolls horizontally on wide screens and stacks vertically on small screens, while the Bootstrap grid collapses cleanly.",
    newsletterLabel: "Newsletter",
    newsletterTitle: "Subscribe to sustainability updates",
    newsletterHelp: "Sign up for a short email update about Intel's sustainability milestones, accessibility improvements, and localized web experiences.",
    emailLabel: "Email address",
    emailHelp: "Use a valid email address. This demo form will not submit real data.",
    consentLabel: "I agree to receive sustainability newsletter updates.",
    subscribeButton: "Subscribe",
    formSuccess: "Thank you. Your demo subscription has been recorded on this page.",
    formMissing: "Please enter a valid email address and check the consent box.",
    footerCopy: "Localized student web project built with HTML, CSS, Bootstrap, JavaScript, responsive design, and accessible form practices.",
    footerNavLabel: "Footer navigation",
    footerTimeline: "Timeline",
    footerLocalization: "Localization",
    footerNewsletter: "Newsletter",
    copyright: "© 2026 Student project. Educational use only.",
    closeLabel: "Close",
    closeButton: "Close",
    modal: {
      rtl: {
        title: "RTL localization",
        body: "This feature changes the document language, direction, alignment, and Bootstrap stylesheet so Arabic content reads naturally from right to left."
      },
      grid: {
        title: "Bootstrap grid",
        body: "The feature section uses Bootstrap container, row, and column classes. It displays three cards on wider screens and stacks them on smaller screens."
      },
      access: {
        title: "Accessibility",
        body: "The page uses semantic headings, alt text, form labels, required-field feedback, visible focus states, and reduced-motion support to make the experience more inclusive."
      }
    },
    cards: [
      { meta: "Foundation", alt: "Dark control-room style illustration of an early semiconductor lab", title: "Intel Founded", summary: "Intel begins as a semiconductor company focused on memory and integrated circuits.", details: "This starting point frames the timeline: smaller and faster chips eventually connect technical progress with operational responsibility." },
      { meta: "Compute", alt: "Dark dashboard illustration of a microprocessor core and circuit signal paths", title: "First Microprocessor", summary: "The Intel 4004 helps launch the microprocessor era.", details: "More computing power moved into smaller forms, creating a long-term design challenge: improving performance while managing energy demand." },
      { meta: "Scale", alt: "Dark module illustration of an 8086 style chip expanding into a computing network", title: "8086 Processor", summary: "The 8086 processor becomes a key milestone in personal computing history.", details: "As computing scaled toward everyday use, the environmental impact of manufacturing, electricity, water, and waste became more important." },
      { meta: "RISE", alt: "Dark dashboard showing responsibility, inclusion, and sustainability modules", title: "RISE 2030 Strategy", summary: "Intel introduces its RISE strategy and 2030 goals.", details: "RISE connects responsibility, inclusion, and sustainability, turning corporate responsibility into measurable long-term targets." },
      { meta: "Climate", alt: "Dark clean-energy factory illustration with net-zero signal loops", title: "Net-Zero Roadmap", summary: "Intel commits to net-zero Scope 1 and 2 greenhouse gas emissions by 2040.", details: "The plan emphasizes direct emissions reduction first, supported by renewable electricity, energy conservation, and lower-carbon operations." },
      { meta: "Energy", alt: "Dark solar and chip energy meter illustration showing renewable electricity progress", title: "Renewable Progress", summary: "Intel reports 99% global renewable electricity progress in 2025.", details: "This milestone shows sustainability as an operational metric that can be tracked through energy sourcing, facilities, and regional progress." },
      { meta: "2030 Targets", alt: "Dark operations dashboard with energy, water, and waste target indicators", title: "Operational Goals", summary: "Intel aims for 100% renewable electricity, net positive water, and zero waste to landfill.", details: "The 2030 targets connect environmental responsibility to measurable outcomes across energy, water stewardship, and circular manufacturing." },
      { meta: "Future State", alt: "Dark future fab illustration connected to a clean-energy loop and net-zero marker", title: "Net-Zero Operations", summary: "Intel targets net-zero Scope 1 and 2 greenhouse gas emissions across global operations.", details: "The final node turns the timeline toward accountability: innovation is strongest when performance, scale, and environmental impact improve together." }
    ]
  },
  ar: {
    skip: "تخط إلى المحتوى الرئيسي",
    navLabel: "تنقل المشروع",
    navLocalization: "التوطين",
    navNewsletter: "النشرة",
    languageSwitcher: "مبدل اللغة",
    heroEyebrow: "غرفة تحكم مترجمة للطاقة النظيفة",
    heroTitle: "الخط الزمني لعمليات الاستدامة",
    heroCopy: "تتبع رحلة إنتل من ابتكار أشباه الموصلات إلى العمليات المسؤولة والطاقة المتجددة وإدارة المياه وتقليل النفايات وأهداف صافي الانبعاثات الصفرية.",
    themeLabel: "موضوعات المشروع",
    tag1: "جاهز للاتجاه من اليمين إلى اليسار",
    tag2: "شبكة Bootstrap",
    tag3: "نموذج ميسر",
    tag4: "اكتشاف اللغة",
    statusPanelLabel: "ملخص حالة الخط الزمني",
    statusHeader: "مراقب التوطين",
    statusCopy: "يمكن للصفحة التبديل بين الإنجليزية والعربية مع الحفاظ على التخطيط المتجاوب والتباين المقروء والتفاعل المناسب للوحة المفاتيح.",
    featuresLabel: "ميزات المشروع",
    metric1: "محطات",
    metric2: "أعمدة معلومات",
    metric3: "تباين",
    conceptLabel: "فكرة التوطين",
    conceptTitle: "قصة استدامة واحدة يمكن قراءتها في أكثر من اتجاه.",
    conceptBody: "يحافظ هذا التحديث على هوية غرفة التحكم بالطاقة النظيفة من الخط الزمني الأصلي، ثم يضيف دعم التوطين وأدوات Bootstrap ونماذج ميسرة وسلوكا مناسبا للقراءة العربية من اليمين إلى اليسار.",
    timelineLabel: "خط زمني تفاعلي",
    timelineTitle: "من الرقائق إلى أهداف مناخية قابلة للقياس",
    timelineHint: "مرر أفقيا على سطح المكتب. مرر المؤشر أو ركز على كل عقدة لإظهار تفاصيل إضافية.",
    timelineAria: "محطات استدامة إنتل",
    threeLabel: "طبقة الوصول العالمية",
    threeTitle: "جعل الخط الزمني مناسبا لعدد أكبر من المستخدمين",
    threeIntro: "تساعد شبكة Bootstrap هذا القسم الجديد على التحول من ثلاثة أعمدة في الشاشات الكبيرة إلى عمود واحد مقروء على الأجهزة الصغيرة.",
    feature1Title: "توطين RTL",
    feature1Copy: "تدعم الصفحة العربية من خلال تبديل اتجاه المستند ومحاذاة النص وملف Bootstrap الخاص بالاتجاه من اليمين إلى اليسار ومواضع عناصر التحكم.",
    feature2Title: "شبكة Bootstrap متجاوبة",
    feature2Copy: "يستخدم قسم الأعمدة الثلاثة فئات الصفوف والأعمدة في Bootstrap ليبقى التخطيط منظما على سطح المكتب والأجهزة اللوحية والهواتف.",
    feature3Title: "تجربة ميسرة",
    feature3Copy: "تستخدم الصور نصا بديلا وصفيا، ويحتوي النموذج على تسميات واضحة، وللأزرار حالات تركيز، كما صممت الألوان لتباين قوي.",
    learnMore: "اعرف المزيد",
    accordionLabel: "ملاحظات اختبار تفاعلية",
    accordionTitle: "كيف تم فحص النسخة المترجمة",
    accordion1Title: "سلوك الاتجاه من اليمين إلى اليسار",
    accordion1Body: "يطبق مراقب اللغة في JavaScript اتجاه RTL عندما تتغير لغة HTML إلى العربية أو العبرية أو الفارسية أو الأردية أو لغة أخرى تكتب من اليمين إلى اليسار.",
    accordion2Title: "تحسينات إمكانية الوصول",
    accordion2Body: "تتضمن الصفحة رابط تخط، وعناوين دلالية، ونصا بديلا للصور، وتسميات مرئية للنموذج، وحقولا مطلوبة، وأنماط تركيز واضحة، ودعما لتقليل الحركة.",
    accordion3Title: "اختبار الاستجابة",
    accordion3Body: "لا يزال الخط الزمني الأصلي يتمرر أفقيا على الشاشات الواسعة ويتحول إلى ترتيب عمودي على الشاشات الصغيرة، بينما تنهار شبكة Bootstrap بسلاسة.",
    newsletterLabel: "النشرة الإخبارية",
    newsletterTitle: "اشترك في تحديثات الاستدامة",
    newsletterHelp: "سجل للحصول على تحديث قصير عبر البريد الإلكتروني حول محطات استدامة إنتل وتحسينات إمكانية الوصول وتجارب الويب المترجمة.",
    emailLabel: "عنوان البريد الإلكتروني",
    emailHelp: "استخدم عنوان بريد إلكتروني صالحا. هذا النموذج التجريبي لا يرسل بيانات حقيقية.",
    consentLabel: "أوافق على تلقي تحديثات النشرة الإخبارية للاستدامة.",
    subscribeButton: "اشترك",
    formSuccess: "شكرا لك. تم تسجيل اشتراكك التجريبي على هذه الصفحة.",
    formMissing: "يرجى إدخال بريد إلكتروني صالح وتحديد مربع الموافقة.",
    footerCopy: "مشروع ويب طلابي مترجم تم بناؤه باستخدام HTML وCSS وBootstrap وJavaScript والتصميم المتجاوب وممارسات النماذج الميسرة.",
    footerNavLabel: "تنقل التذييل",
    footerTimeline: "الخط الزمني",
    footerLocalization: "التوطين",
    footerNewsletter: "النشرة",
    copyright: "© 2026 مشروع طلابي. للاستخدام التعليمي فقط.",
    closeLabel: "إغلاق",
    closeButton: "إغلاق",
    modal: {
      rtl: {
        title: "توطين RTL",
        body: "تغير هذه الميزة لغة المستند واتجاهه ومحاذاته وملف Bootstrap حتى يقرأ المحتوى العربي بشكل طبيعي من اليمين إلى اليسار."
      },
      grid: {
        title: "شبكة Bootstrap",
        body: "يستخدم قسم الميزات فئات container وrow وcolumn في Bootstrap. تظهر ثلاث بطاقات على الشاشات الواسعة وتتكدس على الشاشات الصغيرة."
      },
      access: {
        title: "إمكانية الوصول",
        body: "تستخدم الصفحة عناوين دلالية ونصا بديلا وتسميات للنماذج وتعليقات للحقول المطلوبة وحالات تركيز مرئية ودعما لتقليل الحركة."
      }
    },
    cards: [
      { meta: "البداية", alt: "رسم بأسلوب غرفة تحكم داكنة لمختبر أشباه موصلات مبكر", title: "تأسيس إنتل", summary: "بدأت إنتل كشركة لأشباه الموصلات تركز على الذاكرة والدوائر المتكاملة.", details: "تمثل هذه البداية إطار الخط الزمني: فالرقائق الأصغر والأسرع ربطت لاحقا التقدم التقني بالمسؤولية التشغيلية." },
      { meta: "الحوسبة", alt: "رسم لوحة معلومات داكنة لنواة معالج دقيق ومسارات إشارات", title: "أول معالج دقيق", summary: "ساعد Intel 4004 في إطلاق عصر المعالجات الدقيقة.", details: "انتقلت قدرة حوسبة أكبر إلى أحجام أصغر، مما خلق تحديا طويل الأمد: تحسين الأداء مع إدارة الطلب على الطاقة." },
      { meta: "التوسع", alt: "رسم داكن لشريحة بأسلوب 8086 تتوسع إلى شبكة حوسبة", title: "معالج 8086", summary: "أصبح معالج 8086 محطة مهمة في تاريخ الحوسبة الشخصية.", details: "مع توسع الحوسبة إلى الاستخدام اليومي، أصبحت آثار التصنيع والكهرباء والمياه والنفايات أكثر أهمية." },
      { meta: "RISE", alt: "لوحة داكنة تعرض وحدات المسؤولية والشمول والاستدامة", title: "استراتيجية RISE 2030", summary: "قدمت إنتل استراتيجية RISE وأهداف 2030.", details: "تربط RISE بين المسؤولية والشمول والاستدامة وتحول المسؤولية المؤسسية إلى أهداف طويلة الأجل قابلة للقياس." },
      { meta: "المناخ", alt: "رسم مصنع طاقة نظيفة داكن مع حلقات صافي الصفر", title: "خريطة طريق صافي الصفر", summary: "تلتزم إنتل بصافي انبعاثات صفرية للنطاقين 1 و2 بحلول عام 2040.", details: "تركز الخطة أولا على تقليل الانبعاثات المباشرة، بدعم من الكهرباء المتجددة وترشيد الطاقة والعمليات الأقل كربونا." },
      { meta: "الطاقة", alt: "رسم داكن لألواح شمسية ومقياس طاقة للرقائق يوضح تقدم الكهرباء المتجددة", title: "تقدم الطاقة المتجددة", summary: "أعلنت إنتل عن تقدم بنسبة 99% في الكهرباء المتجددة عالميا في عام 2025.", details: "تظهر هذه المحطة الاستدامة كمؤشر تشغيلي يمكن تتبعه عبر مصادر الطاقة والمنشآت والتقدم الإقليمي." },
      { meta: "أهداف 2030", alt: "لوحة عمليات داكنة مع مؤشرات لأهداف الطاقة والمياه والنفايات", title: "أهداف تشغيلية", summary: "تهدف إنتل إلى كهرباء متجددة بنسبة 100%، ومياه إيجابية صافية، وصفر نفايات إلى المكبات.", details: "تربط أهداف 2030 المسؤولية البيئية بنتائج قابلة للقياس في الطاقة وإدارة المياه والتصنيع الدائري." },
      { meta: "حالة المستقبل", alt: "رسم مصنع مستقبلي داكن متصل بحلقة طاقة نظيفة وعلامة صافي الصفر", title: "عمليات صافي الصفر", summary: "تستهدف إنتل صافي انبعاثات صفرية للنطاقين 1 و2 عبر عملياتها العالمية.", details: "توجه العقدة الأخيرة الخط الزمني نحو المساءلة: يكون الابتكار أقوى عندما يتحسن الأداء والحجم والأثر البيئي معا." }
    ]
  }
};

let currentLanguage = document.documentElement.lang || "en";

function getNestedValue(obj, path) {
  return path.split(".").reduce((current, key) => {
    if (current === undefined || current === null) return undefined;
    if (/^\d+$/.test(key)) return current[Number(key)];
    return current[key];
  }, obj);
}

function isRTL(languageCode) {
  const normalized = String(languageCode || "en").toLowerCase().split("-")[0];
  return rtlLanguages.includes(normalized);
}

function applyDirection(languageCode) {
  const safeLanguage = String(languageCode || "en");
  const rtl = isRTL(safeLanguage);
  const desiredDirection = rtl ? "rtl" : "ltr";

  // Only write attributes when they actually need to change.
  // This prevents the language MutationObserver from repeatedly
  // reacting to its own updates and freezing the browser.
  if (document.documentElement.getAttribute("dir") !== desiredDirection) {
    document.documentElement.setAttribute("dir", desiredDirection);
  }

  if (document.documentElement.getAttribute("lang") !== safeLanguage) {
    document.documentElement.setAttribute("lang", safeLanguage);
  }

  const ltrSheet = document.getElementById("bootstrap-ltr");
  const rtlSheet = document.getElementById("bootstrap-rtl");
  if (ltrSheet && rtlSheet) {
    ltrSheet.disabled = rtl;
    rtlSheet.disabled = !rtl;
  }
}

function translatePage(languageCode) {
  const language = translations[languageCode] ? languageCode : "en";
  currentLanguage = language;
  applyDirection(language);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = getNestedValue(translations[language], element.dataset.i18n);
    if (value) element.textContent = value;
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const value = getNestedValue(translations[language], element.dataset.i18nAlt);
    if (value) element.setAttribute("alt", value);
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const value = getNestedValue(translations[language], element.dataset.i18nAriaLabel);
    if (value) element.setAttribute("aria-label", value);
  });

  document.querySelectorAll(".lang-btn").forEach((button) => {
    const active = button.dataset.lang === language;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

function updateModal(topic) {
  const content = translations[currentLanguage]?.modal?.[topic] || translations.en.modal[topic];
  document.getElementById("learnMoreModalLabel").textContent = content.title;
  document.getElementById("learnMoreModalBody").textContent = content.body;
}

function detectExternalLanguageChange() {
  const language = document.documentElement.getAttribute("lang") || currentLanguage || "en";
  applyDirection(language);
}

document.querySelectorAll(".lang-btn").forEach((button) => {
  button.addEventListener("click", () => translatePage(button.dataset.lang));
});

document.querySelectorAll("[data-topic]").forEach((button) => {
  button.addEventListener("click", () => updateModal(button.dataset.topic));
});

const newsletterForm = document.querySelector(".newsletter-form");
const formStatus = document.querySelector(".form-status");

newsletterForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const valid = newsletterForm.checkValidity();
  newsletterForm.classList.add("was-validated");
  if (valid) {
    formStatus.textContent = translations[currentLanguage].formSuccess;
    newsletterForm.reset();
    newsletterForm.classList.remove("was-validated");
  } else {
    formStatus.textContent = translations[currentLanguage].formMissing;
  }
});

const languageObserver = new MutationObserver(detectExternalLanguageChange);
languageObserver.observe(document.documentElement, {
  attributes: true,
  // Watch only language changes from tools such as Google Translate.
  // Direction changes are handled by applyDirection(), so observing dir
  // would create unnecessary repeated callbacks.
  attributeFilter: ["lang"]
});

translatePage("en");
