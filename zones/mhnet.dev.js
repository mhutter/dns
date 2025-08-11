D(
  'mhnet.dev',
  REG_PORKBUN,
  DnsProvider(DNS_PORKBUN),

  // Presets
  SENDGRID('em5597'),

  RHEA('*'),
  CAA('@', 'issue', 'letsencrypt.org'),

  A('bastion', '188.245.54.29'),
  A('nix-cache', '10.13.37.100'),

  END
);
