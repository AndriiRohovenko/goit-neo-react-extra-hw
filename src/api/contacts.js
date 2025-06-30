import { apiClient } from './apiClient';

export const getContacts = async () => {
  const { data } = await apiClient({
    url: `/contacts`,
    method: 'get',
  });
  return data;
};

export const getContactById = async id => {
  const { data } = await apiClient({
    url: `/contacts/${id}`,
    method: 'get',
  });
  return data;
};

export const addContact = async body => {
  const { data } = await apiClient({
    url: `/contacts`,
    method: 'post',
    data: body,
  });
  return data;
};

export const deleteContactById = async id => {
  const { data } = await apiClient({
    url: `/contacts/${id}`,
    method: 'delete',
  });
  return data;
};
