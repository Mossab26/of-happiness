# موقع نادي كيمياء السعادة — جامعة فرحات عباس سطيف 1
## The Chemistry of Happiness Club Website & GitHub Educational Project

مرحبًا بكم في المشروع البرمجي والتعليمي لنادي **كيمياء السعادة**، وهو نادٍ علمي وثقافي معتمد في رحاب **جامعة فرحات عباس سطيف 1 بالجزائر**، تأسس بتاريخ **21 أبريل 2024** تحت إشراف **الأستاذ ابن عيسى عاطف**.

هذا الموقع ليس مجرد صفحة ويب تعريفية، بل هو **مشروع تدريبي تطبيقي** صُمم خصيصاً لتمكين **سبع فرق طلابية** من التعلم والتعاون على بناء برمجية ويب حقيقية واحدة عبر منصة **GitHub**، باستخدام ممارسات إدارة الكود الاحترافية (Git Branches, Commits, Pull Requests, Merge Conflict Resolution, GitHub Pages).

---

## 🌟 الأهداف التعليمية للمشروع (Learning Objectives)

1. **التعاون البرمجي المتوازي (Parallel Collaboration):** تدريب 7 فرق عمل طلابية على المساهمة في مستودع برمجي واحد دون تعطيل عمل الفرق الأخرى.
2. **إتقان أدوات المطور (Developer Tooling):** استخدام محرر Visual Studio Code، أداة Live Server، وأوامر Git الأساسية.
3. **فهم دورة حياة الكود في GitHub:** فهم الفرق بين الفرع (Branch)، الالتزام (Commit)، طلب السحب (Pull Request)، والدمج (Merge).
4. **هندسة الويب النقية (Vanilla Web Architecture):** بناء واجهة ويب سريعة، متجاوبة، ومتاحة للجميع باستخدام HTML5 و CSS3 و Vanilla JavaScript النقية دون الحاجة لأي أدوات تثبيت أو خوادم خلفية.
5. **النشر السحابي المجاني (Deployment):** نشر الموقع عبر خدمة **GitHub Pages** ليكون متاحاً للجمهور والطلبة.

---

## 🛠️ المتطلبات القبلية (Prerequisites)

