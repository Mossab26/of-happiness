# دليل المساهمة والعمل الجماعي عبر GitHub
# Contributing Guidelines — The Chemistry of Happiness Club

مرحبًا بكم في المستودع البرمجي الرسمي لمشروع موقع **نادي كيمياء السعادة (جامعة فرحات عباس سطيف 1)**.
هذا المشروع مصمم ليكون منصة تعليمية وتطبيقية لتدريب طلبة النادي على العمل الجماعي الاحترافي على المشاريع البرمجية باستخدام منصة **GitHub**، ونظام الفروع (Git Branches)، وطلبات السحب (Pull Requests)، وحل النزاعات البرمجية (Merge Conflicts).

---

## 1. المبادئ الذهبية للعمل الجماعي (Core Principles)

1. **الاحترام الصارم لملكية الملفات (File Ownership):**
   - لكل فريق من الفرق السبعة مجلد وملفات خاصة به.
   - **يمنع منعاً باتاً** تعديل ملفات يمتلكها فريق آخر إلا بعد التنسيق المسبق وفتح نقاش رسمي.
2. **عدم الدفع المباشر إلى الفرع الرئيسي (Never Push Directly to `main`):**
   - الفرع `main` مخصص فقط للنسخة المستقرة المعتمدة المنشورة.
   - كافة أعمال التطوير تتم عبر فروع الميزات (`feature branches`) ثم تدمج عن طريق طلب سحب (Pull Request).
3. **البساطة والاعتمادية بدون أدوات بناء معقدة:**
   - المشروع مبني باستخدام HTML5، CSS3، و Vanilla JavaScript نقية.
   - لا نستخدم مكتبات خارجية تتطلب npm أو خوادم خلفية؛ الموقع يعمل مباشرة عبر Live Server في VS Code.

---

## 2. مصفوفة ملكية الملفات (File Ownership Matrix)

| الفريق | المسمى والمسؤولية | الملفات المسموح بتعديلها حصراً | الفرع المخصص |
| :--- | :--- | :--- | :--- |
| **الفريق 1** | الخطوط والألوان والهوية البصرية | `css/team-1-theme.css`<br>`teams/team-1/README.md` | `feature/team-1-theme` |
| **الفريق 2** | قسم من نحن ومعلومات النادي | `css/team-2-about.css`<br>`js/team-2-about.js`<br>`data/club-info.js`<br>`teams/team-2/README.md` | `feature/team-2-about` |
| **الفريق 3** | قسم وبطاقات الأنشطة | `css/team-3-activities.css`<br>`js/team-3-activities.js`<br>`data/activities.js`<br>`teams/team-3/README.md` | `feature/team-3-activities` |
| **الفريق 4** | قسم فريق العمل والمساهمين | `css/team-4-team.css`<br>`js/team-4-team.js`<br>`data/team-members.js`<br>`teams/team-4/README.md` | `feature/team-4-team` |
| **الفريق 5** | معرض الصور والأصول | `css/team-5-gallery.css`<br>`js/team-5-gallery.js`<br>`data/gallery.js`<br>`assets/images/*`<br>`teams/team-5/README.md` | `feature/team-5-gallery` |
| **الفريق 6** | قسم الانضمام والتواصل | `css/team-6-contact.css`<br>`js/team-6-contact.js`<br>`data/contact.js`<br>`teams/team-6/README.md` | `feature/team-6-contact` |
| **الفريق 7** | الصفحة الرئيسية والتكامل العام | `index.html`<br>`css/team-7-home.css`<br>`js/team-7-home.js`<br>`teams/team-7/README.md` | `feature/team-7-home` |

> ⚠️ **ملاحظة:** ملفات التوثيق المشتركة مثل `README.md` و `CONTRIBUTING.md` يتم تعديلها بموافقة مشتركة من مشرف المشروع وممثلي الفرق.

---

## 3. تسمية الفروع البرمجية (Branch Naming Convention)

يجب تسمية الفروع بدقة وفق الصيغة التالية:

```bash
feature/team-<رقم الفريق>-<اسم الميزة>
```

