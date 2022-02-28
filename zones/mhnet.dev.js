var HOME = '85.195.254.110';
var RASPUTIN_APPS = [
  'minio',
  'objects',
  'registry',
  'transmission',
  'vaultwarden',
];
var LITERATE_IP = '78.46.122.145';

D('mhnet.dev', REG_GANDI, DnsProvider(CLOUDFLARE),
  // Rasputin
  RASPUTIN_APPS.map(function(e) {
    return A(e, HOME, CF_PROXY_ON)
  }),

  // Literate
  A('literate', LITERATE_IP),
  A('*.literate', LITERATE_IP),

  // Lean
  A('lean', '142.132.236.208'),
  A('*.lean', '142.132.236.208'),
  AAAA('lean', '2a01:4f8:c010:4bf9::1'),
  AAAA('*.lean', '2a01:4f8:c010:4bf9::1'),

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
