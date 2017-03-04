<!DOCTYPE html>
<html data-page="{{ page.type }}" data-layout="{{ page.layout }}" class="layout--{{ page.layout }} page--{{ page.type }}">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
  <meta http-equiv="X-UA-Compatible" content="chrome=1"/>
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
  <meta name="theme-color" content="#3dace3">
  <link rel="stylesheet" media="all" href="{{ url_for('vendors.css') }}">
  <link rel="stylesheet" media="all" href="{{ url_for('main.css') }}">
  <link rel="canonical" href="{{ url }}">
  <title>{% if page.title %}{{ page.title }} | {% endif %}{{ config.title }}</title>
</head>
<body>
  {%- block body %}
  {%- endblock %}
  <script type="text/javascript" src="{{ url_for('vendors.js') }}"></script>
  <script type="text/javascript" src="{{ url_for('main.js') }}"></script>
</body>
</html>
