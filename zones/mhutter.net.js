D('mhutter.net', REG_GANDI, DnsProvider(CLOUDFLARE),
  ALIAS('@', 'mhu-dev.pages.dev.', CF_PROXY_ON),
  CNAME('www', '@', CF_PROXY_ON),

  // Mail
  FASTMAIL_MX,

  // Redirects
  CF_REDIRECT('mhutter.net/*', 'https://mhu.dev/$1'),
  CF_REDIRECT('www.mhutter.net/*', 'https://mhu.dev/$1')
);
