// src/store/authStore.js

import { create } from 'zustand';

// Lecture initiale depuis localStorage
const storedUser = localStorage.getItem('user');
const storedToken = localStorage.getItem('token');

export const useAuthStore = create((set) => ({
  user: storedUser ? JSON.parse(storedUser) : null,
  token: storedToken || null,
  isAuthenticated: !!storedToken,
  loading: false,

  setUser: (user) => {
    localStorage.setItem('user', JSON.stringify(user));
    set({ user, isAuthenticated: true });
  },

  setToken: (token) => {
    localStorage.setItem('token', token);
    set({ token });
  },

  setLoading: (loading) => set({ loading }),

  logout: () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    set({
      user: null,
      token: null,
      isAuthenticated: false,
      loading: false,
    });
  },
}));
