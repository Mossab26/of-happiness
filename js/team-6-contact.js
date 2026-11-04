
  // وسائل التواصل الرسمية للنادي
  var socialSectionHtml = '';
  var links = contactData.officialLinks || {};

  // روابط النادي الرسمية
  links.facebookUrl = 'https://www.facebook.com/Thechemistryofhappiness';
  links.instagramUrl = 'https://www.instagram.com/the_chemistry_of_hapiness19/';
  links.emailAddress = 'chemistryofhapinesss@gmail.com';

  var linksButtons = '';

  if (links.facebookUrl) {
    linksButtons +=
      '<a href="' + links.facebookUrl + '" target="_blank" rel="noopener noreferrer" class="social-link-btn">Facebook</a>';
  }

  if (links.instagramUrl) {
    linksButtons +=
      '<a href="' + links.instagramUrl + '" target="_blank" rel="noopener noreferrer" class="social-link-btn">Instagram</a>';
  }

  if (links.emailAddress) {
    linksButtons +=
      '<a href="mailto:' + links.emailAddress + '" class="social-link-btn">Gmail</a>';
  }

  socialSectionHtml =
    '<div class="social-links-container">' +
      linksButtons +
    '</div>';
