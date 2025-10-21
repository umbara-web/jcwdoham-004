// Simple authentication system (in production, use proper auth like NextAuth.js)

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user';
}

// Mock users (in production, this would be in a database)
const users: User[] = [
  {
    id: '1',
    email: 'admin@bloxs.com',
    name: 'Admin User',
    role: 'admin',
  },
  {
    id: '2',
    email: 'user@bloxs.com',
    name: 'Regular User',
    role: 'user',
  },
];

// Mock passwords (in production, use hashed passwords)
const passwords: Record<string, string> = {
  'admin@bloxs.com': 'admin123',
  'user@bloxs.com': 'user123',
};

export const authenticateUser = (
  email: string,
  password: string
): User | null => {
  const storedPassword = passwords[email];
  if (storedPassword && storedPassword === password) {
    return users.find((user) => user.email === email) || null;
  }
  return null;
};

export const getCurrentUser = (): User | null => {
  if (typeof window === 'undefined') return null;

  const userData = localStorage.getItem('currentUser');
  return userData ? JSON.parse(userData) : null;
};

export const loginUser = (user: User): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('currentUser', JSON.stringify(user));
  }
};

export const logoutUser = (): void => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('currentUser');
  }
};

export const isAuthenticated = (): boolean => {
  return getCurrentUser() !== null;
};

export const requireAuth = (): User => {
  const user = getCurrentUser();
  if (!user) {
    throw new Error('Authentication required');
  }
  return user;
};
