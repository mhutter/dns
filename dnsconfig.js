// Registrars
var REG_NONE = NewRegistrar('none');
var REG_PORKBUN = NewRegistrar('porkbun');

// DNS providers
var DNS_CLOUDFLARE = NewDnsProvider('cloudflare', { manage_redirects: true });
var DNS_PORKBUN = NewDnsProvider('porkbun');

// Helpers
function K3S(host) {
  return [A(host, '49.12.21.173'), AAAA(host, '2a01:4f8:c01e:2b8::1')];
}
function RHEA(host) {
  return [A(host, '116.202.233.38'), AAAA(host, '2a01:4f8:241:4c27::1')];
}

function PROTONMAIL(verification, domainkey) {
  return [
    // Verification
    TXT('@', 'protonmail-verification=' + verification),

    // MX records
    MX('@', 10, 'mail.protonmail.ch.'),
    MX('@', 20, 'mailsec.protonmail.ch.'),

    // SPF
    TXT('@', 'v=spf1 include:_spf.protonmail.ch ~all'),

    // DKIM
    CNAME(
      'protonmail._domainkey',
      'protonmail.domainkey.' + domainkey + '.domains.proton.ch.'
    ),
    CNAME(
      'protonmail2._domainkey',
      'protonmail2.domainkey.' + domainkey + '.domains.proton.ch.'
    ),
    CNAME(
      'protonmail3._domainkey',
      'protonmail3.domainkey.' + domainkey + '.domains.proton.ch.'
    ),

    // DMARC
    TXT('_dmarc', 'v=DMARC1; p=quarantine')
  ];
}

function SENDGRID(domain) {
  return [
    // Verification
    CNAME(domain, 'u22452480.wl231.sendgrid.net.'),

    // SPF
    TXT('@', 'v=spf1 include:sendgrid.net -all'),

    // DKIM
    CNAME('s1._domainkey', 's1.domainkey.u22452480.wl231.sendgrid.net.'),
    CNAME('s2._domainkey', 's2.domainkey.u22452480.wl231.sendgrid.net.'),

    // DMARC
    TXT('_dmarc', 'v=DMARC1; p=quarantine;')
  ];
}

require_glob('./zones/');
