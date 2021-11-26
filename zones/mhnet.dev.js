const MHU_IP = '168.119.153.20';

D('mhnet.dev', REG_GANDI, DnsProvider(CLOUDFLARE),
  A('@', '85.195.254.187'),
  CNAME('*', '@'),

  // Sendgrid
  CNAME('em5597', 'u22452480.wl231.sendgrid.net.'),
  CNAME('s1._domainkey', 's1.domainkey.u22452480.wl231.sendgrid.net.'),
  CNAME('s2._domainkey', 's2.domainkey.u22452480.wl231.sendgrid.net.'),

  // mhu0.mhnet.dev
  A('mhu0',       MHU_IP, CF_PROXY_ON),
  A('prometheus', MHU_IP, CF_PROXY_ON),
  A('registry',   MHU_IP, CF_PROXY_ON),
  A('s3',         MHU_IP, CF_PROXY_OFF),
  A('s3-console', MHU_IP, CF_PROXY_ON),

  CAA('@', 'issue', 'letsencrypt.org')
);
