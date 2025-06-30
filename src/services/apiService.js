// src/api/apiService.js

import BASE_URL from "./api";

// Service générique avec fetch
export const apiService = {
  get: async (route, token) => {
    const res = await fetch(`${BASE_URL}${route}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
      },
    });
    return res.json();
  },

  post: async (route, data, token) => {
    const res = await fetch(`${BASE_URL}${route}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      body: JSON.stringify(data),
    });

    console.log(res);
    return res.json();
  },

  put: async (route, data, token) => {
    const res = await fetch(`${BASE_URL}${route}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      body: JSON.stringify(data),
    });
    return res.json();
  },

  del: async (route, token) => {
    const res = await fetch(`${BASE_URL}${route}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
      },
    });
    return res.json();
  },
};
