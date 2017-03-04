{% extends "_base/html5.swig" %}
{% block body %}
  <div id="slideout-menu">
    {%- include "_partials/slideout.swig" %}
  </div>
  <div id="slideout-panel" class="main-container">
    {%- include "_partials/header.swig" %}
    <div class="main row small-collapse" layout="row stretch-stretch">
      <div class="main__inner">
        {{ body }}
      </div>
    </div>
    {%- include "_partials/footer.swig" %}
  </div>
{% endblock %}
