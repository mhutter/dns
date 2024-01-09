// Providers
var REG_GANDI = NewRegistrar('gandi');
var CLOUDFLARE = NewDnsProvider('cloudflare', { 'manage_redirects': true });

// Templates
var GANDI_MX = [
  MX('@', 10, 'spool.mail.gandi.net.'),
  MX('@', 50, 'fb.mail.gandi.net.'),
  TXT('@', 'v=spf1 include:_mailcust.gandi.net ?all'),
];

// Zones
require_glob('./zones/');
