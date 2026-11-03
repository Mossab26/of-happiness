/**
 * js/team-6-contact.js
 * ملكية الفريق 6: قسم الانضمام والتواصل (Team 6 - Contact & Join)
 * 
 * يقرأ هذا السكربت بيانات التواصل والانضمام من data/contact.js ويُنشئ محتوى قسم #join.
 * التزام بيداغوجي: لا يتم إظهار روابط وهمية أو استمارات وهمية تدعي إرسال بيانات.
 */

function initContactSection() {
  var sectionContainer = document.getElementById('join');
  if (!sectionContainer) {
    console.warn('[Team 6] لم يتم العثور على العنصر #join في الصفحة.');
    return;
  }

  var contactData = window.CLUB_CONTACT;
  if (!contactData) {
    console.error('[Team 6] بيانات التواصل window.CLUB_CONTACT غير متوفرة.');
    return;
  }

  // خطوات الانضمام
  var stepsHtml = '';
  if (Array.isArray(contactData.joinGuidelines)) {
    for (var i = 0; i < contactData.joinGuidelines.length; i++) {
      var step = contactData.joinGuidelines[i];
      stepsHtml += 
        '<div class="join-step-item">' +
          '<div class="join-step-badge">' + step.step + '</div>' +
          '<div class="join-step-content">' +
            '<h4>' + step.title + '</h4>' +
            '<p>' + step.desc + '</p>' +
          '</div>' +
        '</div>';
    }
  }

  // وسائل التواصل الرسمية
  var socialSectionHtml = '';
  if (contactData.hasOfficialSocialLinks && contactData.officialLinks) {
    var links = contactData.officialLinks;
    var linksButtons = '';

    if (links.registrationFormUrl) {
      linksButtons += '<a href="' + links.registrationFormUrl + '" target="_blank" rel="noopener noreferrer" class="btn btn-primary">استمارة الانضمام الرسمية</a>';
    }
    if (links.facebookUrl) {
      linksButtons += '<a href="' + links.facebookUrl + '" target="_blank" rel="noopener noreferrer" class="social-link-btn">فيسبوك</a>';
    }
    if (links.instagramUrl) {
      linksButtons += '<a href="' + links.instagramUrl + '" target="_blank" rel="noopener noreferrer" class="social-link-btn">إنستغرام</a>';
    }
    if (links.emailAddress) {
      linksButtons += '<a href="mailto:' + links.emailAddress + '" class="social-link-btn">البريد الإلكتروني</a>';
    }

    socialSectionHtml = '<div class="social-links-container">' + linksButtons + '</div>';
  } else {
    // الرسالة المحايدة المطلوبة في كراس الشروط
    socialSectionHtml = 
      '<div class="official-notice-box">' +
        '<p>📢 ' + contactData.pendingNotice + '</p>' +
        '<span class="official-notice-hint">' +
          'سيتم تحديث هذا القسم من خلال ملف data/contact.js فور المصادقة على القنوات الرقمية.' +
        '</span>' +
      '</div>';
  }

  var contentHtml = 
    '<div class="container">' +
      '<div class="section-header">' +
        '<span class="section-badge">مساحة الانضمام واللقاء</span>' +
        '<h2 class="section-title">انضم إلينا وتواصل معنا</h2>' +
        '<p class="section-subtitle">كن جزءاً من مجتمع طلابي شغوف بالعلوم، الإبداع، والعمل التطوعي المثمر</p>' +
      '</div>' +

      '<div class="join-grid">' +
        '<div class="join-steps-card">' +
          '<h3>كيف تنضم إلى نادي كيمياء السعادة؟</h3>' +
          '<p>نرحب بكل طالب جامعي طموح يرغب في تنمية مهاراته والمساهمة في الأنشطة الطلابية:</p>' +
          '<div class="join-steps-list">' +
            stepsHtml +
          '</div>' +
        '</div>' +

        '<div class="contact-info-card">' +
          '<div>' +
            '<h3>قنوات التواصل المعتمدة</h3>' +
            socialSectionHtml +

            '<div class="location-box">' +
              '<h4>' +
                '<span>📍 المقر والتواجد</span>' +
              '</h4>' +
              '<p><strong>' + contactData.location.university + '</strong></p>' +
              '<p>' + contactData.location.campus + ' - ' + contactData.location.country + '</p>' +
              '<p style="margin-top: 0.5rem; font-size: 0.85rem; color: var(--color-text-muted);">' +
                contactData.location.note +
              '</p>' +
            '</div>' +
          '</div>' +

          '<div style="padding: 1rem; background-color: var(--color-bg-soft); border-radius: var(--radius-md); border: 1px solid var(--color-primary-light);">' +
            '<p style="font-size: 0.85rem; color: var(--color-text-secondary); line-height: 1.6;">' +
              '🤝 <strong>ملاحظة تنظيمية:</strong> للحفاظ على مصداقية الموقع، لا نقوم بعرض استمارات تسجيل تجريبية أو أرقام غير رسمية. باب الانضمام والتواصل المباشر متاح للطلبة في الفعاليات الجامعية.' +
            '</p>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>';

  sectionContainer.innerHTML = contentHtml;
}
