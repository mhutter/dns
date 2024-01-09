D('hutter.io', REG_NONE,
  ALIAS('@', 'mhu-dev.pages.dev.', CF_PROXY_ON),
  CNAME('www', '@', CF_PROXY_ON),

  // Mail
  MX('@', 10, 'in1-smtp.messagingengine.com.'),
  MX('@', 20, 'in2-smtp.messagingengine.com.'),
  CNAME('fm1._domainkey', 'fm1.hutter.io.dkim.fmhosted.com.'),
  CNAME('fm2._domainkey', 'fm2.hutter.io.dkim.fmhosted.com.'),
  CNAME('fm3._domainkey', 'fm3.hutter.io.dkim.fmhosted.com.'),
  TXT('@', 'v=spf1 include:spf.messagingengine.com ?all'),

  // Redirects
  CF_REDIRECT('hutter.io/*', 'https://mhu.dev/$1'),
  CF_REDIRECT('www.hutter.io/*', 'https://mhu.dev/$1')
);
