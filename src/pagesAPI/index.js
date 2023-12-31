import axios from "axios";

const apiURL = "http://localhost:3008";

export const createPage = async (title, elements) => {
  try {
    const response = await axios.post(`${apiURL}/pages`, {
      title,
      elements,
    });
    return response.data.id; // Assuming the response has an 'id' field
  } catch (error) {
    console.error("Error creating page:", error);
    throw error; // Rethrow the error for handling at a higher level if needed
  }
};

export const getPageById = async (pageId) => {
  try {
    const response = await axios.get(`${apiURL}/pages/${pageId}`);
    return response.data; // Assuming the response contains the page data
  } catch (error) {
    console.error(`Error fetching page with ID ${pageId}:`, error);
    throw error; // Rethrow the error for handling at a higher level if needed
  }
};
export const getPagesList = async () => {
  try {
    const response = await axios.get(`${apiURL}/pages`);
    return response.data; // Assuming the response contains the list of pages
  } catch (error) {
    console.error("Error fetching pages list:", error);
    throw error; // Rethrow the error for handling at a higher level if needed
  }
};
