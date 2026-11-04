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
            '<span>رؤيتنا المستقبلية</span>' +
            '<span class="badge-verified">رؤية النادي</span>' +
          '</h4>' +

          '<p>' +
            'أن نكون فضاءً جامعيًا رائدًا في نشر الثقافة العلمية، ' +
            'وتحفيز روح البحث والابتكار، وبناء مجتمع طلابي واعٍ ومبدع، ' +
            'يجعل من العلم وسيلة للتطور والتغيير الإيجابي.' +
          '</p>' +

          '<div style="margin-top: 1.5rem; padding: 1rem; background: #ffffff; border-radius: var(--radius-md); border: 1px dashed var(--color-primary-light);">' +

            '<small style="color: var(--color-text-muted); display: block; line-height: 1.8;">' +
              '<strong>رسالتنا:</strong><br>' +
              'العلم شغف، والمعرفة طريق، والعمل الجماعي أساس النجاح.' +
              '<br><br>' +
              'نسعى إلى جعل النادي مساحة يلتقي فيها الطموح بالمعرفة، ' +
              'وتتحول فيها الأفكار إلى مبادرات، والتعلم إلى تجربة ممتعة ومثمرة.' +
            '</small>' +

          '</div>' +

        '</div>' +

      '</div>' +

      '<div class="objectives-wrapper">' +

        '<div class="objectives-header">' +
          '<h3>أهدافنا الاستراتيجية</h3>' +
          '<p>' +
            'سبع ركائز أساسية توجه أنشطتنا ومبادراتنا نحو بيئة جامعية علمية وإبداعية.' +
          '</p>' +
        '</div>' +

        '<div class="objectives-grid">' +
          objectivesHtml +
        '</div>' +

      '</div>' +

    '</div>';

  sectionContainer.innerHTML = contentHtml;
}
