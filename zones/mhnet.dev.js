D(
  'mhnet.dev',
  REG_PORKBUN,
  DnsProvider(DNS_PORKBUN),

  // EMail
  MX('@', 10, 'fwd1.porkbun.com.'),
  MX('@', 20, 'fwd2.porkbun.com.'),
  TXT('@', 'v=spf1 include:_spf.porkbun.com -all'),

  RHEA('*'),
  CAA('@', 'issue', 'letsencrypt.org'),

  A('bastion', '188.245.54.29'),
  A('nix-cache', '10.13.37.100'),

  END
);
