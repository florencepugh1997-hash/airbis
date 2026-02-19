// Hardcoded admin credentials for demo purposes
const ADMIN_CREDENTIALS = {
  email: 'jerry123@gmail.com',
  password: 'jerry247',
};

export function validateAdminCredentials(email: string, password: string): boolean {
  return email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password;
}

export function getAdminCredentialsForDemo() {
  return ADMIN_CREDENTIALS;
}
