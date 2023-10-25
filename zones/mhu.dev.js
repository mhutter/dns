D('mhu.dev', REG_GANDI, DnsProvider(CLOUDFLARE),
  ALIAS('@', 'mhu-dev.pages.dev.', CF_PROXY_ON),
  CNAME('www', '@', CF_PROXY_ON),

  // K3s cluster
  A('*', '142.132.241.164', CF_PROXY_OFF),
  AAAA('*', '2a01:4f8:c01e:373::1', CF_PROXY_OFF),


  // Verifications
  TXT('@', 'keybase-site-verification=botR69lNhVxiuwNAtCVRefDHgZauZaH7XdFfTIlnZkA'),

  // Redirects
  CF_REDIRECT('www.mhu.dev/*', 'https://mhu.dev/$1')
);
