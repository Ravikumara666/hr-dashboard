// Define types for the auth system
interface User {
  email: string;
  token: string;
  role: string;
}

// Type for redirect function (commonly used in Next.js)
type RedirectFunction = (url: string) => void;

export function isAuthenticated(user: User | null | undefined): boolean {
  return !!user;
}

export function requireAuth(user: User | null | undefined, redirect: RedirectFunction): void {
  if (!isAuthenticated(user)) {
    redirect('/auth');
  }
}

export function mockLogin(email: string): User {
  return {
    email,
    token: 'mock-token-' + Date.now(),
    role: 'admin',
  };
}