للمشاركة في تطوير هذا الموقع على حاسوبك الشخصي، ستحتاج فقط إلى الأدوات البسيطة التالية:
- **محرر الأكواد:** [Visual Studio Code](https://code.visualstudio.com/) (أو أي محرر نصوص تفضله).
- **إضافة Live Server في VS Code:** لتشغيل ومعاينة الموقع محلياً بنقرة زر واحدة.
- **برنامج Git:** [تثبيت Git](https://git-scm.com/) لإدارة الفروع ورفع الأكواد.
- **حساب مجاني على GitHub:** لإنشاء ومراجعة طلبات السحب (Pull Requests).

> 💡 **ملاحظة هامة:** لا يتطلب المشروع تثبيت Node.js أو تشغيل `npm install` أو أي أدوات بناء إضافية. يعمل المشروع مباشرة وبشكل فوري بمجرد فتحه في المتصفح!

---

## 📂 الهيكل المعماري للمشروع (Project Directory Tree)

تم تنظيم المشروع بدقة وفق **معمارية الفرق السبعة (Seven-Team Architecture)** لضمان عدم حدوث أي تضارب بين الطلاب أثناء العمل:

```text
chemistry-of-happiness/
│
├── index.html                   # وثيقة HTML الرئيسية (ملكية الفريق 7)
├── README.md                    # هذا الدليل الشامل والمفصل للمشروع
├── CONTRIBUTING.md              # قواعد المساهمة وسياسات الفروع وطلبات السحب
├── .gitignore                   # الملفات المستثناة من التتبع في Git
│
├── assets/                      # مجلد الأصول الثابتة
│   ├── logo/
│   │   ├── club-logo.png        # الشعار الرسمي المعتمد للنادي
│   │   └── README.md            # دليل استخدام وتحديث الشعار
│   └── images/
│       └── README.md            # إرشادات إضافة صور الأنشطة والفعاليات
│
├── css/                         # ملفات التنسيق الموزعة حسب الفرق
│   ├── team-1-theme.css         # ملكية الفريق 1: المتغيرات، الألوان، الخطوط، والأزرار المشتركة
│   ├── team-2-about.css         # ملكية الفريق 2: تنسيقات قسم من نحن والأهداف الخمسة
│   ├── team-3-activities.css    # ملكية الفريق 3: تنسيقات بطاقات الأنشطة والتصنيفات
│   ├── team-4-team.css          # ملكية الفريق 4: تنسيقات بطاقات الإشراف والفرق البرمجية
│   ├── team-5-gallery.css       # ملكية الفريق 5: تنسيقات معرض الصور والبطاقات البديلة
│   ├── team-6-contact.css       # ملكية الفريق 6: تنسيقات قسم الانضمام وإرشادات الطلبة
│   └── team-7-home.css          # ملكية الفريق 7: تنسيقات شريط التنقل، القائمة، والهيرو، والتذييل
│
├── js/                          # سكربتات التهيئة المستقلة لكل فريق
│   ├── team-2-about.js          # دالة initAboutSection() لبناء قسم من نحن
│   ├── team-3-activities.js     # دالة initActivitiesSection() مع نظام تصفية الأنشطة
│   ├── team-4-team.js           # دالة initTeamSection() لتقديم الإشراف والمطورين
│   ├── team-5-gallery.js        # دالة initGallerySection() مع معالجة الصور المفقودة بأمان
│   ├── team-6-contact.js        # دالة initContactSection() لإرشادات وقنوات التواصل
│   └── team-7-home.js           # دالة initHomePage() وقائمة الجوال وتنسيق تكامل الفرق
│
├── data/                        # ملفات البيانات المستقلة (لتعديل المحتوى دون لمس الكود)
│   ├── club-info.js             # معلومات وهوية النادي الرسمية ورسالة الأستاذ المشرف
│   ├── activities.js            # قائمة الأنشطة المعتمدة وتصنيفاتها
│   ├── team-members.js          # بيانات الإشراف الرسمي والفرق الطلابية السبعة
│   ├── gallery.js               # مسارات وبيانات صور الفعاليات والشعار
│   └── contact.js               # إرشادات الانضمام وقنوات التواصل المعتمدة
│
└── teams/                       # مجلدات التوثيق الخاصة بكل فريق
    ├── team-1/README.md         # دليل وإرشادات الفريق 1 (الخطوط والألوان)
    ├── team-2/README.md         # دليل وإرشادات الفريق 2 (التعريف بالنادي)
    ├── team-3/README.md         # دليل وإرشادات الفريق 3 (الأنشطة والمبادرات)
    ├── team-4/README.md         # دليل وإرشادات الفريق 4 (فريق العمل)
    ├── team-5/README.md         # دليل وإرشادات الفريق 5 (معرض الصور)
    ├── team-6/README.md         # دليل وإرشادات الفريق 6 (الانضمام والتواصل)
    └── team-7/README.md         # دليل وإرشادات الفريق 7 (الصفحة الرئيسية والتكامل)
```

---

## 👥 مسؤوليات الفرق السبعة وملكية الملفات (Teams Mapping)

| رقم الفريق | اسم الفريق باللغة العربية | الملفات التي يمتلكها حصراً | الفرع المخصص (Git Branch) |
| :---: | :--- | :--- | :--- |
| **1** | **الخطوط والألوان والهوية** | `css/team-1-theme.css`<br>`teams/team-1/README.md` | `feature/team-1-theme` |
| **2** | **التعريف بالنادي (من نحن)** | `css/team-2-about.css`<br>`js/team-2-about.js`<br>`data/club-info.js`<br>`teams/team-2/README.md` | `feature/team-2-about` |
| **3** | **الأنشطة والمبادرات** | `css/team-3-activities.css`<br>`js/team-3-activities.js`<br>`data/activities.js`<br>`teams/team-3/README.md` | `feature/team-3-activities` |
| **4** | **فريق العمل والإشراف** | `css/team-4-team.css`<br>`js/team-4-team.js`<br>`data/team-members.js`<br>`teams/team-4/README.md` | `feature/team-4-team` |
| **5** | **معرض الصور والأصول** | `css/team-5-gallery.css`<br>`js/team-5-gallery.js`<br>`data/gallery.js`<br>`assets/images/`<br>`teams/team-5/README.md` | `feature/team-5-gallery` |
| **6** | **الانضمام والتواصل** | `css/team-6-contact.css`<br>`js/team-6-contact.js`<br>`data/contact.js`<br>`teams/team-6/README.md` | `feature/team-6-contact` |
| **7** | **الصفحة الرئيسية والتكامل** | `index.html`<br>`css/team-7-home.css`<br>`js/team-7-home.js`<br>`teams/team-7/README.md` | `feature/team-7-home` |

---

## 🚀 كيفية تشغيل الموقع ومعاينته محلياً (How to Run Locally)

### الطريقة الأولى: باستخدام إضافة Live Server في VS Code (الموصى بها للطلبة)
1. افتح برنامج **Visual Studio Code**.
2. ثبّت إضافة **Live Server** من متجر الإضافات (من تطوير Ritwick Dey).
3. افتح مجلد المشروع كاملاً في VS Code: `File -> Open Folder`.
4. انقر بزر الفأرة الأيمن على ملف `index.html` في الشريط الجانبي.
5. اختر **Open with Live Server** (أو انقر على زر `Go Live` في أسفل شاشة VS Code).
6. سيفتح المتصفح الموقع تلقائياً على الرابط المحلي: `http://127.0.0.1:5500/index.html`.

### الطريقة الثانية: فتح الملف مباشرة في المتصفح
- يمكنك النقر مرتين على ملف `index.html` لفتحه في Google Chrome أو Microsoft Edge أو Firefox وسيعمل الموقع بالكامل بدون أي خادم!

---

## 🐙 دليل العمل الجماعي خطوة بخطوة عبر GitHub (Workflow)

### 1. استنساخ المستودع (Clone Repository)
يقوم عضو الفريق بفتح الطرفية (Terminal) وكتابة:
```bash
git clone https://github.com/your-username/chemistry-of-happiness.git
cd chemistry-of-happiness
```

### 2. الانتقال إلى الفرع المخصص لفريقك (Switch or Create Branch)
لإنشاء فرع الفريق الخاص بك والانتقال إليه:
```bash
# مثال للفريق 3:
git checkout -b feature/team-3-activities
```

### 3. إجراء التعديلات على الملفات المملوكة لفريقك فقط
- افتح الملفات الخاصة بفريقك (مثلاً: `data/activities.js` أو `css/team-3-activities.css`).
- قم بالتعديلات المطلوبة، وتأكد من حفظ الملفات.
- عاين النتيجة مباشرة عبر Live Server.

### 4. فحص حالة التغييرات (Git Status & Diff)
قبل عمل الالتزام، تأكد أنك لم تعدل بالخطأ أي ملف لفريق آخر:
```bash
git status
git diff
```

### 5. إضافة التعديلات وتسجيل الالتزام (Stage & Commit)
```bash
git add data/activities.js css/team-3-activities.css
git commit -m "feat(team-3): add semester activities and filter tags"
```

### 6. رفع الفرع إلى مستودع GitHub (Push to GitHub)
```bash
git push -u origin feature/team-3-activities
```

### 7. فتح طلب سحب (Open Pull Request)
1. افتح صفحة المستودع على **GitHub.com**.
2. ستظهر لك لافتة خضراء بعنوان: `Compare & pull request`.
3. اضغط على الزر، وتأكد أن:
   - الفرع الأساسي (Base branch): `main`
   - الفرع المقارن (Compare branch): `feature/team-3-activities`
4. اكتب وصفاً واضحاً للتعديلات المنجزة وما قمت باختباره.
5. اضغط على **Create Pull Request**.

### 8. المراجعة والموافقة (Review & Approval)
- يقوم مؤطر المشروع أو الفريق 7 بمراجعة التعديلات عبر تبويب `Files changed`.
- عند اعتماد التغييرات، يتم الضغط على **Merge pull request** ثم **Confirm merge**.

### 9. مزامنة الفرع الرئيسي محلياً لدى جميع الفرق (Sync Local Main)
بعد دمج أي ميزة في `main`، يجب على جميع أعضاء الفرق تحديث نسخهم المحلية:
```bash
git checkout main
git pull origin main
```
ثم تحديث فرع العمل الخاص بهم:
```bash
git checkout feature/team-X
git merge main
```

---

## ⚔️ كيفية حل نزاعات الدمج الشائعة (Resolving Merge Conflicts)

إذا أشار GitHub إلى وجود نزاع (`This branch has conflicts that must be resolved`):
1. انتقل محلياً إلى فرع ميزتك:
   ```bash
   git checkout feature/team-X
   git merge main
   ```
2. سيقوم VS Code بتلوين الأسطر المتنازعة باللون الأخضر والأزرق ويمنحك أزراراً سريعة:
   - `Accept Current Change`: الإبقاء على كود فريقك.
   - `Accept Incoming Change`: قبول التعديل الوارد من `main`.
   - `Accept Both Changes`: الاحتفاظ بالتعديلين معاً.
3. بعد اختيار الحل الصحيح، احفظ الملف ونفذ:
   ```bash
   git add <اسم الملف المتنازع عليه>
   git commit -m "fix: resolve conflict between team branch and main"
   git push origin feature/team-X
   ```

---

## 🌐 نشر الموقع مجاناً عبر GitHub Pages (Deployment)

لنشر الموقع على الإنترنت ليكون متاحاً للجمهور والطلبة:
1. اذهب إلى صفحة المستودع على **GitHub**.
2. اضغط على علامة التبويب **Settings** (الإعدادات).
3. في القائمة الجانبية اليسرى، انقر على **Pages**.
4. تحت قسم **Build and deployment**:
   - المصدر (Source): اختر **Deploy from a branch**.
   - الفرع (Branch): اختر `main` مع تحديد المجلد `/ (root)`.
5. اضغط على **Save**.
6. بعد حوالي دقيقة إلى دقيقتين، سيظهر لك الرابط الرسمي للموقع مثل:
   `https://<username>.github.io/chemistry-of-happiness/`

> 🚀 **ميزة التوافق:** تم ضبط كافة روابط الأصول ومسارات الصور وملفات التنسيق والبيانات بمسارات نسبية تبدأ بـ `./` لتعمل بكفاءة 100% سواء على النطاق الجذري أو على المسار الفرعي لمستودعات GitHub Pages دون أي مشاكل.

---

## 🔍 استكشاف الأخطاء الشائعة وإصلاحها (Troubleshooting)

| المشكلة | السبب المحتمل | الحل السريع |
| :--- | :--- | :--- |
| **ظهور علامة صورة مكسورة** | مسار الصورة غير صحيح أو الصورة غير موجودة في المجلد | راجع `data/gallery.js` وتأكد أن الصورة موجودة في `assets/images/`؛ يقوم السكربت تلقائياً بتحويل الصور المفقودة إلى بطاقة بديلة أنيقة. |
| **عدم استجابة أزرار التصفية في الأنشطة** | خطأ في كتابة كود JavaScript أو استدعاء خاطئ | افتح المتصفح واضغط على `F12` ثم انقر على `Console` لمعرفة السطر المسبب للخطأ؛ تأكد أن `data/activities.js` محمل قبل `js/team-3-activities.js`. |
| **ظهور خط نظام عادي بدلاً من الخط الأنيق عند انقطاع الإنترنت** | الخط الخارجي من Google Fonts يحتاج إنترنت | تم تضمين بدائل خطوط نظامية عربية عالية الجودة (`Segoe UI`, `Tahoma`, `Arial`) في `css/team-1-theme.css` تعمل تلقائياً دون إنترنت. |
| **قائمة الجوال لا تفتح عند النقر** | حدث تداخل في ملف `js/team-7-home.js` | تأكد من عدم حذف المعرف `id="mobile-menu-btn"` أو `id="mobile-nav-drawer"` في ملف `index.html`. |

---

## ✅ قائمة التحقق قبل اعتماد أي طلب سحب (Contribution Checklist)

- [ ] تم العمل داخل فرع مستقل `feature/team-X-...` وليس على `main` مباشرة.
- [ ] لم يتم تعديل أي ملف خارج الملفات المخصصة لفريقك المحددة في الجدول أعلاه.
- [ ] تم اختبار الموقع بنجاح محلياً عبر Live Server بدون أخطاء في الكونسول (Console).
- [ ] لا توجد معلومات أو أرقام هواتف أو صور شخصية وهمية غير معتمدة رسمياً.
- [ ] الالتزامات مكتوبة بصيغة واضحة ومهنية (مثل `feat(team-X): ...`).
- [ ] تم فتح الـ Pull Request مع كتابة وصف كافٍ لما تم إنجازه.

---

## ℹ️ معلومات النادي الرسمية المعتمدة (Verified Information)

- **الاسم بالعربية:** نادي كيمياء السعادة
- **الاسم بالإنجليزية:** The Chemistry of Happiness Club
- **المؤسسة الجامعية:** جامعة فرحات عباس سطيف 1 - الجزائر
- **تاريخ التأسيس:** 21 أبريل 2024
- **المشرف العام:** الأستاذ ابن عيسى عاطف
- **طبيعة النادي:** نادي علمي وثقافي جامعي
- **شعار النادي:** "معًا نحو تجربة جامعية أكثر علمًا وإبداعًا"
