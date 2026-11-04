/**
 * Team 6 — Contact Data
 * بيانات الانضمام والتواصل
 */

(function () {
  "use strict";

  window.CLUB_CONTACT = {
    hasOfficialSocialLinks: false,

    pendingNotice:
      "سيتم إضافة وسائل التواصل والاستمارات الرسمية هنا فور اعتمادها من إدارة النادي.",

    location: {
      university: "جامعة فرحات عباس سطيف 1",
      campus: "القطب الجامعي - سطيف",
      country: "الجزائر",

      note:
        "يمكن للطلبة التواصل مع أعضاء النادي ومؤطريه خلال الأنشطة والفعاليات الجامعية."
    },

    joinGuidelines: [
      {
        step: 1,
        title: "الرغبة في التعلم والتعاون",
        desc:
          "الانضمام مفتوح لجميع الطلبة المهتمين بالنشاط العلمي والثقافي وخدمة المحيط الجامعي."
      },
      {
        step: 2,
        title: "المشاركة في الأنشطة والورشات",
        desc:
          "حضور الفعاليات المفتوحة والتعرف على أعضاء النادي ولجان العمل."
      },
      {
        step: 3,
        title: "التسجيل عند فتح باب الانضمام",
        desc:
          "متابعة إعلانات النادي والتسجيل في اللجان عند فتح باب الانضمام الرسمي."
      }
    ],

    officialLinks: {
      facebookUrl: null,
      instagramUrl: null,
      linkedinUrl: null,
      emailAddress: null,
      registrationFormUrl: null
    }
  };
})();
