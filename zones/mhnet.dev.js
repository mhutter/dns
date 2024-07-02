D(
  'mhnet.dev',
  REG_PORKBUN,
  DnsProvider(DNS_PORKBUN),

  // Presets
  SENDGRID('em5597'),

  A('rhea', RHEA_A),
  AAAA('rhea', RHEA_AAAA),

  // k3s LB
  A('*', '49.12.21.173'),
  AAAA('*', '2a01:4f8:c01e:2b8::1'),

  END
);
