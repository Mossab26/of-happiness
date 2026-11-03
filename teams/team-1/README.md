# دليل الفريق 1: الخطوط والألوان والهوية البصرية
## Team 1 — Theme, Typography & Design System

### 1. مسؤولية الفريق (Responsibility)
الفريق 1 مسؤول عن تأسيس وصيانة الهوية البصرية الموحدة لموقع نادي كيمياء السعادة. يشمل ذلك تعريف المتغيرات المشتركة للألوان، درجات التباين، الخطوط العربية وبدائلها الآمنة، مقاييس التباعد (Spacing)، أشكال الأزرار، والبطاقات المشتركة.

### 2. الملفات المملوكة للفريق (Owned Files - يُسمح بتعديلها فقط)
- `css/team-1-theme.css`
- `teams/team-1/README.md`

### 3. ملفات ممنوع تعديلها (Restricted Files)
- `index.html` (مملوك للفريق 7).
- ملفات CSS التابعة للفرق الأخرى (`css/team-2-about.css`, `css/team-3-activities.css` ... إلخ).
- ملفات JavaScript وملفات البيانات في المجلد `data/`.

### 4. فرع Git المخصص (Git Branch)
```bash
git checkout -b feature/team-1-theme
```

### 5. المتطلبات والمعايير الفنية (Design Guidelines)
- الخلفية بيضاء نقية (`#ffffff` و `#f8fafc`).
- درجات الأزرق السماوي للعناصر النشطة والتفاعلية (`#0284c7`, `#38bdf8`, `#e0f2fe`).
- كحلي داكن للنصوص الأساسية لتحقيق أعلى تباين ممكن (`#0f172a`, `#1e293b`).
- خط عربي أنيق وواضح مع بدائل النظام (`Segoe UI`, `Tahoma`, `Arial`, `sans-serif`) لدعم العمل دون اتصال بالإنترنت.
- دعم مستخدمي تقليل الحركة (`prefers-reduced-motion`).
- وضوح مؤشرات التركيز عبر لوحة المفاتيح (`:focus-visible`).

### 6. خطوات المعاينة والاختبار (Testing Procedure)
1. افتح المشروع في Visual Studio Code.
2. انقر بزر الفأرة الأيمن على `index.html` واختر **Open with Live Server**.
3. تفقد الألوان والأزرار على شاشات الحاسوب والهاتف للتأكد من تناسق الخطوط والتباين.

### 7. المخرجات المتوقعة (Expected Deliverable)
- ملف `css/team-1-theme.css` متكامل وخالٍ من الأخطاء التنسيقية.
- تقديم Pull Request بعنوان: `style(team-1): update design tokens and shared theme`.
