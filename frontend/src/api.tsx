import axios from "axios";
import { CompanySearch } from "./company";
import { COMPANY_SEARCH_URL } from "./Constants";

export const searchCompanies = async (query: string): Promise<CompanySearch[]> => {
  try {
    const apiKey = process.env.REACT_APP_FMP_API_KEY;

    const response = await axios.get<CompanySearch[]>(COMPANY_SEARCH_URL, {
      params: {
        query,
        apikey: apiKey,
      },
    });

    return response.data; 
  } catch (error) {
    console.error("Error fetching companies:", error);
    throw error;
  }
};