### الفروع الأساسية للفرق السبعة:
- `feature/team-1-theme`
- `feature/team-2-about`
- `feature/team-3-activities`
- `feature/team-4-team`
- `feature/team-5-gallery`
- `feature/team-6-contact`
- `feature/team-7-home`

---

## 4. رسائل الالتزام القياسية (Commit Message Standards)

نتبع أسلوب **Conventional Commits** لجعل سجل التغييرات مقروءاً واحترافياً:

### الصيغة:
```text
<type>(team-<number>): <وصف موجز وواضح بالإنجليزية أو العربية>
```

### الأنواع الشائعة (Commit Types):
- `feat`: لإضافة ميزة أو عنصر جديد في القسم.
- `style`: لتعديل التنسيقات والألوان والخطوط.
- `fix`: لإصلاح خطأ برمجي أو تصحيح مسار.
- `docs`: لتعديل أو كتابة ملفات التوثيق والإرشادات.
- `refactor`: لتحسين الكود وإعادة ترتيبه دون تغيير في المظهر.

### أمثلة عملية صحيحة:
```bash
git commit -m "feat(team-3): render activities cards and category filters"
git commit -m "style(team-1): define primary color variables and font fallbacks"
git commit -m "docs(team-2): add verified club history and supervisor info"
git commit -m "fix(team-5): handle missing gallery images with safe placeholder"
```

---

## 5. دورة حياة طلب السحب (Pull Request Lifecycle)

1. **التحقق المحلي أولاً:**
   - شغّل الموقع على حاسوبك باستخدام Live Server.
   - افتح لوحة المطورين (F12 ثم Console) وتأكد من عدم وجود أي خطأ باللون الأحمر.
   - تأكد من أنك لم تعدل أي ملف خارج نطاق فريقك عبر الأمر:
     ```bash
     git status
     ```
2. **دفع الفرع إلى GitHub:**
   ```bash
   git push origin feature/team-X-...
   ```
3. **فتح طلب السحب (Open Pull Request):**
   - اختر الفرع الهدف: `base: main` والفرع المصدر: `compare: feature/team-X-...`.
   - املأ نموذج وصف الـ PR:
     - ما التغييرات التي قمت بها؟
     - ما الملفات التي تم تعديلها؟
     - هل قمت باختبار الموقع محلياً؟ (أرفق لقطة شاشة إن أمكن).
4. **المراجعة والاعتماد (Review & Approval):**
   - يقوم الفريق 7 ومؤطر المشروع بمراجعة التغييرات.
   - إذا طُلب منك تعديل، قم بإجرائه على نفس الفرع محلياً وارفعه بـ `git push` وسيتم تحديث الـ PR تلقائياً.
5. **الدمج (Merge):**
   - بعد الحصول على الموافقة، يتم دمج الفرع في `main`.
   - يقوم جميع الطلبة بعدها بتحديث فروعهم المحلية بسحب التحديثات.

---

## 6. كيفية تجنب وحل نزاعات الدمج (Merge Conflicts)

### لماذا تحدث النزاعات؟
تحدث النزاعات عندما يقوم فريقان أو شخصان بتعديل نفس السطر في نفس الملف في نفس الوقت.

### كيف يحمي هذا المشروع الفرق من النزاعات؟
بفضل **معمارية الفرق السبعة المنفصلة (Seven-Team Architecture)**، يمتلك كل فريق ملفات منفصلة تماماً في `css/` و `js/` و `data/`، مما يجعل فرصة حدوث نزاعات قريبة من الصفر!

### في حال واجهت نزاعاً:
1. قم بسحب آخر تحديثات الفرع الرئيسي:
   ```bash
   git checkout main
   git pull origin main
   git checkout feature/team-X
   git merge main
   ```
2. سيخبرك Git بالملفات المتنازعة.
3. افتح الملف في Visual Studio Code وستجد علامات:
   ```text
   <<<<<<< HEAD (التعديل الخاص بك)
   ...
   =======
   ... (التعديل القادم من main)
   >>>>>>> main
   ```
4. اختر الخيار المناسب (`Accept Current Change` أو `Accept Incoming Change` أو دمجهما معاً).
5. احفظ الملف، ثم نفذ:
   ```bash
   git add <اسم الملف>
   git commit -m "fix: resolve merge conflict with main"
   git push origin feature/team-X
   ```
