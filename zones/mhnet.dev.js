D('mhnet.dev', REG_GANDI, DnsProvider(CLOUDFLARE),
  A('@', '85.195.254.187'),
  CNAME('*', '@'),

  // Sendgrid
  CNAME('s1._domainkey', 's1.domainkey.u22452480.wl231.sendgrid.net.'),
  CNAME('s2._domainkey', 's2.domainkey.u22452480.wl231.sendgrid.net.'),

  CAA('@', 'issue', 'letsencrypt.org')
);
