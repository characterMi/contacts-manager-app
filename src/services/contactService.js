import axios from "axios";

const BASE_URL = "https://contacts-manager-app-e4800-default-rtdb.asia-southeast1.firebasedatabase.app";

// @desc Get All Contacts
// @route GET https://contacts-manager-app-e4800-default-rtdb.asia-southeast1.firebasedatabase.app/contacts
export const getAllContacts = () => {
  const url = `${BASE_URL}/contacts`;
  return axios.get(url);
};

// @desc Get Contact With Contact ID
// @route GET https://contacts-manager-app-e4800-default-rtdb.asia-southeast1.firebasedatabase.app/contacts/:contactId
export const getContact = (contactId) => {
  const url = `${BASE_URL}/contacts/${contactId}`;
  return axios.get(url);
};

// @desc  Get All Groups
// @route GET https://contacts-manager-app-e4800-default-rtdb.asia-southeast1.firebasedatabase.app/groups
export const getAllGroups = () => {
  const url = `${BASE_URL}/groups`;
  return axios.get(url);
};

// @desc  Get Group Name With Group ID
// @route GET https://contacts-manager-app-e4800-default-rtdb.asia-southeast1.firebasedatabase.app/groups/:groupId
export const getGroup = (groupId) => {
  const url = `${BASE_URL}/groups/${groupId}`;
  return axios.get(url);
};

// @desc  Create New Contact
// @route POST https://contacts-manager-app-e4800-default-rtdb.asia-southeast1.firebasedatabase.app/contacts
export const createContact = (contact) => {
  const url = `${BASE_URL}/contacts`;
  return axios.post(url, contact);
};

// @desc  Update Contact
// @route PUT https://contacts-manager-app-e4800-default-rtdb.asia-southeast1.firebasedatabase.app/contacts/:contactId
export const updateContact = (contact, contactId) => {
  const url = `${BASE_URL}/contacts/${contactId}`;
  return axios.put(url, contact);
};

// @desc  Delete Contact
// @route DELETE https://contacts-manager-app-e4800-default-rtdb.asia-southeast1.firebasedatabase.app/contacts/:contactId
export const deleteContact = (contactId) => {
  const url = `${BASE_URL}/contacts/${contactId}`;
  return axios.delete(url);
};
