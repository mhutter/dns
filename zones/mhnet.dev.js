D('mhnet.dev', REG_NONE,
  // K3s cluster
  A('*', '142.132.241.164'),
  AAAA('*', '2a01:4f8:c01e:373::1'),

  // Rhea
  A('rhea', RHEA_A),
  AAAA('rhea', RHEA_AAAA),

  // Vaultwarden
  CNAME('vaultwarden', 'cname.cloudscale-lpg-2.appuio.cloud.'),

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
