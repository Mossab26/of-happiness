/**
 * js/team-3-activities.js
 * ملكية الفريق 3: قسم وبطاقات الأنشطة (Team 3 - Activities Section)
 * 
 * يقرأ هذا السكربت بيانات الأنشطة من data/activities.js ويُنشئ بطاقات الأنشطة
 * مع أزرار التصفية التفاعلية والحالة البديلة الآمنة.
 */

function initActivitiesSection() {
  var sectionContainer = document.getElementById('activities');
  if (!sectionContainer) {
    console.warn('[Team 3] لم يتم العثور على العنصر #activities في الصفحة.');
    return;
  }

  var activities = window.CLUB_ACTIVITIES;
  var categories = window.CLUB_ACTIVITY_CATEGORIES || ["الكل"];

  if (!activities || !Array.isArray(activities)) {
    console.error('[Team 3] بيانات الأنشطة window.CLUB_ACTIVITIES غير متوفرة.');
    return;
  }

  // بناء أزرار التصفية
  var filtersHtml = '<div class="activities-filters" role="group" aria-label="تصفية الأنشطة">';
  for (var c = 0; c < categories.length; c++) {
    var cat = categories[c];
    var activeClass = (c === 0) ? ' active' : '';
    filtersHtml += 
      '<button type="button" class="filter-btn' + activeClass + '" data-category="' + cat + '">' +
        cat +
      '</button>';
  }
  filtersHtml += '</div>';

  var headerHtml = 
    '<div class="container">' +
      '<div class="section-header">' +
        '<span class="section-badge">مبادرات وتجارب طلابية</span>' +
        '<h2 class="section-title">أنشطتنا وفعالياتنا</h2>' +
        '<p class="section-subtitle">برامج علمية، تدريبية، وثقافية مصممة لمرافقة وإلهام طلبة جامعة سطيف 1</p>' +
      '</div>' +
      filtersHtml +
      '<div id="activities-cards-container" class="activities-grid"></div>' +
    '</div>';

  sectionContainer.innerHTML = headerHtml;

  var cardsContainer = document.getElementById('activities-cards-container');
  var currentCategory = "الكل";

  function renderCards(selectedCategory) {
    if (!cardsContainer) return;

    var filtered = [];
    for (var i = 0; i < activities.length; i++) {
      if (selectedCategory === "الكل" || activities[i].category === selectedCategory) {
        filtered.push(activities[i]);
      }
    }

    if (filtered.length === 0) {
      cardsContainer.innerHTML = 
        '<div class="activities-empty-state" style="grid-column: 1 / -1;">' +
          '<div class="activities-empty-icon">🧪</div>' +
          '<h4>لا توجد أنشطة في هذا التصنيف حالياً</h4>' +
          '<p>يتم التنسيق دورياً لإدراج ورشات ومبادرات جديدة في هذا المجال.</p>' +
        '</div>';
      return;
    }

    var cardsHtml = '';
    for (var j = 0; j < filtered.length; j++) {
      var act = filtered[j];
      var dateClass = act.isVerifiedDate ? 'activity-date-verified' : '';
      var dateText = act.date ? act.date : 'تاريخ يعلن لاحقاً';
      var tagHtml = act.tag ? '<span class="activity-sub-tag">• ' + act.tag + '</span>' : '';

      cardsHtml += 
        '<div class="activity-card">' +
          '<div class="activity-card-header">' +
            '<div class="activity-meta-tags">' +
              '<span class="activity-category-tag">' + act.category + '</span>' +
              tagHtml +
            '</div>' +
            '<h3 class="activity-card-title">' + act.title + '</h3>' +
          '</div>' +
          '<p class="activity-card-desc">' + act.description + '</p>' +
          '<div class="activity-card-footer">' +
            '<div class="activity-date ' + dateClass + '">' +
              '<span>📅</span>' +
              '<span>' + dateText + '</span>' +
            '</div>' +
            '<span style="font-size: 0.8rem; color: var(--color-primary); font-weight: 600;">كيمياء السعادة</span>' +
          '</div>' +
        '</div>';
    }

    cardsContainer.innerHTML = cardsHtml;
  }

  // عرض كل البطاقات في البداية
  renderCards(currentCategory);

  // تفعيل التبديل بين التصنيفات
  var filterButtons = sectionContainer.querySelectorAll('.filter-btn');
  for (var b = 0; b < filterButtons.length; b++) {
    filterButtons[b].addEventListener('click', function(e) {
      var btn = e.currentTarget;
      var cat = btn.getAttribute('data-category');
      
      for (var k = 0; k < filterButtons.length; k++) {
        filterButtons[k].classList.remove('active');
      }
      btn.classList.add('active');
      currentCategory = cat;
      renderCards(cat);
    });
  }
}
