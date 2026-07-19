/* Language switching engine + interface dictionary — loaded after data.js, before common.js.
   Deep content (certification names/descriptions, course info, quiz text, stage names/tags)
   already carries [ar,en] pairs inside data.js and is looked up directly from there via LANG();
   this file only owns the fixed interface chrome (nav, headings, buttons, footer, forms, messages). */
"use strict";

const I18N = {
  // ---- shared: nav / footer / misc chrome ----
  nav_home: ["الرئيسية", "Home"],
  nav_quiz: ["اختبر مسارك", "Take the Quiz"],
  nav_courses: ["الدورات المجانية", "Free Courses"],
  nav_cv: ["مدرب السيرة الذاتية", "CV Coach"],
  nav_catalog: ["دليل الشهادات", "Certificate Guide"],
  brand_tagline: ["بوصلتي المهنية", "My Career Compass"],
  nav_menu_aria: ["القائمة", "Menu"],
  theme_toggle_aria: ["تبديل المظهر", "Toggle theme"],
  lang_toggle_aria: ["تبديل اللغة", "Switch language"],

  about_summary: ["🧭 من نحن؟", "🧭 About Us"],
  about_text: [
    "MyPath منصة تجريبية تفاعلية تساعد الخريجين وطلاب التقنية في المملكة على اكتشاف مسارهم المهني المناسب، عبر بناء خارطة طريق واقعية من الشهادات والدورات المعتمدة المدعومة من صندوق تنمية الموارد البشرية (هدف)، إلى جانب مدرب ذكي لتقييم السيرة الذاتية. هذا المشروع نموذج توضيحي (Prototype) غير رسمي وغير تابع لأي جهة حكومية، صُمم لتسهيل الوصول للمعلومة وتحفيز التطوير المهني.",
    "MyPath is an interactive demo platform that helps tech graduates and students in Saudi Arabia discover their career path, by building a realistic roadmap of certifications and courses backed by the Human Resources Development Fund (Hadaf), alongside a smart CV coach. This is an unofficial prototype, not affiliated with any government body — built to make this information easier to access and to encourage professional development."
  ],
  sources_summary: ["📚 المصادر", "📚 Sources"],
  sources_text_index: [
    "المصدر: «دليل الشهادات المهنية الاحترافية المدعومة في قطاع الاتصالات وتقنية المعلومات» — النسخة الثانية 2025، الصادر عن المؤسسة العامة للتدريب التقني والمهني وصندوق تنمية الموارد البشرية (هدف). الأسعار الموضحة تمثل الحد الأعلى للتعويض ضمن منتج دعم الشهادات المهنية الاحترافية، وهي عرضة للتحديث الدوري — يرجى مراجعة الدليل الرسمي ومنصة «هدف» للتفاصيل والتسجيل. روابط الجهات المانحة والدورات تُحيل إلى صفحاتها الرسمية العامة، وليست بالضرورة رابطًا مباشرًا لاختبار أو دورة بعينها — تأكد من التفاصيل الدقيقة عبر موقع كل جهة. هذا الموقع نموذج توضيحي، وتحليل السيرة الذاتية مبني على قواعد استرشادية وقراءة نصية آلية للملف، وليس نظام ذكاء اصطناعي مُدرَّب. لتحسين الموقع، نسجّل زيارات مجهولة تمامًا (الصفحة، ونوع الجهاز ونظامه ومتصفحه فقط)، بلا IP أو ملفات تعريف ارتباط أو تحديد موقع جغرافي أو أي بيانات شخصية.",
    "Source: \"Guide to Supported Professional Certifications in the Telecom & IT Sector,\" 2nd edition 2025, issued by TVTC and the Human Resources Development Fund (Hadaf). Prices shown are the maximum reimbursement under the professional certification support program and are subject to periodic updates — check the official guide and the Hadaf platform for details and registration. Provider and course links point to each organization's general official page, not necessarily a direct link to a specific exam or course — verify exact details on each provider's site. This site is a demo prototype; CV analysis is based on heuristic rules and automated text extraction, not a trained AI model. To improve the site, we log fully anonymous visits (page, device type, OS, and browser only) — no IP address, cookies, geolocation, or personal data."
  ],
  sources_text_roadmap: [
    "المصدر: «دليل الشهادات المهنية الاحترافية المدعومة في قطاع الاتصالات وتقنية المعلومات» — النسخة الثانية 2025، الصادر عن المؤسسة العامة للتدريب التقني والمهني وصندوق تنمية الموارد البشرية (هدف). الأسعار الموضحة أعلى الحدّ الأعلى للتعويض ضمن منتج دعم الشهادات المهنية الاحترافية، وهي عرضة للتحديث — يرجى مراجعة الدليل الرسمي ومنصة «هدف» للتفاصيل والتسجيل. روابط الجهات المانحة تُحيل إلى صفحاتها الرسمية العامة، وليست بالضرورة رابطًا مباشرًا لاختبار بعينه — تأكد من الشهادة المحددة عبر موقع كل جهة. لتحسين الموقع، نسجّل زيارات مجهولة تمامًا (الصفحة، ونوع الجهاز ونظامه ومتصفحه فقط)، بلا IP أو ملفات تعريف ارتباط أو تحديد موقع جغرافي أو أي بيانات شخصية.",
    "Source: \"Guide to Supported Professional Certifications in the Telecom & IT Sector,\" 2nd edition 2025, issued by TVTC and the Human Resources Development Fund (Hadaf). Prices shown are the maximum reimbursement under the professional certification support program and are subject to updates — check the official guide and the Hadaf platform for details and registration. Provider links point to each organization's general official page, not necessarily a direct link to a specific exam — verify the exact certification on each provider's site. To improve the site, we log fully anonymous visits (page, device type, OS, and browser only) — no IP address, cookies, geolocation, or personal data."
  ],
  sources_text_courses: [
    "روابط الدورات هي صفحاتها الرسمية العامة لدى كل جهة — تأكد من تفاصيل الدورة المحددة (المدة، اللغة، الشهادة) عبر موقع الجهة نفسها. لتحسين الموقع، نسجّل زيارات مجهولة تمامًا (الصفحة، ونوع الجهاز ونظامه ومتصفحه فقط)، بلا IP أو ملفات تعريف ارتباط أو تحديد موقع جغرافي أو أي بيانات شخصية.",
    "Course links point to each organization's general official page — verify the specific course's details (duration, language, certificate) on the provider's own site. To improve the site, we log fully anonymous visits (page, device type, OS, and browser only) — no IP address, cookies, geolocation, or personal data."
  ],
  sources_text_catalog: [
    "المصدر: «دليل الشهادات المهنية الاحترافية المدعومة في قطاع الاتصالات وتقنية المعلومات» — النسخة الثانية 2025، الصادر عن المؤسسة العامة للتدريب التقني والمهني وصندوق تنمية الموارد البشرية (هدف). الأسعار الموضحة تمثل الحد الأعلى للتعويض ضمن منتج دعم الشهادات المهنية الاحترافية، وهي عرضة للتحديث — يرجى مراجعة الدليل الرسمي ومنصة «هدف» للتفاصيل والتسجيل. روابط الجهات المانحة هي صفحاتها الرسمية العامة (وليست بالضرورة رابطًا مباشرًا لاختبار بعينه) — تأكد من الشهادة المحددة عبر موقع كل جهة. لتحسين الموقع، نسجّل زيارات مجهولة تمامًا (الصفحة، ونوع الجهاز ونظامه ومتصفحه فقط)، بلا IP أو ملفات تعريف ارتباط أو تحديد موقع جغرافي أو أي بيانات شخصية.",
    "Source: \"Guide to Supported Professional Certifications in the Telecom & IT Sector,\" 2nd edition 2025, issued by TVTC and the Human Resources Development Fund (Hadaf). Prices shown are the maximum reimbursement under the professional certification support program and are subject to updates — check the official guide and the Hadaf platform for details and registration. Provider links are each organization's general official page (not necessarily a direct link to a specific exam) — verify the exact certification on each provider's site. To improve the site, we log fully anonymous visits (page, device type, OS, and browser only) — no IP address, cookies, geolocation, or personal data."
  ],
  sources_text_cv: [
    "هذا التحليل مبني على قواعد استرشادية وقراءة نصية آلية للملف تعمل بالكامل داخل متصفحك (لا يُرفع ملفك لأي خادم)، وليس نظام ذكاء اصطناعي مُدرَّب — وقد لا ينجح استخراج النص من بعض ملفات PDF ذات الخطوط المضمّنة المعقدة، خصوصًا في بعض السير المصممة بالعربية. لتحسين الموقع، نسجّل زيارات مجهولة تمامًا لهذه الصفحة (المسار، ونوع الجهاز ونظامه ومتصفحه فقط، بلا تحديد موقع جغرافي)، وهذا منفصل تمامًا عن ملف سيرتك الذاتية الذي لا يغادر متصفحك إطلاقًا.",
    "This analysis is based on heuristic rules and automated text extraction that runs entirely inside your browser (your file is never uploaded to a server) — not a trained AI model. Text extraction may fail for some PDFs with complex embedded fonts, especially some Arabic-designed résumés. To improve the site, we log fully anonymous visits to this page (path, device type, OS, and browser only, no geolocation) — completely separate from your CV file, which never leaves your browser."
  ],
  contact_heading: ["📬 تواصل معنا", "📬 Contact Us"],

  // ---- index.html ----
  hero_kicker: ["مرشدك المهني بالذكاء الاصطناعي", "Your AI-powered career guide"],
  hero_h1: ["من خريج <em>تائه</em>، إلى محترف <em>يملك خطة</em>.", "From a <em>lost</em> graduate, to a professional <em>with a plan</em>."],
  hero_lede: [
    "أجب عن بضعة أسئلة، ودَع MyPath يبني لك خارطة طريق واقعية نحو أول وظيفة تقنية —<br>شهادات ودورات معتمدة، أسعارها الحقيقية، وحدّ التعويض المتاح من صندوق «هدف»، وروابط تسجيل مباشرة لدى كل جهة.",
    "Answer a few questions, and let MyPath build you a real roadmap toward your first tech job —<br>certified certifications and courses, their real prices, the reimbursement cap from the Hadaf fund, and direct registration links for every provider."
  ],
  cta_explore: ["لست متأكدًا من مسـاري 🎯", "Not sure about my path 🎯"],
  cta_direct: ["أعرف مجالي، أعطني الخطة →", "I know my field, give me the plan →"],
  choice_heading: ["كيف تحب أن نبدأ؟", "How would you like to start?"],
  choice_sub: ["اختر الطريقة الأنسب لوضعك الحالي — كلا الطريقين ينتهيان بخارطة طريق كاملة.", "Pick whichever fits you best — both paths end with a full roadmap."],
  choice1_title: ["ساعدني أكتشف شغفي", "Help me discover my passion"],
  choice1_desc: ["لم تحدد تخصصك بعد؟ أجب عن 5 أسئلة سريعة عن اهتماماتك، وسنقترح عليك أقرب 3 مسارات تقنية لشخصيتك.", "Haven't picked a specialization yet? Answer 5 quick questions about your interests, and we'll suggest the 3 closest tech paths for you."],
  choice1_go: ["ابدأ الاختبار ←", "Start the quiz →"],
  choice2_title: ["أعرف مجالي بالضبط", "I know my field exactly"],
  choice2_desc: ["اخترت تخصصك مسبقًا؟ اختر المجال مباشرة، واحصل فورًا على خارطة طريق مرحلية بالشهادات والدورات المناسبة.", "Already chosen your specialization? Pick the field directly and get an instant staged roadmap of the right certifications and courses."],
  choice2_go: ["اختر المجال ←", "Choose a field →"],
  direct_eyebrow: ["اختر مجالك", "Choose your field"],
  direct_heading: ["عشرة مسارات تقنية", "Ten tech tracks"],
  direct_desc: ["كل مجال يحتوي على خارطة طريق من ثلاث مراحل: التأسيس، التخصص، ثم الاحتراف.", "Every field has a three-stage roadmap: Foundation, Specialization, then Mastery."],
  back_btn: ["→ رجوع", "← Back"],
  quiz_eyebrow: ["اختبار المسار", "Path quiz"],
  quiz_heading: ["خمسة أسئلة، وتعرف وجهتك", "Five questions, and you'll know your direction"],
  quiz_back: ["→ السؤال السابق", "← Previous question"],
  quiz_question_label: ["السؤال", "Question"],
  quiz_of_label: ["من", "of"],
  results_eyebrow: ["نتيجتك", "Your result"],
  results_heading: ["هذا ما يناسب شخصيتك تقنيًا", "This fits your personality"],
  results_desc: ["اختر أحد المسارات الثلاثة الذهبية لبدء خارطة الطريق.", "Pick one of your top three matches to start the roadmap."],
  results_match_rank: ["التوافق رقم", "Match #"],
  results_match_pct: ["نسبة التوافق:", "Match score:"],
  results_build: ["ابنِ خارطة الطريق ←", "Build the roadmap →"],
  cert_count_suffix: ["شهادة ←", "certifications →"],

  // ---- roadmap.html ----
  change_path: ["تغيير المسار ↺", "Change path ↺"],
  browse_courses: ["تصفح دورات مجانية", "Browse free courses"],
  prep_cv: ["جهّز سيرتك الذاتية لهذا المسار →", "Prep your CV for this path →"],
  notfound_eyebrow: ["لم يتم العثور على المجال", "Field not found"],
  notfound_heading: ["لم نجد هذا المسار", "We couldn't find this path"],
  notfound_desc: ["الرابط الذي فتحته لا يحتوي على مجال صحيح. عد إلى الصفحة الرئيسية لاختيار مجالك.", "The link you opened doesn't reference a valid field. Go back to the home page to choose your field."],
  notfound_btn: ["الذهاب للصفحة الرئيسية →", "Go to the home page →"],
  stage_desc_1: ["ابدأ بشهادة تأسيسية منخفضة التكلفة تمنحك اللغة والمفاهيم المشتركة في المجال.", "Start with a low-cost foundational certification that gives you the shared language and concepts of the field."],
  stage_desc_2: ["بعد إتقان الأساسيات، تخصص بشهادة من جهة مانحة معروفة تعزز فرصك الوظيفية.", "After mastering the basics, specialize with a certification from a well-known provider to boost your job prospects."],
  stage_desc_3: ["ارتقِ لمستوى الاحتراف بشهادة متقدمة تثبت خبرتك أمام أصحاب العمل.", "Level up to mastery with an advanced certification that proves your expertise to employers."],

  // ---- courses.html ----
  courses_eyebrow: ["دورات مجانية ورسمية", "Free, official courses"],
  courses_h1: ["دورات من كبرى الشركات التقنية", "Courses from major tech companies"],
  courses_p: [
    "مسارات تعلّم مجانية أو منخفضة التكلفة من IBM، Microsoft، Cisco، AWS، Google وغيرها — مفيدة لبناء مهاراتك بالتوازي مع الشهادات المعتمدة، مع روابط رسمية مباشرة للتسجيل.",
    "Free or low-cost learning paths from IBM, Microsoft, Cisco, AWS, Google, and others — useful for building your skills alongside certified certifications, with direct official registration links."
  ],
  free_badge: ["مجاني", "Free"],
  paid_badge: ["مدفوع جزئيًا", "Partly paid"],
  start_learning: ["ابدأ التعلم ↗", "Start learning ↗"],

  // ---- catalog.html ----
  catalog_eyebrow: ["المرجع الكامل", "The full reference"],
  catalog_h1: ["دليل الشهادات المهنية الاحترافية 2025", "2025 Professional Certification Guide"],
  catalog_p: [
    "كل الشهادات المدعومة من صندوق «هدف»، قابلة للبحث والتصفية، مع رابط رسمي لجهة كل شهادة.",
    "Every certification supported by the Hadaf fund, searchable and filterable, with an official link for each provider."
  ],
  search_placeholder: ["ابحث بالاسم أو الجهة المانحة...", "Search by name or provider..."],
  filter_all: ["كل المجالات", "All fields"],
  catalog_count_prefix: ["عدد النتائج:", "Results:"],
  catalog_count_of: ["من", "of"],
  no_results: ["لا توجد نتائج مطابقة.", "No matching results."],
  no_link: ["لا يتوفر رابط رسمي مباشر لهذه الجهة", "No direct official link available for this provider"],
  register_link: ["التسجيل لدى الجهة", "Register with provider"],
  recommended_badge: ["⭐ اختيارنا لهذه المرحلة", "⭐ Our pick for this stage"],
  price_suffix: ["(الحد الأعلى)", "(max cap)"],

  // ---- cv-coach.html ----
  cv_eyebrow: ["المدرب الذكي", "The smart coach"],
  cv_h1: ["هل سيرتك الذاتية جاهزة؟", "Is your CV ready?"],
  cv_p: [
    "ارفع ملف سيرتك الذاتية بصيغة <b>PDF</b> أو <b>Word (.docx)</b> واختر المجال المستهدف — سنحلّلها وفق معايير أساسية شائعة في أنظمة الفرز الآلي (ATS)، مع نصائح فورية قابلة للتنفيذ.",
    "Upload your CV as <b>PDF</b> or <b>Word (.docx)</b> and pick your target field — we'll analyze it against common ATS (Applicant Tracking System) criteria, with instant, actionable advice."
  ],
  terms_heading: ["📋 الشروط والأحكام وتنبيه الخصوصية", "📋 Terms & Privacy Notice"],
  terms_1: ["تعمل هذه الأداة بالكامل داخل متصفحك؛ ملفك لا يُرفع إلى أي خادم ولا يُحتفظ بأي نسخة منه.", "This tool runs entirely inside your browser; your file is never uploaded to a server and no copy of it is kept."],
  terms_2: ["النتائج مبنية على قواعد استرشادية آلية، وليست نصيحة مهنية معتمدة أو قرارًا نهائيًا من أي جهة توظيف.", "Results are based on automated heuristic rules — not certified career advice or a final decision from any employer."],
  terms_3: ["أنت المسؤول الوحيد عن صحة ودقة البيانات الواردة في ملفك، وعن أي قرار تتخذه بناءً على نتيجة التحليل.", "You are solely responsible for the accuracy of the data in your file, and for any decision you make based on the analysis result."],
  terms_4: ["هذا الموقع نموذج تجريبي لأغراض العرض والتعلّم، وليس منتجًا رسميًا أو معتمدًا من أي جهة حكومية.", "This site is a demo prototype for demonstration and learning purposes, not an official product certified by any government body."],
  terms_agree: ["أقر بأنني قرأت الشروط والأحكام وتنبيه الخصوصية أعلاه وأوافق عليها.", "I confirm that I have read and agree to the terms and privacy notice above."],
  target_field_label: ["المجال المستهدف", "Target field"],
  cv_file_label: ["ملف السيرة الذاتية", "CV file"],
  file_drop_locked: ["وافق على الشروط أعلاه أولًا لتفعيل الرفع", "Agree to the terms above first to enable uploading"],
  file_drop_default: ["اضغط أو اسحب ملفك هنا", "Click or drag your file here"],
  file_formats: ["الصيغ المدعومة: PDF · DOCX (Word) — الصيغة القديمة .doc غير مدعومة للتحليل التلقائي.", "Supported formats: PDF · DOCX (Word) — the older .doc format isn't supported for automatic analysis."],
  analyze_btn: ["حلّل سيرتي الذاتية 🔍", "Analyze my CV 🔍"],
  cv_empty: ["وافق على الشروط، ثم ارفع ملف PDF أو Word لتظهر نتيجة التحليل هنا.", "Agree to the terms, then upload a PDF or Word file for the analysis to appear here."],
  msg_terms_first: ["يرجى الموافقة على الشروط والأحكام أولًا.", "Please agree to the terms and conditions first."],
  msg_no_file: ["يرجى اختيار ملف PDF أو Word أولًا.", "Please choose a PDF or Word file first."],
  msg_reading: ["⏳ جارٍ قراءة الملف وتحليله...", "⏳ Reading and analyzing the file..."],
  msg_doc_unsupported: ["صيغة Word القديمة (.doc) غير قابلة للقراءة تلقائيًا في المتصفح. يرجى فتح الملف في Word وحفظه بصيغة <b>.docx</b> ثم إعادة الرفع، أو تصديره كـ PDF.", "The older Word format (.doc) can't be read automatically in the browser. Please open the file in Word, save it as <b>.docx</b>, and re-upload — or export it as a PDF."],
  msg_format_unsupported: ["صيغة غير مدعومة. يرجى رفع ملف بصيغة PDF أو DOCX فقط.", "Unsupported format. Please upload a PDF or DOCX file only."],
  msg_browser_unsupported: ["متصفحك الحالي لا يدعم فك ضغط الملفات المطلوب لقراءة PDF/Word. جرّب متصفحًا حديثًا مثل Chrome أو Edge.", "Your current browser doesn't support the decompression needed to read PDF/Word files. Try a modern browser like Chrome or Edge."],
  msg_pdf_extract_failed: ["تعذّر استخراج نص كافٍ من ملف PDF هذا تلقائيًا — غالبًا بسبب خطوط مضمّنة معقّدة (شائع في بعض السير المصممة بالعربية). جرّب رفع نسخة <b>Word (.docx)</b> للحصول على تحليل دقيق.", "Couldn't automatically extract enough text from this PDF — usually due to complex embedded fonts (common in some Arabic-designed CVs). Try uploading a <b>Word (.docx)</b> version for an accurate analysis."],
  msg_empty_file: ["الملف يبدو فارغًا أو غير قابل للقراءة. جرّب ملفًا آخر.", "The file looks empty or unreadable. Try a different file."],
  msg_generic_error: ["حدث خطأ أثناء قراءة الملف. تأكد أنه غير محمي بكلمة مرور وأعد المحاولة.", "An error occurred while reading the file. Make sure it isn't password-protected and try again."],

  // ---- CV report (analysis output template copy — fixed phrasing, not per-user free text) ----
  status_great: ["جيدة جدًا", "Great"],
  status_needs_work: ["تحتاج تحسينًا", "Needs work"],
  status_poor: ["تحتاج عملًا إضافيًا", "Needs more work"],
  ats_good_title: ["متوافقة مع أنظمة الفرز الآلي (ATS)", "Compatible with ATS systems"],
  ats_good_desc: ["سيرتك تحتوي على العناصر الأساسية التي تبحث عنها أنظمة الفرز الآلي لدى الشركات.", "Your CV has the core elements that companies' automated screening systems look for."],
  ats_warn_title: ["متوافقة جزئيًا مع أنظمة ATS", "Partially compatible with ATS"],
  ats_warn_desc: ["سيرتك بها أساسيات جيدة، لكن ينقصها بعض العناصر المهمة — راجع الملاحظات أدناه لرفع فرص قبولها آليًا.", "Your CV has good fundamentals but is missing some important elements — check the notes below to improve its automated-screening odds."],
  ats_bad_title: ["غير متوافقة حاليًا مع أنظمة ATS", "Not currently compatible with ATS"],
  ats_bad_desc: ["سيرتك تفتقر لعدة عناصر أساسية قد تمنع أنظمة الفرز الآلي من قراءتها وتصنيفها بشكل صحيح.", "Your CV is missing several core elements that may prevent automated screening systems from reading and ranking it correctly."],
  score_out_of: ["من 100 وفق 6 معايير أساسية شائعة في أنظمة الفرز الآلي (ATS)", "out of 100, based on 6 core criteria common in ATS systems"],
  ci_contact_title: ["بيانات التواصل", "Contact info"],
  ci_contact_pass: ["وجدنا بريدًا إلكترونيًا ورقم تواصل بوضوح.", "We clearly found an email and a phone number."],
  ci_contact_warn: ["وجدنا وسيلة تواصل واحدة فقط — أضف البريد ورقم الجوال معًا.", "We only found one contact method — add both an email and phone number."],
  ci_contact_fail: ["لم نعثر على بريد إلكتروني أو رقم جوال — أضفهما في أعلى السيرة.", "We couldn't find an email or phone number — add both near the top of your CV."],
  ci_sections_title: ["أقسام واضحة", "Clear sections"],
  ci_sections_pass: ["السيرة منظمة بأقسام واضحة (خبرة، تعليم، مهارات...).", "Your CV is organized into clear sections (experience, education, skills...)."],
  ci_sections_warn: ["أقسام قليلة فقط — أضف عناوين صريحة مثل «الخبرات» و«المهارات».", "Only a few sections found — add explicit headings like \"Experience\" and \"Skills.\""],
  ci_sections_fail: ["لا توجد عناوين أقسام واضحة — قسّم سيرتك إلى ملخص/خبرات/تعليم/مهارات.", "No clear section headings found — split your CV into Summary/Experience/Education/Skills."],
  ci_verbs_title: ["أفعال إنجاز قوية", "Strong action verbs"],
  ci_verbs_pass: ["تستخدم أفعالًا قوية مثل «طوّرت» و«قدت» تصف إنجازاتك بفعالية.", "You use strong verbs like \"developed\" and \"led\" that effectively describe your achievements."],
  ci_verbs_warn: ["استخدم أفعال إنجاز إضافية (طوّرت، حسّنت، قدت) بدل الجمل العامة.", "Use more achievement verbs (developed, improved, led) instead of generic phrases."],
  ci_verbs_fail: ["ابدأ كل نقطة بفعل إنجاز قوي بدل عبارات مثل «مسؤول عن...».", "Start every bullet point with a strong action verb instead of phrases like \"responsible for...\""],
  ci_numbers_title: ["إنجازات مقيّسة بالأرقام", "Quantified achievements"],
  ci_numbers_pass: ["تُظهر سيرتك أرقامًا ونتائج ملموسة (نسب، أعداد).", "Your CV shows concrete numbers and results (percentages, counts)."],
  ci_numbers_warn: ["أضف مزيدًا من الأرقام (%، عدد المستخدمين، المدة) لتقوية مصداقيتك.", "Add more numbers (%, user counts, duration) to strengthen your credibility."],
  ci_numbers_fail: ["لا توجد أرقام أو نسب — حوّل «حسّنت الأداء» إلى «حسّنت الأداء 30%».", "No numbers or percentages found — turn \"improved performance\" into \"improved performance by 30%.\""],
  ci_keywords_title: ["مطابقة كلمات المجال", "Field keyword match"],
  ci_keywords_pass: ["سيرتك تحتوي على كلمات مفتاحية مهمة لهذا المجال.", "Your CV contains important keywords for this field."],
  ci_keywords_warn: ["أضف مصطلحات أكثر ارتباطًا بهذا المجال، مثل:", "Add more terms related to this field, such as:"],
  ci_keywords_fail: ["لا توجد كلمات مفتاحية مرتبطة بهذا المجال — أضف مهاراتك وأدواتك صراحة، مثل:", "No keywords related to this field found — explicitly list your skills and tools, such as:"],
  ci_length_title: ["طول مناسب", "Appropriate length"],
  ci_length_pass: ["طول السيرة ضمن المدى المناسب.", "Your CV's length is within the ideal range."],
  ci_length_warn: ["السيرة قصيرة نسبيًا — فصّل خبراتك وإنجازاتك أكثر.", "Your CV is relatively short — go into more detail about your experience and achievements."],
  ci_length_fail: ["السيرة قصيرة جدًا أو طويلة جدًا — استهدف 300-800 كلمة تقريبًا.", "Your CV is too short or too long — aim for roughly 300-800 words."],
  next_step_title: ["الخطوة التالية", "Next step"],
  next_step_text_1: ["أضف على سيرتك أنك بصدد الحصول على «", "Add to your CV that you're pursuing \""],
  next_step_text_2: ["» (", "\" ("],
  next_step_text_3: [") — خطوة تأسيسية معترف بها في مجال", ") — a recognized foundational step in"],
  next_step_text_4: ["تُظهر جديتك لأصحاب العمل.", "that shows employers you're serious."],
  next_step_link: ["شاهد خارطة الطريق الكاملة ←", "See the full roadmap →"],

  // ---- admin.html ----
  admin_tagline: ["لوحة التحكم", "Admin dashboard"],
  logout_btn: ["تسجيل الخروج", "Log out"],
  admin_login_eyebrow: ["دخول المسؤول", "Admin login"],
  admin_login_heading: ["لوحة تحكم MyPath", "MyPath admin dashboard"],
  admin_login_desc: ["هذه الصفحة خاصة بمالكة الموقع فقط. سجّلي الدخول بحساب المسؤول لعرض إحصائيات الزيارات.", "This page is for the site owner only. Log in with the admin account to view visit statistics."],
  admin_email_label: ["البريد الإلكتروني", "Email"],
  admin_password_label: ["كلمة المرور", "Password"],
  admin_login_btn: ["دخول", "Log in"],
  admin_login_note: ["لا يوجد تسجيل حساب جديد من هنا عمدًا — يُنشأ حساب المسؤول يدويًا من لوحة Supabase (Authentication → Users) لضمان أن الوصول للإحصائيات محصور بك وحدك.", "There's deliberately no sign-up here — the admin account is created manually from the Supabase dashboard (Authentication → Users) to make sure only you can access the stats."],
  admin_fill_fields: ["أدخلي البريد وكلمة المرور.", "Enter your email and password."],
  admin_bad_login: ["بيانات الدخول غير صحيحة، أو الحساب غير موجود.", "Incorrect login details, or the account doesn't exist."],
  admin_not_configured: ["لم يتم إعداد Supabase بعد. أضيفي بيانات المشروع في assets/supabase-config.js ونفّذي supabase/schema.sql أولًا.", "Supabase hasn't been configured yet. Add the project details in assets/supabase-config.js and run supabase/schema.sql first."],
  admin_stats_eyebrow: ["إحصائيات الزيارات", "Visit statistics"],
  admin_welcome: ["مرحبًا بك في لوحة التحكم", "Welcome to the dashboard"],
  admin_scope_note: ["مبنية على آخر 5000 زيارة مسجّلة (بيانات مجهولة تمامًا: لا IP ولا معلومات شخصية).", "Based on the last 5000 recorded visits (fully anonymous data: no IP, no personal information)."],
  admin_total_visits: ["إجمالي الزيارات المسجّلة (كل الوقت)", "Total recorded visits (all time)"],
  admin_unique_sessions: ["جلسات فريدة تقريبية", "Approx. unique sessions"],
  admin_unique_pages: ["صفحات مختلفة تمت زيارتها", "Different pages visited"],
  admin_last14: ["الزيارات آخر 14 يومًا", "Visits over the last 14 days"],
  admin_device_dist: ["توزيع الأجهزة", "Device breakdown"],
  admin_top_pages: ["الصفحات الأكثر زيارة", "Most visited pages"],
  admin_all_visits: ["جميع الزيارات", "All visits"],
  admin_showing: ["عرض", "Showing"],
  admin_of_total: ["من أصل", "of"],
  admin_no_data: ["لا توجد بيانات بعد.", "No data yet."],
  admin_no_visits: ["لا توجد زيارات مسجّلة بعد.", "No visits recorded yet."],
  admin_col_time: ["الوقت", "Time"],
  admin_col_page: ["الصفحة", "Page"],
  admin_col_device: ["الجهاز", "Device"],
  admin_col_os_browser: ["النظام والمتصفح", "OS & browser"],
  admin_col_source: ["المصدر", "Source"],
  admin_direct: ["مباشر", "Direct"],
  admin_device_desktop: ["كمبيوتر", "Desktop"],
  admin_device_mobile: ["جوال", "Mobile"],
  admin_device_tablet: ["تابلت", "Tablet"],
  admin_footer_note: ["هذه الصفحة غير مربوطة بقائمة التصفح العامة، لكن الحماية الفعلية ليست إخفاء الرابط — بل أن قراءة البيانات محمية بتسجيل دخول حقيقي (Supabase Auth) وقواعد أمان على مستوى قاعدة البيانات (Row Level Security)، بحيث لا يمكن لأي زائر آخر رؤية الإحصائيات حتى لو عرف هذا الرابط.", "This page isn't linked from the public nav, but the real protection isn't hiding the URL — it's that reading the data requires a real login (Supabase Auth) and database-level security rules (Row Level Security), so no other visitor can see the stats even if they know this link."]
};

