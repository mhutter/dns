/* global NewRegistrar, NewDnsProvider, DnsProvider, D, A, AAAA */

var REG_NONE = NewRegistrar('none', 'NONE')
var GCLOUD = NewDnsProvider('gcloud', 'GCLOUD')

D('mhnet.ch', REG_NONE, DnsProvider(GCLOUD),
  {'ns_ttl': '21600'},
     A('controller-0', '88.99.12.218'),
  AAAA('controller-0', '2a01:4f8:1c17:5197::1'),
     A('controller-1', '78.47.89.155'),
  AAAA('controller-1', '2a01:4f8:1c17:46e4::1'),
     A('controller-2', '78.47.109.131'),
  AAAA('controller-2', '2a01:4f8:1c17:4ab1::1'),
     A('worker-0', '88.99.12.227'),
  AAAA('worker-0', '2a01:4f8:1c17:4cfd::1'),
     A('worker-1', '78.47.89.156'),
  AAAA('worker-1', '2a01:4f8:1c17:48aa::1'),
     A('worker-2', '78.47.109.129'),
  AAAA('worker-2', '2a01:4f8:1c17:4987::1')
)
