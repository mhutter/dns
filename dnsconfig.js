// Providers
var REG_NONE = NewRegistrar('none');
var DNS_CF = NewDnsProvider('cloudflare', {'manage_redirects': true});
DEFAULTS(
  DnsProvider(DNS_CF),
  CF_PROXY_DEFAULT_OFF
);

// Templates
var GANDI_MX = [
  MX('@', 10, 'spool.mail.gandi.net.'),
  MX('@', 50, 'fb.mail.gandi.net.'),
  TXT('@', 'v=spf1 include:_mailcust.gandi.net ?all'),
];

// IPs
var RHEA_A = '116.202.233.38';
var RHEA_AAAA = '2a01:4f8:241:4c27::1';

// Zones
require_glob('./zones/');