function getLang(){ return localStorage.getItem("mp_lang") || "ar"; }
function setLang(lang){ localStorage.setItem("mp_lang", lang); applyLang(lang); }
/** t(key) returns the string for the current language; falls back to Arabic if missing. */
function t(key){
  const pair = I18N[key];
  if(!pair) return "";
  const idx = getLang() === "en" ? 1 : 0;
  return pair[idx] !== undefined ? pair[idx] : pair[0];
}
/** Given a data.js [ar,en] pair (cert names, quiz text, stage names...), pick the active language. */
function L(pair){
  if(!pair) return "";
  if(!Array.isArray(pair)) return pair;
  const idx = getLang() === "en" ? 1 : 0;
  return pair[idx] !== undefined ? pair[idx] : pair[0];
}

function applyLang(lang){
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  if(document.body){
    document.body.lang = lang;
    document.body.dir = lang === "ar" ? "rtl" : "ltr";
  }
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    if(I18N[key]) el.textContent = t(key);
  });
  document.querySelectorAll("[data-i18n-html]").forEach(el=>{
    const key = el.getAttribute("data-i18n-html");
    if(I18N[key]) el.innerHTML = t(key);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el=>{
    const key = el.getAttribute("data-i18n-placeholder");
    if(I18N[key]) el.placeholder = t(key);
  });
  document.querySelectorAll(".lang-toggle [data-lang]").forEach(b=>{
    b.classList.toggle("active", b.getAttribute("data-lang") === lang);
  });
  document.dispatchEvent(new CustomEvent("mp:langchange", { detail:{ lang } }));
}

document.addEventListener("DOMContentLoaded", ()=>{
  applyLang(getLang());
  document.querySelectorAll(".lang-toggle [data-lang]").forEach(btn=>{
    btn.addEventListener("click", ()=> setLang(btn.getAttribute("data-lang")));
  });
});
