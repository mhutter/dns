D('izibizi.ch', REG_NONE,
  ALIAS('@', 'web.jimdosite.com.', CF_PROXY_ON),
  CNAME('www', 'web.jimdosite.com.'),

  // Mail setup
  GANDI_MX,

  // Redirects
  CF_REDIRECT('izibizi.ch/*', 'https://www.izibizi.ch/$1')
);
