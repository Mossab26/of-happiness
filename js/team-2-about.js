/**
 * js/team-2-about.js
 * ملكية الفريق 2: قسم من نحن ومعلومات النادي (Team 2 - About Section)
 * 
 * يقرأ هذا السكربت بيانات النادي من data/club-info.js ويُنشئ محتوى قسم #about.
 */

function initAboutSection() {
  var sectionContainer = document.getElementById('about');
  if (!sectionContainer) {
    console.warn('[Team 2] لم يتم العثور على العنصر #about في الصفحة.');
    return;
  }

  var info = window.CLUB_INFO;
  if (!info) {
    console.error('[Team 2] بيانات النادي window.CLUB_INFO غير متوفرة.');
    return;
  }

  // بناء أهداف النادي
  var objectivesHtml = '';
  if (info.about && Array.isArray(info.about.objectives)) {
    for (var i = 0; i < info.about.objectives.length; i++) {
      var obj = info.about.objectives[i];
      objectivesHtml += 
        '<div class="objective-card">' +
          '<div class="objective-number">' + obj.id + '</div>' +
          '<h4>' + obj.title + '</h4>' +
          '<p>' + obj.description + '</p>' +
        '</div>';
    }
  }

  var contentHtml = 
    '<div class="container">' +
      '<div class="section-header">' +
        '<span class="section-badge">هوية ورسالة النادي</span>' +
        '<h2 class="section-title">من نحن</h2>' +
        '<p class="section-subtitle">تعرّف على مسار ورؤية نادي كيمياء السعادة بجامعة فرحات عباس سطيف 1</p>' +
      '</div>' +

      '<div class="about-grid">' +
        '<div class="about-intro-card">' +
          '<h3>' +
            '<span>' + info.nameAr + '</span>' +
          '</h3>' +
          '<p>' + info.about.intro + '</p>' +
          '<br>' +
          '<p>' + info.about.vision + '</p>' +

          '<ul class="about-meta-list">' +
            '<li class="about-meta-item">' +
              '<span class="about-meta-label">المؤسسة الجامعية</span>' +
              '<span class="about-meta-value">' + info.university + '</span>' +
            '</li>' +
            '<li class="about-meta-item">' +
              '<span class="about-meta-label">تاريخ التأسيس</span>' +
              '<span class="about-meta-value">' + info.foundationDate + '</span>' +
            '</li>' +
            '<li class="about-meta-item">' +
              '<span class="about-meta-label">طبيعة النادي</span>' +
              '<span class="about-meta-value">' + info.type + '</span>' +
            '</li>' +
            '<li class="about-meta-item">' +
              '<span class="about-meta-label">المشرف العام</span>' +
              '<span class="about-meta-value">' + info.supervisor + '</span>' +
            '</li>' +
          '</ul>' +
        '</div>' +

        '<div class="about-supervisor-box">' +
          '<h4>' +
            '<span>الإشراف البيداغوجي والعلمي</span>' +
            '<span class="badge-verified">إشراف معتمد</span>' +
          '</h4>' +
          '<p style="margin-bottom: 1rem; font-weight: 600; color: var(--color-primary-hover);">' +
            'المشرف: ' + info.supervisor +
          '</p>' +
          '<p>' + info.about.supervisorNote + '</p>' +
          '<div style="margin-top: 1.5rem; padding: 1rem; background: #ffffff; border-radius: var(--radius-md); border: 1px dashed var(--color-primary-light);">' +
            '<small style="color: var(--color-text-muted); display: block; line-height: 1.6;">' +
              '💡 معلومة موثقة: تم اعتماد النادي رسمياً في 21 أبريل 2024 بجامعة سطيف 1، ويواصل تقديم مبادراته الهادفة للأسرة الطلابية.' +
            '</small>' +
          '</div>' +
        '</div>' +
      '</div>' +

      '<div class="objectives-wrapper">' +
        '<div class="objectives-header">' +
          '<h3>أهداف النادي الإستراتيجية</h3>' +
          '<p>الركائز الأساسية التي تنطلق منها كافة برامجنا وأنشطتنا</p>' +
        '</div>' +
        '<div class="objectives-grid">' +
          objectivesHtml +
        '</div>' +
      '</div>' +
    '</div>';

  sectionContainer.innerHTML = contentHtml;
}
