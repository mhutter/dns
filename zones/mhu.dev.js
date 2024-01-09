D('mhu.dev', REG_NONE,
  ALIAS('@', 'mhu-dev.pages.dev.', CF_PROXY_ON),
  CNAME('www', '@', CF_PROXY_ON),

  // K3s cluster
  A('*', '142.132.241.164'),
  AAAA('*', '2a01:4f8:c01e:373::1'),


  // Verifications
  TXT('@', 'keybase-site-verification=botR69lNhVxiuwNAtCVRefDHgZauZaH7XdFfTIlnZkA'),

  // Redirects
  CF_REDIRECT('www.mhu.dev/*', 'https://mhu.dev/$1')
);
