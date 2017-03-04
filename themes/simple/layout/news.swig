{% extends "_base/layout_news.swig" %}
{% block news_body %}
  <div class="region row collapse">
    <div class="typo"><p>
      <a href="{{ url_for('/archives') }}">&lt; 所有新闻</a>
    </p></div>
    {%- set post=page %}
    {%- include "_partials/article.swig" %}
  </div>
{% endblock %}
