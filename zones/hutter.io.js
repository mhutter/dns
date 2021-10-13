D('hutter.io', REG_GANDI, DnsProvider(CLOUDFLARE),
  ALIAS('@', 'mhu-dev.pages.dev.', CF_PROXY_ON),
  CNAME('www', '@', CF_PROXY_ON),

  // Mail
  FASTMAIL_MX,

  // Redirects
  CF_REDIRECT('hutter.io/*', 'https://mhu.dev/$1'),
  CF_REDIRECT('www.hutter.io/*', 'https://mhu.dev/$1')
);
