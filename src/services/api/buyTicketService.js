import { api } from "./config/axiosConfig";

export const buyTicketService = {
  testRequest: async () => {
    const response = await api.request({
      url: `/users`,
      method: "GET",
    });
    return response.data;
  },
};
