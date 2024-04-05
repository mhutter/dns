D('mhutter.net', REG_NONE, DnsProvider(DNS_PB),
  // Mail
  MX('@', 10, 'in1-smtp.messagingengine.com.'),
  MX('@', 20, 'in2-smtp.messagingengine.com.'),
  CNAME('fm1._domainkey', 'fm1.mhutter.net.dkim.fmhosted.com.'),
  CNAME('fm2._domainkey', 'fm2.mhutter.net.dkim.fmhosted.com.'),
  CNAME('fm3._domainkey', 'fm3.mhutter.net.dkim.fmhosted.com.'),
  TXT('@', 'v=spf1 include:spf.messagingengine.com ?all')
);
