D('mhnet.app', REG_NONE,
  A('*', RHEA_A),
  AAAA('*', RHEA_AAAA),

  // Sendgrid
  CNAME('em6609', 'u22452480.wl231.sendgrid.net.'),
  CNAME('s1._domainkey', 's1.domainkey.u22452480.wl231.sendgrid.net.'),
  CNAME('s2._domainkey', 's2.domainkey.u22452480.wl231.sendgrid.net.'),
  TXT('_dmarc', 'v=DMARC1; p=none;'),

  // Mailjet
  TXT('mailjet._6a0947b7', '6a0947b7fb1830aea28a9c96352a1e5b'),

  // CAA
  CAA('@', 'issue', 'letsencrypt.org')
);
