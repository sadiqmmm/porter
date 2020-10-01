import axios from 'axios';
import { baseApi } from './baseApi';

/**
 * Generic api call format
 * @param {string} token - Bearer token.
 * @param {Object} params - Query params.
 * @param {Object} pathParams - Path params.
 * @param {(err: Object, res: Object) => void} callback - Callback function.
 */

const registerUser = baseApi<{ 
  email: string, 
  password: string
}>('POST', '/api/register');

const logInUser = baseApi<{
  email: string,
  password: string
}>('POST', '/api/login');

const logOutUser = baseApi<{}>('GET', '/api/logout');

const getUser = baseApi<{}, { id: number }>('GET', pathParams => {
  return `/api/users/${pathParams.id}`;
});

const updateUser = baseApi<{
  rawKubeconfig?: string,
  allowedClusters?: string[]
}, { id: number }>('PUT', pathParams => {
  return `/api/users/${pathParams.id}`;
});

const getClusters = baseApi<{}, { id: number }>('GET', pathParams => {
  return `/api/users/${pathParams.id}/clusters`;
});

const getAllClusters = baseApi<{}, { id: number }>('GET', pathParams => {
  return `/api/users/${pathParams.id}/clusters/all`;
});

// Bundle export to allow default api import (api.<method> is more readable)
export default {
  registerUser,
  logInUser,
  logOutUser,
  getUser,
  updateUser,
  getClusters,
  getAllClusters
}