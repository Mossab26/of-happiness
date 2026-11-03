/**
 * data/gallery.js
 * ملكية الفريق 5: معرض الصور والأصول (Team 5 - Media Gallery)
 * 
 * يحتوي هذا الملف على مسارات وبيانات صور النادي.
 * قاعدة هامة: لا يتم اختلاق صور وهمية؛ في حال عدم توفر الصورة، يتم إظهار
 * بطاقة بديلة نظيفة توضح للطلبة: "أضف صورة النشاط هنا" مع توجيه لحفظها في assets/images/.
 */

window.CLUB_GALLERY = [
  {
    id: "gal-1",
    title: "الشعار الرسمي لنادي كيمياء السعادة",
    category: "الهوية الرسمية",
    src: "assets/logo/club-logo.png",
    alt: "شعار نادي كيمياء السعادة - جامعة فرحات عباس سطيف 1",
    hasImage: true,
    caption: "الهوية البصرية الرسمية المعتمدة للنادي (The Chemistry of Happiness)"
  },
  {
    id: "gal-2",
    title: "فعالية استقبال الطلبة الجدد",
    category: "دعم طلابي",
    src: "assets/images/activity-reception.jpg",
    alt: "صورة توثيقية لفعالية استقبال الطلبة الجدد",
    hasImage: false, // يتم تعيينها إلى true فور وضع الصورة في assets/images/
    caption: "أضف صورة النشاط هنا (assets/images/activity-reception.jpg)"
  },
  {
    id: "gal-3",
    title: "ورشة الذكاء الاصطناعي والتطبيقات الحديثة",
    category: "أنشطة علمية",
    src: "assets/images/workshop-ai.jpg",
    alt: "صورة ورشة الذكاء الاصطناعي في البحث العلمي",
    hasImage: false,
    caption: "أضف صورة النشاط هنا (assets/images/workshop-ai.jpg)"
  },
  {
    id: "gal-4",
    title: "مبادرة صندوق السعادة في الحرم الجامعي",
    category: "مبادرات ثقافية",
    src: "assets/images/box-of-happiness.jpg",
    alt: "صورة مبادرة صندوق السعادة التفاعلية",
    hasImage: false,
    caption: "أضف صورة النشاط هنا (assets/images/box-of-happiness.jpg)"
  },
  {
    id: "gal-5",
    title: "جلسة Practical Knowledge للتبادل المعرفي",
    category: "تطوير مهارات",
    src: "assets/images/practical-knowledge.jpg",
    alt: "صورة جلسة المعرفة التطبيقية والمهارات العملية",
    hasImage: false,
    caption: "أضف صورة النشاط هنا (assets/images/practical-knowledge.jpg)"
  },
  {
    id: "gal-6",
    title: "ورشة الإلقاء وفنون التحدث للجمهور",
    category: "تطوير مهارات",
    src: "assets/images/public-speaking.jpg",
    alt: "صورة تدريب الطلبة على مهارات الإلقاء والتواصل",
    hasImage: false,
    caption: "أضف صورة النشاط هنا (assets/images/public-speaking.jpg)"
  }
];
