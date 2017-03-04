<article class="article article--{{ post.layout }}">
  <div class="article__title typo">
    <h1>{{ post.title }}</h1>
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
  <div class="article__content typo">
    {{ post.content }}
  </div>
</article>
<section class="article__comments">
  <div id="disqus_thread">
    <noscript>Please enable JavaScript to view the <a href="//disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
  </div>
</section>
