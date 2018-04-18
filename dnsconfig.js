/* global NewRegistrar, NewDnsProvider, DnsProvider, D, A, AAAA */

var REG_NONE = NewRegistrar('none', 'NONE')
var GCLOUD = NewDnsProvider('gcloud', 'GCLOUD')

D('mhnet.ch', REG_NONE, DnsProvider(GCLOUD),
  {'ns_ttl': '21600'}
)
