// Providers
var REG_GANDI = NewRegistrar('gandi', 'GANDI_V5');
var CLOUDFLARE = NewDnsProvider('cloudflare', 'CLOUDFLAREAPI',
  { 'manage_redirects': true });

D('the-voice.cc', REG_GANDI, DnsProvider(CLOUDFLARE),
  ALIAS('@', 'the-voice.pages.dev.', CF_PROXY_ON),
  CNAME('www', 'the-voice.cc.', CF_PROXY_ON),

  // Mail setup
  CNAME('autoconfig', 'maildiscovery.cyon.ch.'),
  MX('@', 0, 's037.cyon.net.'),
  TXT('default._domainkey', 'v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwn0X3QDbEG4mvj/LzoE2v5jRyzl55eu7o3jafPVqDizHI/UD7zyml/LFzoClKW43nHfmb8J6g/aiyYM7qtDGAqMGful4zkZmDHx8Gxuk3A/NCgEl49XO3ZzHSFUFHSpwwU2pt2SW3/9l1SZMo+cFlP4fE1hDvEZA9QcLbDw0lfm9WgcWP8e8nQTxr+Icw8+rzkXOQkvZVMmJqWdppg1EdlJ4HNzjm7kErhJv0KgOHgOsiczghcRBNq9t2o2NiTIizhZyoRUrvuWnHBb6+gyW+mMXNuy/KkSx4UvBy9r1YyX6Cl+6tgacH7lZHhyivW3f6T3uoqsHhW4vHnoRCeRwbwIDAQAB;'),
  TXT('@', 'v=spf1 include:spf.protection.cyon.net -all'),

  // Redirects
  CF_REDIRECT('www.the-voice.cc/*', 'https://the-voice.cc/$1')
);
