// Providers
var REG_GANDI = NewRegistrar('gandi', 'GANDI_V5');
var CLOUDFLARE = NewDnsProvider('cloudflare', 'CLOUDFLAREAPI',
  { 'manage_redirects': true });

D('the-voice.cc', REG_GANDI, DnsProvider(CLOUDFLARE),
  ALIAS('@', 'the-voice.pages.dev.', CF_PROXY_ON),
  CNAME('www', 'the-voice.cc.', CF_PROXY_ON),

  // Mail setup
  MX('@', 10, 'spool.mail.gandi.net.'),
  MX('@', 50, 'fb.mail.gandi.net.'),
  TXT('@', 'v=spf1 include:_mailcust.gandi.net ?all'),

  // Redirects
  CF_REDIRECT('www.the-voice.cc/*', 'https://the-voice.cc/$1')
);
