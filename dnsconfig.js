/* global NewRegistrar, NewDnsProvider, DnsProvider, D, A, AAAA, CNAME, SRV, MX,
 NS, TXT */

// Registras, DNS providers
var REG_NONE = NewRegistrar('none', 'NONE')
var GCLOUD = NewDnsProvider('gcloud', 'GCLOUD')

// Defaults
var CYON_IP = '149.126.4.46'
var CYON = [
  A('@', CYON_IP),
  MX('@', 0, '@'),
  TXT('@', 'v=spf1 +a +mx +ip4:194.126.200.0/24 +ip4:149.126.0.0/21 -all'),
  SRV('_autodiscover._tcp', 0, 0, 443, 'maildiscovery.cyon.ch.'),
  CNAME('autoconfig', 'maildiscovery.cyon.ch.'),
  A('mail', CYON_IP),
  CNAME('www', '@')
]

// Custom Domains
D('hutter.io', REG_NONE, DnsProvider(GCLOUD),
  CYON,

  CNAME('appuio', 'cname.appuioapp.ch.'),
  A('s', CYON_IP),
  NS('nf', 'dns1.p07.nsone.net.'),
  NS('nf', 'dns2.p07.nsone.net.'),
  NS('nf', 'dns3.p07.nsone.net.'),
  NS('nf', 'dns4.p07.nsone.net.')
)

D('izibizi.ch', REG_NONE, DnsProvider(GCLOUD),
  A('@', CYON_IP),
  CNAME('www', 'web.jimdosite.com.'),
  MX('@', 0, 'mail.izibizi.ch.'),
  TXT('@', 'v=spf1 +a +mx +ip4:194.126.200.0/24 +ip4:149.126.0.0/21 -all'),
  SRV('_autodiscover._tcp', 0, 0, 443, 'maildiscovery.cyon.ch.'),
  CNAME('autoconfig', 'maildiscovery.cyon.ch.'),
  A('mail', CYON_IP),
  A('alt', CYON_IP),
  A('s', CYON_IP),
  TXT('@', 'google-site-verification=eYM9ojHKqusz8D0WER2qcnMnqtuRTKg_J-9ePcDy_f4')
)

D('mhu.dev', REG_NONE, DnsProvider(GCLOUD),
  A('*.app', '159.69.187.33'),
  A('*.app', '159.69.187.25'),
  A('*.app', '159.69.187.136')
)

// Domains hosted at Cyon without customizations
var CYON_DOMAINS = [
  'grosses-guggenfest.ch',
  'guggenfest.ch',
  'manuel-hutter.ch',
  'mhutter.ch',
  'mhutter.net',
  'schlagdensenn.ch',
  'the-voice.cc',
  'wona.ch'
]

for (d in CYON_DOMAINS) {
  D(CYON_DOMAINS[d], REG_NONE, DnsProvider(GCLOUD), CYON)
}


// Domains not hosted at all
var EMPTY_DOMAINS = [
  'dekoriert.ch',
  'sauknapp-party.ch'
]

for (d in EMPTY_DOMAINS) {
  D(EMPTY_DOMAINS[d], REG_NONE, DnsProvider(GCLOUD))
}

var GCLOUD_DOMAINS = [
  'miraku.io',
  'miraku.me',
  'mhutter.dev'
]
for (d in GCLOUD_DOMAINS) {
  D(GCLOUD_DOMAINS[d], REG_NONE, DnsProvider(GCLOUD))
}
