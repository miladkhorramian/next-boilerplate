import Cookies from "js-cookie";

interface HttpRequestOptions {
  headers?: Record<string, string>;
  [key: string]: any;
}

/**
 * Makes an HTTP request to the specified endpoint with the given options.
 * Automatically includes an Authorization header if a token is found in cookies.
 *
 * @param {string} endpoint - The URL to which the request is sent.
 * @param {HttpRequestOptions} [options={}] - Optional settings that customize the request.
 * @param {Record<string, string>} [options.headers] - Optional headers to include in the request.
 * @returns {Promise<any>} - A promise that resolves to the response data.
 * @throws {Error} - Throws an error if the response is not ok.
 */
const httpRequest = async (
  endpoint: string,
  options: HttpRequestOptions = {}
): Promise<any> => {
  const token = Cookies.get("TOKEN");
  const { headers = {}, ...restOptions } = options;

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const response = await fetch(endpoint, {
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    ...restOptions,
  });

  if (!response.ok) throw new Error(response.statusText);

  const data = await response.json();
  return data;
};

export default httpRequest;
