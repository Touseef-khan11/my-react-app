/**
 * CENTRALIZED API SERVICE
 * All API calls in ONE file
 */

const API_BASE_URL = 'https://careapi.in-sourceit.com/api/v1';

const getAuthToken = () => localStorage.getItem('auth_token');
const setAuthToken = (token) => localStorage.setItem('auth_token', token);
const removeAuthToken = () => localStorage.removeItem('auth_token');

const createHeaders = (includeAuth = true, isFormData = false) => {
  const headers = {};
  if (!isFormData) {
    headers['Content-Type'] = 'application/json';
    headers['Accept'] = 'application/json';
  }
  if (includeAuth) {
    const token = getAuthToken();
    if (token) headers['Authorization'] = `Bearer ${token}`;
  }
  return headers;
};

const handleResponse = async (response) => {
  let data;
  try {
    data = await response.json();
  } catch (error) {
    data = {};
  }

  if (!response.ok) {
    throw {
      status: response.status,
      message: data.message || 'An error occurred',
      errors: data.errors || {}
    };
  }
  return data;
};

const makeRequest = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, options);
    return await handleResponse(response);
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

// AUTH APIs
export const authAPI = {
  register: async (userData) => {
    const data = await makeRequest('/auth/register', {
      method: 'POST',
      headers: createHeaders(false),
      body: JSON.stringify(userData)
    });
    if (data.token) setAuthToken(data.token);
    return data;
  },

  login: async (credentials) => {
    const data = await makeRequest('/auth/login', {
      method: 'POST',
      headers: createHeaders(false),
      body: JSON.stringify(credentials)
    });
    if (data.token) setAuthToken(data.token);
    return data;
  },

  getCurrentUser: async () => {
    return await makeRequest('/profile', {
      method: 'GET',
      headers: createHeaders(true)
    });
  },

  logout: async () => {
    try {
      await makeRequest('/auth/logout', {
        method: 'POST',
        headers: createHeaders(true)
      });
    } finally {
      removeAuthToken();
    }
  },

  logoutAll: async () => {
    try {
      await makeRequest('/auth/logout-all', {
        method: 'POST',
        headers: createHeaders(true)
      });
    } finally {
      removeAuthToken();
    }
  },

  refreshToken: async () => {
    const data = await makeRequest('/auth/refresh', {
      method: 'POST',
      headers: createHeaders(true)
    });
    if (data.token) setAuthToken(data.token);
    return data;
  }
};

// PROFILE APIs
export const profileAPI = {
  getProfile: async () => {
    return await makeRequest('/profile', {
      method: 'GET',
      headers: createHeaders(true)
    });
  },

  updateProfile: async (profileData) => {
    return await makeRequest('/profile', {
      method: 'PUT',
      headers: createHeaders(true),
      body: JSON.stringify(profileData)
    });
  },

  uploadPhoto: async (file) => {
    const formData = new FormData();
    formData.append('photo', file);
    return await makeRequest('/profile/photo', {
      method: 'POST',
      headers: createHeaders(true, true),
      body: formData
    });
  },

  deletePhoto: async () => {
    return await makeRequest('/profile/photo', {
      method: 'DELETE',
      headers: createHeaders(true)
    });
  },

  uploadDocument: async (file, type, description) => {
    const formData = new FormData();
    formData.append('document', file);
    formData.append('type', type);
    formData.append('description', description);
    return await makeRequest('/profile/documents', {
      method: 'POST',
      headers: createHeaders(true, true),
      body: formData
    });
  },

  getDocuments: async () => {
    return await makeRequest('/profile/documents', {
      method: 'GET',
      headers: createHeaders(true)
    });
  },

  deleteDocument: async (documentId) => {
    return await makeRequest(`/profile/documents/${documentId}`, {
      method: 'DELETE',
      headers: createHeaders(true)
    });
  }
};

// CATEGORIES APIs
export const categoriesAPI = {
  getAll: async () => {
    return await makeRequest('/categories', {
      method: 'GET',
      headers: createHeaders(false)
    });
  },

  getBySlug: async (slug) => {
    return await makeRequest(`/categories/${slug}`, {
      method: 'GET',
      headers: createHeaders(false)
    });
  }
};

// LISTINGS APIs
export const listingsAPI = {
  getAll: async (page = 1, perPage = 15) => {
    return await makeRequest(`/listings?page=${page}&per_page=${perPage}`, {
      method: 'GET',
      headers: createHeaders(false)
    });
  },

  getFeatured: async () => {
    return await makeRequest('/listings/featured', {
      method: 'GET',
      headers: createHeaders(false)
    });
  },

  getDetails: async (id) => {
    return await makeRequest(`/listings/${id}`, {
      method: 'GET',
      headers: createHeaders(false)
    });
  }
};

export default { authAPI, profileAPI, categoriesAPI, listingsAPI };
