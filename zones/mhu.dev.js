D(
  'mhu.dev',
  REG_NONE,
  DnsProvider(DNS_CLOUDFLARE),

  ALIAS('@', 'mhu-dev.pages.dev.', CF_PROXY_ON),
  CNAME('www', '@', CF_PROXY_ON),

  // Verifications
  TXT(
    '@',
    'keybase-site-verification=botR69lNhVxiuwNAtCVRefDHgZauZaH7XdFfTIlnZkA'
  ),

  // Redirects
  CF_REDIRECT('www.mhu.dev/*', 'https://mhu.dev/$1'),

  END
);
