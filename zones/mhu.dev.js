D('mhu.dev', REG_GANDI, DnsProvider(CLOUDFLARE),
  ALIAS('@', 'mhu-dev.pages.dev.', CF_PROXY_ON),
  CNAME('www', '@', CF_PROXY_ON),

  TXT('@', 'keybase-site-verification=botR69lNhVxiuwNAtCVRefDHgZauZaH7XdFfTIlnZkA'),

  // Redirects
  CF_REDIRECT('www.mhu.dev/*', 'https://mhu.dev/$1')
);
