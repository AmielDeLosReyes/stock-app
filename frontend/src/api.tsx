import axios from "axios";
import { CompanyProfile, CompanySearch } from "./company";
import { COMPANY_PROFILE_URL, COMPANY_SEARCH_URL } from "./Constants";

// API Key
const apiKey = process.env.REACT_APP_FMP_API_KEY;

// Search for companies
export const searchCompanies = async (query: string): Promise<CompanySearch[]> => {
  try {
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


// Search a single specific company
export const getCompanyProfile = async (symbol: string) => {
  try {
    const response = await axios.get<CompanyProfile[]>(COMPANY_PROFILE_URL, {
      params: {
        symbol,
        apikey: apiKey
      },
    });

    return response.data;
  } catch(error) {
    console.error("Error fetching company profile:", error);
    throw error;
  }
}