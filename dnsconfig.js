// Providers
var REG_GANDI = NewRegistrar('gandi', 'GANDI_V5');
var CLOUDFLARE = NewDnsProvider('cloudflare', 'CLOUDFLAREAPI',
  { 'manage_redirects': true });

// Templates
var GANDI_MX = [
  MX('@', 10, 'spool.mail.gandi.net.'),
  MX('@', 50, 'fb.mail.gandi.net.'),
  TXT('@', 'v=spf1 include:_mailcust.gandi.net ?all'),
];

var FASTMAIL_MX = [
  MX('@', 10, 'in1-smtp.messagingengine.com.'),
  MX('@', 20, 'in2-smtp.messagingengine.com.'),
  CNAME('fm1._domainkey', 'fm1.hutter.io.dkim.fmhosted.com.'),
  CNAME('fm2._domainkey', 'fm2.hutter.io.dkim.fmhosted.com.'),
  CNAME('fm3._domainkey', 'fm3.hutter.io.dkim.fmhosted.com.'),
  TXT('@', 'v=spf1 include:spf.messagingengine.com ?all'),
];

// Zones
require_glob('./zones/');
