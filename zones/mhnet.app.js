D(
  'mhnet.app',
  REG_PORKBUN,
  DnsProvider(DNS_PORKBUN),

  // Presets
  SENDGRID('em6609'),

  RHEA('*'),
  CAA('@', 'issue', 'letsencrypt.org'),

  // Resend
  MX('send', 10, 'feedback-smtp.us-east-1.amazonses.com.'),
  TXT('send', 'v=spf1 include:amazonses.com ~all'),
  TXT(
    'resend._domainkey',
    'p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCkAXF9G8bXB3g3QOvcrC2X7/P3Q/3L/a52o1lF1mvo+euuOVsOrVGwnMO3n7lIjntt2qXClJK2SOS/X3gOj3PlzZtOPztP2eA5YH8P1V0xme4V52tzLPqVh4aCvoZB/JuPLq3njPo6u4i1/n60sEBo8tyOdch62jnwgv5rbWiRIQIDAQAB'
  ),
  TXT('_dmarc', 'v=DMARC1; p=none;'),

  END
);
