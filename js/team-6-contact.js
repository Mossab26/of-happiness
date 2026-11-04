/**
 * Team 6 — Join & Contact
 * إنشاء قسم الانضمام والتواصل
 */

(function () {
  "use strict";

  /**
   * إنشاء عنصر HTML مع نص آمن.
   */
  function createElement(tag, className, text) {
    var element = document.createElement(tag);

    if (className) {
      element.className = className;
    }

    if (text !== undefined && text !== null) {
      element.textContent = String(text);
    }

    return element;
  }

  /**
   * التحقق من صحة رابط التواصل.
   */
  function isValidUrl(value) {
    if (typeof value !== "string" || !value.trim()) {
      return false;
    }

    try {
      var url = new URL(value);

      return (
        url.protocol === "https:" ||
        url.protocol === "http:"
      );
    } catch (error) {
      return false;
    }
  }

  /**
   * إضافة رابط خارجي آمن.
   */
  function createLink(label, url, className) {
    if (!isValidUrl(url)) {
      return null;
    }

    var link = createElement("a", className, label);

    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    return link;
  }

  /**
   * إنشاء قسم الخطوات الإرشادية.
   */
  function createJoinSteps(data) {
    var card = createElement("div", "join-steps-card");

    card.appendChild(
      createElement("h3", "", "كيف تنضم إلى نادي كيمياء السعادة؟")
    );

    card.appendChild(
      createElement(
        "p",
        "",
        "نرحب بكل طالب جامعي مهتم بالتعلم والمشاركة في الأنشطة العلمية والثقافية."
      )
    );

    var list = createElement("div", "join-steps-list");

    if (Array.isArray(data.joinGuidelines)) {
      data.joinGuidelines.forEach(function (step) {
        var item = createElement("div", "join-step-item");

        item.appendChild(
          createElement("div", "join-step-badge", step.step)
        );

        var content = createElement("div", "join-step-content");

        content.appendChild(
          createElement("h4", "", step.title)
        );

        content.appendChild(
          createElement("p", "", step.desc)
        );

        item.appendChild(content);
        list.appendChild(item);
      });
    }

    card.appendChild(list);

    return card;
  }

  /**
   * إنشاء صندوق وسائل التواصل.
   */
  function createSocialSection(data) {
    var wrapper = createElement("div", "social-links-container");
    var links = data.officialLinks || {};

    var socialLinks = [
      {
        label: "فيسبوك",
        url: links.facebookUrl
      },
      {
        label: "إنستغرام",
        url: links.instagramUrl
      },
      {
        label: "لينكدإن",
        url: links.linkedinUrl
      }
    ];

    var count = 0;

    socialLinks.forEach(function (item) {
      var link = createLink(
        item.label,
        item.url,
        "social-link-btn"
      );

      if (link) {
        wrapper.appendChild(link);
        count++;
      }
    });

    if (links.emailAddress) {
      var email = String(links.emailAddress).trim();

      if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        var emailLink = createElement(
          "a",
          "social-link-btn",
          "البريد الإلكتروني"
        );

        emailLink.href = "mailto:" + email;

        wrapper.appendChild(emailLink);
        count++;
      }
    }

    if (isValidUrl(links.registrationFormUrl)) {
      var registration = createLink(
        "استمارة الانضمام الرسمية",
        links.registrationFormUrl,
        "social-link-btn"
      );

      if (registration) {
        wrapper.appendChild(registration);
        count++;
      }
    }

    if (count === 0) {
      var notice = createElement(
        "div",
        "official-notice-box"
      );

      notice.appendChild(
        createElement(
          "p",
          "",
          data.pendingNotice ||
            "سيتم إضافة وسائل التواصل والاستمارات الرسمية هنا فور اعتمادها من إدارة النادي."
        )
      );

      notice.appendChild(
        createElement(
          "span",
          "official-notice-hint",
          "سيتم تحديث هذا القسم عند اعتماد القنوات الرسمية."
        )
      );

      return notice;
    }
    return wrapper;
  }

  /**
   * إنشاء صندوق المقر الجامعي.
   */
  function createLocationSection(location) {
    var box = createElement("div", "location-box");

    box.appendChild(
      createElement("h4", "", "📍 المقر والتواجد")
    );

    box.appendChild(
      createElement("p", "", location.university)
    );

    box.appendChild(
      createElement(
        "p",
        "",
        location.campus + " - " + location.country
      )
    );

    box.appendChild(
      createElement(
        "p",
        "location-note",
        location.note
      )
    );

    return box;
  }

  /**
   * الدالة الأساسية المطلوبة من المشروع.
   */
  function initContactSection() {
    var section = document.getElementById("join");

    if (!section) {
      console.warn(
        "[Team 6] لم يتم العثور على العنصر #join."
      );
      return;
    }

    var data = window.CLUB_CONTACT;

    if (!data) {
      console.error(
        "[Team 6] بيانات CLUB_CONTACT غير متوفرة."
      );
      return;
    }

    var container = createElement("div", "container");

    var header = createElement("div", "section-header");

    header.appendChild(
      createElement(
        "span",
        "section-badge",
        "مساحة الانضمام واللقاء"
      )
    );

    header.appendChild(
      createElement(
        "h2",
        "section-title",
        "انضم إلينا وتواصل معنا"
      )
    );

    header.appendChild(
      createElement(
        "p",
        "section-subtitle",
        "كن جزءاً من مجتمع طلابي شغوف بالعلوم والإبداع والعمل التطوعي."
      )
    );

    container.appendChild(header);

    var grid = createElement("div", "join-grid");

    grid.appendChild(createJoinSteps(data));

    var contactCard = createElement(
      "div",
      "contact-info-card"
    );

    var contactContent = createElement("div");

    contactContent.appendChild(
      createElement("h3", "", "قنوات التواصل المعتمدة")
    );

    contactContent.appendChild(
      createSocialSection(data)
    );

    contactContent.appendChild(
      createLocationSection(data.location)
    );

    contactCard.appendChild(contactContent);

    contactCard.appendChild(
      createElement(
        "div",
        "contact-guidance",
        "🤝 ملاحظة تنظيمية: لا نقوم بعرض استمارات تجريبية أو أرقام غير رسمية. يرجى الاعتماد على القنوات المعتمدة من إدارة النادي."
      )
    );

    grid.appendChild(contactCard);
    container.appendChild(grid);

    section.replaceChildren(container);
  }

  window.initContactSection = initContactSection;
})();
