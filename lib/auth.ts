export function isAuthenticated(user) {
  return !!user;
}

export function requireAuth(user, redirect) {
  if (!isAuthenticated(user)) {
    redirect('/auth');
  }
}

export function mockLogin(email: string) {
  return {
    email,
    token: 'mock-token-' + Date.now(),
    role: 'admin',
  };
}