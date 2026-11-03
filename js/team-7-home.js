/**
 * js/team-7-home.js
 * ملكية الفريق 7: الصفحة الرئيسية والتكامل العام (Team 7 - Home & Integration)
 * 
 * يمتلك الفريق 7 منطق التنقل، القائمة المتجاوبة، تكامل الصفحة،
 * وتنسيق استدعاء دوال تهيئة الأقسام الخاصة بباقي الفرق السبعة بأمان.
 */

function initHomePage() {
  console.log('[Team 7] بدء تهيئة الصفحة الرئيسية وتكامل الفرق السبعة...');

  // 1. تهيئة القائمة المتجاوبة للجوال
  var toggleBtn = document.getElementById('mobile-menu-btn');
  var mobileDrawer = document.getElementById('mobile-nav-drawer');

  if (toggleBtn && mobileDrawer) {
    toggleBtn.addEventListener('click', function() {
      var isOpen = mobileDrawer.classList.toggle('is-open');
      toggleBtn.classList.toggle('is-open', isOpen);
      toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // إغلاق القائمة عند النقر على أي رابط داخلها
    var mobileLinks = mobileDrawer.querySelectorAll('a');
    for (var m = 0; m < mobileLinks.length; m++) {
      mobileLinks[m].addEventListener('click', function() {
        mobileDrawer.classList.remove('is-open');
        toggleBtn.classList.remove('is-open');
        toggleBtn.setAttribute('aria-expanded', 'false');
      });
    }
  }

  // 2. تحديث الرابط النشط عند التمرير
  var sections = document.querySelectorAll('section[id]');
  var navLinks = document.querySelectorAll('.nav-menu .nav-link');

  if ('IntersectionObserver' in window && sections.length > 0 && navLinks.length > 0) {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var id = entry.target.getAttribute('id');
          navLinks.forEach(function(link) {
            if (link.getAttribute('href') === '#' + id) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, {
      rootMargin: '-20% 0px -70% 0px'
    });

    sections.forEach(function(sec) {
      observer.observe(sec);
    });
  }

  // 3. عقد التكامل مع باقي الفرق السبعة (Modular Team Integration Contract)
  // يتم استدعاء كل دالة بأمان فقط بعد التأكد من تعريفها في سكربت الفريق المسؤول
  if (typeof initAboutSection === 'function') {
    try {
      initAboutSection();
    } catch (e) {
      console.error('[Integration Error] خطأ في تهيئة قسم الفريق 2 (About):', e);
    }
  } else {
    console.warn('[Integration Warning] دالة initAboutSection غير معرّفة.');
  }

  if (typeof initActivitiesSection === 'function') {
    try {
      initActivitiesSection();
    } catch (e) {
      console.error('[Integration Error] خطأ في تهيئة قسم الفريق 3 (Activities):', e);
    }
  } else {
    console.warn('[Integration Warning] دالة initActivitiesSection غير معرّفة.');
  }

  if (typeof initTeamSection === 'function') {
    try {
      initTeamSection();
    } catch (e) {
      console.error('[Integration Error] خطأ في تهيئة قسم الفريق 4 (Team):', e);
    }
  } else {
    console.warn('[Integration Warning] دالة initTeamSection غير معرّفة.');
  }

  if (typeof initGallerySection === 'function') {
    try {
      initGallerySection();
    } catch (e) {
      console.error('[Integration Error] خطأ في تهيئة قسم الفريق 5 (Gallery):', e);
    }
  } else {
    console.warn('[Integration Warning] دالة initGallerySection غير معرّفة.');
  }

  if (typeof initContactSection === 'function') {
    try {
      initContactSection();
    } catch (e) {
      console.error('[Integration Error] خطأ في تهيئة قسم الفريق 6 (Contact):', e);
    }
  } else {
    console.warn('[Integration Warning] دالة initContactSection غير معرّفة.');
  }

  console.log('[Team 7] اكتملت تهيئة المنصة بنجاح.');
}

// تشغيل التهيئة بمجرد اكتمال تحميل DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initHomePage);
} else {
  initHomePage();
}
