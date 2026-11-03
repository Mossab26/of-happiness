/**
 * js/team-5-gallery.js
 * ملكية الفريق 5: معرض الصور والأصول (Team 5 - Media Gallery)
 * 
 * يقرأ هذا السكربت بيانات الصور من data/gallery.js ويُنشئ معرض الصور المتجاوب،
 * مع معالجة ذكية للصور غير المتوفرة تجنبًا لأي كسر في التصميم أو أخطاء.
 */

function initGallerySection() {
  var sectionContainer = document.getElementById('gallery');
  if (!sectionContainer) {
    console.warn('[Team 5] لم يتم العثور على العنصر #gallery في الصفحة.');
    return;
  }

  var galleryData = window.CLUB_GALLERY;
  if (!galleryData || !Array.isArray(galleryData)) {
    console.error('[Team 5] بيانات المعرض window.CLUB_GALLERY غير متوفرة.');
    return;
  }

  var galleryCardsHtml = '';
  for (var i = 0; i < galleryData.length; i++) {
    var item = galleryData[i];

    var mediaHtml = '';
    if (item.hasImage && item.src) {
      mediaHtml = 
        '<img class="gallery-media-img" src="' + item.src + '" alt="' + item.alt + '" loading="lazy" ' +
        'onerror="this.style.display=\'none\'; this.nextElementSibling.style.display=\'flex\';">' +
        '<div class="gallery-placeholder" style="display: none;">' +
          '<div class="gallery-placeholder-icon">📷</div>' +
          '<div class="gallery-placeholder-text">أضف صورة النشاط هنا</div>' +
          '<div class="gallery-placeholder-hint">' + item.src + '</div>' +
        '</div>';
    } else {
      mediaHtml = 
        '<div class="gallery-placeholder">' +
          '<div class="gallery-placeholder-icon">📸</div>' +
          '<div class="gallery-placeholder-text">أضف صورة النشاط هنا</div>' +
          '<div class="gallery-placeholder-hint">' + item.src + '</div>' +
        '</div>';
    }

    galleryCardsHtml += 
      '<div class="gallery-card">' +
        '<div class="gallery-media-wrapper">' +
          mediaHtml +
        '</div>' +
        '<div class="gallery-card-body">' +
          '<div>' +
            '<span class="gallery-card-category">' + item.category + '</span>' +
            '<h3 class="gallery-card-title">' + item.title + '</h3>' +
          '</div>' +
          '<p class="gallery-card-caption">' + item.caption + '</p>' +
        '</div>' +
      '</div>';
  }

  var contentHtml = 
    '<div class="container">' +
      '<div class="section-header">' +
        '<span class="section-badge">ذاكرة النادي والتوثيق</span>' +
        '<h2 class="section-title">معرض الصور والوسائط</h2>' +
        '<p class="section-subtitle">توثيق مرئي للهوية الرسمية وفعاليات النادي في رحاب جامعة فرحات عباس سطيف 1</p>' +
      '</div>' +

      '<div class="gallery-grid">' +
        galleryCardsHtml +
      '</div>' +

      '<div class="gallery-instruction-box">' +
        '<h4>' +
          '<span>💡 تعليمات للفريق 5 (إضافة صور الأنشطة)</span>' +
        '</h4>' +
        '<p>' +
          'لإضافة صورة نشاط جديدة دون كسر الموقع: قم بوضع ملف الصورة داخل المجلد ' +
          '<code>assets/images/</code> ثم افتح الملف <code>data/gallery.js</code> واضبط خاصية ' +
          '<code>hasImage: true</code> مع تحديد مسار الصورة والوصف البديل المناسب.' +
        '</p>' +
      '</div>' +
    '</div>';

  sectionContainer.innerHTML = contentHtml;
}
