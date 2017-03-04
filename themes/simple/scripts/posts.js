hexo.extend.helper.register('getRecentNews', function() {
  return hexo.locals.get('posts').sort('date', -1).limit(5);
});

hexo.extend.helper.register('getHelps', function() {
  return hexo.locals.get('pages').find({ type: 'help' }).sort('sticky', 1).sort('mirror_name', 1);
});
