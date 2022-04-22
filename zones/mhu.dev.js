D('mhu.dev', REG_GANDI, DnsProvider(CLOUDFLARE),
  ALIAS('@', 'mhu-dev.pages.dev.', CF_PROXY_ON),
  CNAME('www', '@', CF_PROXY_ON),

  // Verifications
  TXT('@', 'brave-ledger-verification=fb5ecd721d4136a9297c556f54d63a86efacc56400454065f25050c3a647558d'),
  TXT('@', 'keybase-site-verification=botR69lNhVxiuwNAtCVRefDHgZauZaH7XdFfTIlnZkA'),

  // Redirects
  CF_REDIRECT('www.mhu.dev/*', 'https://mhu.dev/$1')
);
