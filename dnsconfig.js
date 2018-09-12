/* global NewRegistrar, NewDnsProvider, DnsProvider, D, A, AAAA, CNAME, SRV, MX,
  TXT */

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
  CNAME('mail', '@'),
  CNAME('www', '@')
]

// Custom Domains
D('hutter.io', REG_NONE, DnsProvider(GCLOUD),
  CYON,
  CNAME('appuio', 'cname.appuioapp.ch.'),
  CNAME('emaily', 'emaily.hutter.io.herokudns.com.'),
  A('*.app', '159.69.100.203'),
  A('s', CYON_IP)
)

D('izibizi.ch', REG_NONE, DnsProvider(GCLOUD),
  A('@', CYON_IP),
  CNAME('www', 'web.jimdosite.com.'),
  MX('@', 0, 'mail.izibizi.ch.'),
  TXT('@', 'v=spf1 +a +mx +ip4:194.126.200.0/24 +ip4:149.126.0.0/21 -all'),
  SRV('_autodiscover._tcp', 0, 0, 443, 'maildiscovery.cyon.ch.'),
  CNAME('autoconfig', 'maildiscovery.cyon.ch.'),
  CNAME('mail', '@'),
  A('alt', CYON_IP),
  A('s', CYON_IP),
  TXT('@', 'google-site-verification=eYM9ojHKqusz8D0WER2qcnMnqtuRTKg_J-9ePcDy_f4')
)

D('mhnet.ch', REG_NONE, DnsProvider(GCLOUD),
     A('mc0', '159.69.119.114'),
  AAAA('mc0', '2a01:4f8:c010:774::1'),

     A('master0.os', '159.69.124.44'),
  AAAA('master0.os', '2a01:4f8:c010:c2e::1'),
     A('master1.os', '159.69.124.50'),
  AAAA('master1.os', '2a01:4f8:c010:c3a::1'),
     A('master2.os', '159.69.124.101'),
  AAAA('master2.os', '2a01:4f8:c010:c62::1'),
     A('node0.os', '159.69.124.155'),
  AAAA('node0.os', '2a01:4f8:c010:c7c::1'),
     A('node1.os', '159.69.124.184'),
  AAAA('node1.os', '2a01:4f8:c010:c80::1'),
     A('node2.os', '159.69.124.239'),
  AAAA('node2.os', '2a01:4f8:c010:ce9::1'),

     A('console', '159.69.100.202')
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
  'mhnet.me',
  'sauknapp-party.ch'
]

for (d in EMPTY_DOMAINS) {
  D(EMPTY_DOMAINS[d], REG_NONE, DnsProvider(GCLOUD))
}

D('miraku.io', REG_NONE, DnsProvider(GCLOUD))
D('miraku.me', REG_NONE, DnsProvider(GCLOUD))
