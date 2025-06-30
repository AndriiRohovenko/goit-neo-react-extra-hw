import { apiClient } from './apiClient';

export const getUserInfo = async () => {
  const { data } = await apiClient({
    url: `/current`,
    method: 'get',
  });
  return data;
};

export const login = async body => {
  const { data } = await apiClient({
    url: `users/login`,
    method: 'post',
    data: body,
  });
  return data;
};

export const signUp = async body => {
  const { data } = await apiClient({
    url: `users/signup`,
    method: 'post',
    data: body,
  });
  return data;
};

export const logOut = async body => {
  const { data } = await apiClient({
    url: `users/logout`,
    method: 'post',
    data: body,
  });
  return data;
};
