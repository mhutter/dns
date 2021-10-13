D('the-voice.cc', REG_GANDI, DnsProvider(CLOUDFLARE),
  ALIAS('@', 'the-voice.pages.dev.', CF_PROXY_ON),
  CNAME('www', '@', CF_PROXY_ON),

  // Mail setup
  GANDI_MX,

  // Redirects
  CF_REDIRECT('www.the-voice.cc/*', 'https://the-voice.cc/$1')
);
