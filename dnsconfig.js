/* global NewRegistrar, NewDnsProvider, DnsProvider, D, A, AAAA */

var REG_NONE = NewRegistrar('none', 'NONE')
var GCLOUD = NewDnsProvider('gcloud', 'GCLOUD')

D('mhnet.ch', REG_NONE, DnsProvider(GCLOUD),
  {'ns_ttl': '21600'},
     A('master0', '94.130.184.104'),
  AAAA('master0', '2a01:4f8:1c0c:445f::'),
     A('node0', '195.201.21.131'),
  AAAA('node0', '2a01:4f8:1c0c:4d8e::'),
     A('node1', '195.201.21.132'),
  AAAA('node1', '2a01:4f8:1c0c:4d8f::')
)
