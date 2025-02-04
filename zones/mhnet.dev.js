D(
  'mhnet.dev',
  REG_PORKBUN,
  DnsProvider(DNS_PORKBUN),

  // Presets
  SENDGRID('em5597'),

  RHEA('*'),
  CAA('@', 'issue', 'letsencrypt.org'),

  END
);
