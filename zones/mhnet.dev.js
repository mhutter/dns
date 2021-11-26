var HOME = '85.195.254.187';
var RASPUTIN_APPS = [
  'minio',
  'objects',
  'registry',
  'transmission',
  'vaultwarden',
];

D('mhnet.dev', REG_GANDI, DnsProvider(CLOUDFLARE),
  // Rasputin
  RASPUTIN_APPS.map(function(e) {
    return A(e, HOME, CF_PROXY_ON)
  }),

  // Sendgrid
  CNAME('em5597', 'u22452480.wl231.sendgrid.net.'),
  CNAME('s1._domainkey', 's1.domainkey.u22452480.wl231.sendgrid.net.'),
  CNAME('s2._domainkey', 's2.domainkey.u22452480.wl231.sendgrid.net.'),

  // Mail
  TXT('_dmarc', 'v=DMARC1; p=reject; sp=reject; adkim=s; aspf=s;'),
  TXT('*._domainkey', 'v=DKIM1; p='),
  TXT('@', 'v=spf1 -all'),

  // CAA
  CAA('@', 'issue', 'letsencrypt.org')
);
