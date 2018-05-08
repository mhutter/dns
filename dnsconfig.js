/* global NewRegistrar, NewDnsProvider, DnsProvider, D, A, AAAA, CNAME */

var REG_NONE = NewRegistrar('none', 'NONE')
var GCLOUD = NewDnsProvider('gcloud', 'GCLOUD')

D('mhnet.ch', REG_NONE, DnsProvider(GCLOUD),
  {'ns_ttl': '21600'},
  CNAME('shop', '0ac90246-463a-4625-a0eb-9a1f417f8b40-swiss21-commerce-int.app.abasky.net.')
)
