/**
 * js/team-4-team.js
 * ملكية الفريق 4: قسم فريق العمل (Team 4 - Team Section)
 * 
 * يقرأ هذا السكربت بيانات الإشراف والفرق الطلابية من data/team-members.js
 * ويُنشئ محتوى قسم #team مع الفصل الواضح بين الإشراف الرسمي للنادي وفرق تطوير الكود المصدري.
 */

function initTeamSection() {
  var sectionContainer = document.getElementById('team');
  if (!sectionContainer) {
    console.warn('[Team 4] لم يتم العثور على العنصر #team في الصفحة.');
    return;
  }

  var teamData = window.CLUB_TEAM;
  if (!teamData) {
    console.error('[Team 4] بيانات فريق العمل window.CLUB_TEAM غير متوفرة.');
    return;
  }

  // 1. بناء بطاقات الإشراف الرسمي
  var leadershipHtml = '';
  if (Array.isArray(teamData.leadership)) {
    for (var i = 0; i < teamData.leadership.length; i++) {
      var leader = teamData.leadership[i];
      var badgeClass = leader.isVerified ? 'badge-verified' : 'badge-pending';
      var badgeIcon = leader.isVerified ? '✓ ' : '⏳ ';

      leadershipHtml += 
        '<div class="leader-card">' +
          '<div>' +
            '<div class="leader-avatar-box">' + leader.avatarPlaceholder + '</div>' +
            '<h4 class="leader-name">' + leader.name + '</h4>' +
            '<div class="leader-role">' + leader.role + '</div>' +
            '<p class="leader-bio">' + leader.bio + '</p>' +
          '</div>' +
          '<div style="margin-top: 1rem;">' +
            '<span class="' + badgeClass + '">' + badgeIcon + leader.status + '</span>' +
          '</div>' +
        '</div>';
    }
  }

  // 2. بناء بطاقات الفرق السبعة المطورة للموقع عبر GitHub
  var devTeamsHtml = '';
  if (Array.isArray(teamData.developmentTeams)) {
    for (var j = 0; j < teamData.developmentTeams.length; j++) {
      var dTeam = teamData.developmentTeams[j];
      var filesText = dTeam.ownedFiles.join(' | ');

      devTeamsHtml += 
        '<div class="devteam-card">' +
          '<div>' +
            '<div class="devteam-top">' +
              '<span class="devteam-number">فريق ' + dTeam.number + '</span>' +
              '<span class="devteam-badge">' + dTeam.badge + '</span>' +
            '</div>' +
            '<h4 class="devteam-name">' + dTeam.name + '</h4>' +
            '<div class="devteam-name-en">' + dTeam.nameEn + '</div>' +
            '<p class="devteam-mission">' + dTeam.mission + '</p>' +
          '</div>' +
          '<div>' +
            '<div class="devteam-branch-box">' +
              '<span style="color: var(--color-primary); font-weight: 600;">Branch:</span>' +
              '<span>' + dTeam.branch + '</span>' +
            '</div>' +
            '<div class="devteam-files-list" title="الملفات المملوكة لهذا الفريق">' +
              '📁 ' + filesText +
            '</div>' +
          '</div>' +
        '</div>';
    }
  }

  var contentHtml = 
    '<div class="container">' +
      '<div class="section-header">' +
        '<span class="section-badge">فريق العمل والإشراف</span>' +
        '<h2 class="section-title">فريق النادي والمطورون</h2>' +
        '<p class="section-subtitle">إشراف بيداغوجي أكاديمي، وفرق طلابية تبني الموقع بصورة تعاونية عبر Git & GitHub</p>' +
      '</div>' +

      // قسم الإشراف
      '<div class="team-group-header">' +
        '<h3>الهيكل التنظيمي والإشراف الرسمي</h3>' +
        '<span class="team-group-tag">معلومات رسمية موثقة</span>' +
      '</div>' +
      '<div class="leadership-grid">' +
        leadershipHtml +
      '</div>' +

      // قسم الفرق السبعة لمشروع GitHub
      '<div class="team-group-header">' +
        '<div>' +
          '<h3>الفرق الطلابية السبعة لتطوير المنصة عبر GitHub</h3>' +
          '<p style="font-size: 0.9rem; color: var(--color-text-secondary); margin-top: 0.25rem;">' +
            'موزعة حسب تخصصات هندسة الويب في إطار التدريب التطبيقي على Git & Pull Requests' +
          '</p>' +
        '</div>' +
        '<span class="team-group-tag">هيكلية الفروع المستقلة</span>' +
      '</div>' +
      '<div class="devteams-grid">' +
        devTeamsHtml +
      '</div>' +
    '</div>';

  sectionContainer.innerHTML = contentHtml;
}
