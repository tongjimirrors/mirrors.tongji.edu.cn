<div class="footer">
  <div class="row"><div class="columns"><div class="row">
  {% for category_title, links in config.footer_links %}
    <div class="medium-3 large-2 columns footer__category expandable">
      <h1 layout="row center-justify">
        {{ category_title }}
        <span class="expand-icon">
          <span class="icon icon-expand_more"></span>
        </span>
      </h1>
      <div class="footer__category__expander"><ul class="footer__category__list">
      {% for link_label, link_url in links %}
        <li class="footer__category__item"><a href="{{ link_url }}">{{ link_label }}</a></li>
      {% endfor %}
      </ul></div>
    </div>
  {% endfor %}
    <div class="medium-3 large-offset-4 large-2 columns footer__category">
      LOGO
    </div>
  </div></div></div>
  <div class="row"><div class="columns typo footer__text">
    {{ config.description }}
  </div></div>
</div>
