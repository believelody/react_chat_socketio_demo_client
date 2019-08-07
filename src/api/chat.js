import axios from 'axios'
import { baseUrl } from "./"

export default {
  getChats: () => axios.get(`${baseUrl}/chats`),

  searchChatByUsers: users => axios.get(`${baseUrl}/chats/searching-chat?users=${users}`),

  getChat: id => axios.get(`${baseUrl}/chats/${id}`),

  createChat: data => axios.post(`${baseUrl}/chats`, data),

  addUserToChat: (id, user) => axios.put(`${baseUrl}/chats/${id}`, user),

  removeUserToChat: (id, userId) => axios.put(`${baseUrl}/chats/${id}`, userId),

  deleteChat: id => axios.delete(`${baseUrl}/chats/${id}`)
};
