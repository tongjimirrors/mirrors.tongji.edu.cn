<div class="section widget-contact-us">
  <div class="section__header">
    <h1 class="section__title">帮助主题</h1>
  </div>
  <div class="section__body"><div class="typo">
    <ul>
    {% for page in getHelps() %}
      <li><p><a href="{{ url_for(page.path) }}">{{ page.sidebar_name }}</a></p></li>
    {% endfor %}
    </ul>
  </div></div>
</div>
