D(
  'the-voice.cc',
  REG_NONE,
  DnsProvider(DNS_CLOUDFLARE),

  ALIAS('@', 'the-voice.pages.dev.', CF_PROXY_ON),
  CNAME('www', '@', CF_PROXY_ON),

  // Mail setup
  MX('@', 1, 'fwd1.porkbun.com.'),
  MX('@', 1, 'fwd2.porkbun.com.'),
  TXT('@', 'v=spf1 include:_spf.porkbun.com ~all'),

  // Redirects
  CF_REDIRECT('www.the-voice.cc/*', 'https://the-voice.cc/$1')
);
