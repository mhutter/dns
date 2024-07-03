D(
  'mhnet.app',
  REG_PORKBUN,
  DnsProvider(DNS_PORKBUN),

  // Presets
  SENDGRID('em6609'),

  K3S('pw'),
  A('*', RHEA_A),
  AAAA('*', RHEA_AAAA),

  END
);
