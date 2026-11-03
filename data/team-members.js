/**
 * data/team-members.js
 * ملكية الفريق 4: قسم فريق العمل (Team 4 - Team Section)
 * 
 * يحتوي هذا الملف على بيانات الإشراف الرسمي للنادي والفرق السبعة المطورة للموقع عبر GitHub.
 * تنبيه: لا يتم اختلاق أسماء أعضاء أو صور غير مؤكدة؛ تُستخدم شارات انتظار التأكيد للقيادة التنفيذية.
 */

window.CLUB_TEAM = {
  // القيادة والإشراف الرسمي المعتمد
  leadership: [
    {
      id: "lead-1",
      name: "الأستاذ ابن عيسى عاطف",
      role: "المشرف العام على النادي",
      status: "معتمد وموثق",
      isVerified: true,
      bio: "أستاذ ومؤطر بنادي كيمياء السعادة - جامعة فرحات عباس سطيف 1، يشرف على توجيه الأنشطة والمبادرات العلمية والثقافية للنادي.",
      avatarPlaceholder: "إشراف رسمي"
    },
    {
      id: "lead-2",
      name: "في انتظار التأكيد الرسمي",
      role: "رئيس النادي",
      status: "شاغر / قيد التحديث",
      isVerified: false,
      bio: "سيتم إدراج بيانات رئيس النادي فور اعتماد التشكيلة التنفيذية الرسمية من قبل إدارة النادي.",
      avatarPlaceholder: "رئاسة النادي"
    },
    {
      id: "lead-3",
      name: "في انتظار التأكيد الرسمي",
      role: "نائب الرئيس",
      status: "شاغر / قيد التحديث",
      isVerified: false,
      bio: "سيتم إدراج بيانات نائب رئيس النادي فور اعتماد التشكيلة التنفيذية الرسمية.",
      avatarPlaceholder: "نيابة الرئاسة"
    },
    {
      id: "lead-4",
      name: "في انتظار التأكيد الرسمي",
      role: "الأمانة العامة ومسؤولية الإعلام",
      status: "شاغر / قيد التحديث",
      isVerified: false,
      bio: "سيتم إدراج بيانات الأمانة العامة ومسؤول الإعلام والاتصال بعد التوثيق الرسمي.",
      avatarPlaceholder: "الأمانة العامة"
    }
  ],

  // الفرق الطلابية السبعة لتطوير المشروع عبر GitHub (Educational Web Development Teams)
  developmentTeams: [
    {
      id: "team-1",
      number: "1",
      name: "فريق الخطوط والألوان والهوية",
      nameEn: "Team 1 — Design System & Theme",
      branch: "feature/team-1-theme",
      ownedFiles: ["css/team-1-theme.css"],
      mission: "بناء نظام المتغيرات اللونية، الخطوط العربية وقواعد التباين، والأنماط المشتركة لعناصر الموقع.",
      badge: "الهوية البصرية"
    },
    {
      id: "team-2",
      number: "2",
      name: "فريق التعريف بالنادي (من نحن)",
      nameEn: "Team 2 — About Section",
      branch: "feature/team-2-about",
      ownedFiles: ["css/team-2-about.css", "js/team-2-about.js", "data/club-info.js"],
      mission: "صياغة وعرض هوية النادي، تاريخ التأسيس، إشراف الأستاذ ابن عيسى عاطف، والأهداف الإستراتيجية.",
      badge: "التعريف والأهداف"
    },
    {
      id: "team-3",
      number: "3",
      name: "فريق الأنشطة والمبادرات",
      nameEn: "Team 3 — Activities Section",
      branch: "feature/team-3-activities",
      ownedFiles: ["css/team-3-activities.css", "js/team-3-activities.js", "data/activities.js"],
      mission: "عرض بطاقات الأنشطة الرسمية، نظام التصفية حسب التصنيف، والتعامل الآمن مع التواريخ غير المؤكدة.",
      badge: "الأنشطة والفعاليات"
    },
    {
      id: "team-4",
      number: "4",
      name: "فريق العمل والمساهمين",
      nameEn: "Team 4 — Team & Contributors",
      branch: "feature/team-4-team",
      ownedFiles: ["css/team-4-team.css", "js/team-4-team.js", "data/team-members.js"],
      mission: "تصميم واجهة الإشراف الرسمي للنادي والفرق الطلابية المساهمة في تطوير الكود المصدري عبر Git.",
      badge: "فريق العمل"
    },
    {
      id: "team-5",
      number: "5",
      name: "فريق معرض الصور والأصول",
      nameEn: "Team 5 — Media Gallery",
      branch: "feature/team-5-gallery",
      ownedFiles: ["css/team-5-gallery.css", "js/team-5-gallery.js", "data/gallery.js"],
      mission: "تطوير المعرض المتجاوب، التعامل مع الصور المفقودة دون كسر التنسيق، وتوثيق إضافة الوسائط.",
      badge: "معرض الصور"
    },
    {
      id: "team-6",
      number: "6",
      name: "فريق الانضمام والتواصل",
      nameEn: "Team 6 — Contact & Join",
      branch: "feature/team-6-contact",
      ownedFiles: ["css/team-6-contact.css", "js/team-6-contact.js", "data/contact.js"],
      mission: "إعداد قسم الانضمام، روابط التواصل الرسمية عند توفرها، وعرض الرسائل الإرشادية المحايدة.",
      badge: "التواصل والانضمام"
    },
    {
      id: "team-7",
      number: "7",
      name: "فريق الصفحة الرئيسية والتكامل",
      nameEn: "Team 7 — Home & Integration",
      branch: "feature/team-7-home",
      ownedFiles: ["index.html", "css/team-7-home.css", "js/team-7-home.js"],
      mission: "هيكلة وثيقة HTML الرئيسية، شريط التنقل المتجاوب، واستدعاء دوال التهيئة التابعة للفرق الأخرى بأمان.",
      badge: "التكامل العام"
    }
  ]
};
