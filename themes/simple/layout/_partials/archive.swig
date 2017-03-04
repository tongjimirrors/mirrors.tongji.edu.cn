{% set page.title = '新闻' %}
{% if page.canonical_path != 'archives/index.html' %}
<div class="typo"><p>
  <a href="{{ url_for('/archives') }}">&lt; 所有新闻</a>
</p></div>
{% endif %}
<h1 class="article-list__title">
  {% if is_archive() %}
    {% if is_month() %}
      存档: {{ page.year }} / {{ page.month }}
    {% elseif is_year() %}
      存档: {{ page.year }}
    {% else %}
      {% set showArchiveIndexLink = false %}
      所有新闻
    {% endif %}
  {% elseif is_category() %}
    分类: {{ page.category }}
  {% elseif is_tag() %}
    标签: {{ page.tag }}
  {% endif %}
</h1>
<ul class="article-list">
{% for post in page.posts %}
  <li class="article-list__item">
    <div class="article__title typo">
      <h2><a href="{{ url_for(post.path) }}">{{ post.title }}</a></h2>
    </div>
    <div class="article__meta">
    {% if post.date %}
      <div class="article__meta-item">
      <a href="{{ url_for(post.path) }}">
        <time datetime="{{ date_xml(post.date) }}">{{ date(post.date) }}</time>
      </a>
      </div>
    {% endif %}
    {% if post.tags %}
      <div class="article__meta-item article__tags">
        {{ list_tags(post.tags, {
          show_count: false,
          class: 'article__tag',
        }) }}
      </div>
    {% endif %}
    </div>
  </li>
{% endfor %}
</ul>
