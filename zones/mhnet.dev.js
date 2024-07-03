D(
  'mhnet.dev',
  REG_PORKBUN,
  DnsProvider(DNS_PORKBUN),

  // Presets
  SENDGRID('em5597'),

  A('rhea', RHEA_A),
  AAAA('rhea', RHEA_AAAA),

  // k3s LB
  K3S('*'),

  END
);
