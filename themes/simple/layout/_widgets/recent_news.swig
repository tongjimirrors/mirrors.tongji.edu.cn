<div class="section widget-news">
  <div class="section__header">
    <h1 class="section__title">新闻</h1>
  </div>
  <div class="section__body">
    <ul class="widget-news-list">
    {% for news in getRecentNews() %}
      <li class="widget-news-item">
        <div class="widget-news-item__title"><a class="typo-a" href="{{ url_for(news.path) }}">{{ news.title }}</a></div>
        <div class="widget-news-item__time"><time datetime="{{ date_xml(news.date) }}">{{ date(news.date) }}</time></div>
      </li>
    {% endfor %}
    </ul>
    <p><a class="typo-a" href="{{ url_for('/archives') }}">所有新闻...</a></p>
  </div>
</div>
