D('mhnet.dev', REG_GANDI, DnsProvider(CLOUDFLARE),
  A('@', '85.195.254.187'),
  CNAME('*', '@'),

  // Sendgrid
  CNAME('em5597', 'u22452480.wl231.sendgrid.net.'),
  CNAME('s1._domainkey', 's1.domainkey.u22452480.wl231.sendgrid.net.'),
  CNAME('s2._domainkey', 's2.domainkey.u22452480.wl231.sendgrid.net.'),

  // mhu0.mhnet.dev
  A('mhu0', '168.119.153.20', CF_PROXY_ON),
  CNAME('prometheus', 'mhu0.mhnet.dev.', CF_PROXY_ON),
  CNAME('registry', 'mhu0.mhnet.dev.', CF_PROXY_ON),
  CNAME('s3', 'mhu0.mhnet.dev.', CF_PROXY_ON),
  CNAME('s3-console', 'mhu0.mhnet.dev.', CF_PROXY_ON),

  CAA('@', 'issue', 'letsencrypt.org')
);
