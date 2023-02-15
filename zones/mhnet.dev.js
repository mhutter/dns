var HOMEv6 = '2a02:168:81cd::ea02:aff2:567d:9bd9';
var RASPUTIN_APPS = [
  'minio',
  'objects',
  'registry',
  'transmission',
  'vault',
];

D('mhnet.dev', REG_GANDI, DnsProvider(CLOUDFLARE),
  // Rasputin
  RASPUTIN_APPS.map(function (e) {
    return AAAA(e, HOMEv6, CF_PROXY_ON)
  }),

  // Vaultwarden
  CNAME('vaultwarden', 'cname.cloudscale-lpg-2.appuio.cloud.', CF_PROXY_ON),

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
