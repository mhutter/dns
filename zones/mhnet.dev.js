D(
  'mhnet.dev',
  REG_PORKBUN,
  DnsProvider(DNS_PORKBUN),

  // Presets
  SENDGRID('em5597'),

  A('rhea', '116.202.233.38'),
  AAAA('rhea', '2a01:4f8:241:4c27::1'),
  A('*.rhea', '116.202.233.38'),
  AAAA('*.rhea', '2a01:4f8:241:4c27::1'),

  A('cool', '188.245.88.125'),
  AAAA('cool', '2a01:4f8:c012:33bd::1'),
  A('*.cool', '188.245.88.125'),
  AAAA('*.cool', '2a01:4f8:c012:33bd::1'),

  K3S('*'),

  END
);
