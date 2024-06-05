/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, {
  AxiosInstance,
  AxiosResponse,
  CancelTokenSource,
  CancelTokenStatic,
} from 'axios';
import Cookies from 'js-cookie';
import { COOKIES_KEY } from '@/utils/setCookies';
import { BASE_URL } from '@/config';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: '*/*',
  },
});

export const axiosInstancePublic = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
  headers: {
    Accept: '*/*',
  },
});

console.log(BASE_URL, 'BASE_URL')

class HttpService<T> {
  private CancelToken: CancelTokenStatic;
  private source: CancelTokenSource;
  private useAccessToken: boolean;

  constructor(useAccessToken = true) {
    this.CancelToken = axios.CancelToken;
    this.source = this.CancelToken.source();
    this.useAccessToken = useAccessToken;

    // Set up request interceptor
    axiosInstance.interceptors.request.use(
      (config) => {
        if (this.useAccessToken) {
          const access_token = Cookies.get(COOKIES_KEY.ACCESS_TOKEN);
          const authorization = Cookies.get(COOKIES_KEY.AUTHORIZATION);
          if (access_token) {
            config.headers.Authorization = authorization;
            config.headers['access-token'] = access_token;
          }
        }

        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // Set up response interceptor
    axiosInstance.interceptors.response.use(
      (response) => {
        if (response) {
          const access_token = response.headers['access-token']
          const authorization = response.headers['authorization'];
          const uid = response.headers['uid'];
          const client = response.headers['client'];
          const expiry = response.headers['expiry'];

          if (authorization) {
            document.cookie = `${COOKIES_KEY.AUTHORIZATION}=${authorization}; path=/; max-age=${expiry}`;
          }
          if (access_token) {
            document.cookie = `${COOKIES_KEY.ACCESS_TOKEN}=${access_token}; path=/;`;
            document.cookie = `${COOKIES_KEY.UID}=${uid}; path=/;`;
            document.cookie = `${COOKIES_KEY.CLIENT}=${client}; path=/;`;
            document.cookie = `${COOKIES_KEY.EXPIRY}=${expiry}; path=/;`;
          }
          return response;
        }
        return response;
      },
      async (error) => {
        if (error.response?.status === 401) {
          const access_token = Cookies.get(COOKIES_KEY.ACCESS_TOKEN);
          const uid = Cookies.get(COOKIES_KEY.UID);
          const client = Cookies.get(COOKIES_KEY.CLIENT);
          

          if (access_token && uid && client) {
            const refresh_tokens = {
              access_token,
              uid,
              client,
            }
            try {
              // Call a method to perform token refresh
              const newAuthorizationToken = await this.refreshAccessToken(
                refresh_tokens
              );
              // set the new access token in the cookie
              if (newAuthorizationToken) {
                Cookies.set(COOKIES_KEY.AUTHORIZATION, newAuthorizationToken, {
                  httpOnly: true,
                });
              }
              // Retry the failed request with the new access token
              if (newAuthorizationToken) throw new Error('Unautorized')
              error.config.headers.Authorization = newAuthorizationToken
              return axiosInstance(error.config);
            } catch (refreshError) {
              return Promise.reject(refreshError);
            }
          }else return Promise.reject(error.response);
        } else if (error.response?.status === 400) {
          return Promise.reject(error);
        } else {
          return Promise.reject(error);
        }
      }
    );
  }

  // GET request method
  protected get = (
    endpoint: string,
    params?: any,
    useAccessToken?: boolean
  ): Promise<AxiosResponse<T, any>> => {
    const config: any = {
      params,
      cancelToken: this.source.token,
    };
    if (useAccessToken === undefined) {
      useAccessToken = this.useAccessToken;
    }
    if (useAccessToken) {
      config.headers = {
        Authorization: Cookies.get(COOKIES_KEY.AUTHORIZATION)
      };
    }
    return axiosInstance.get<T>(`${BASE_URL}/${endpoint}`, config);
  };

  // POST request method
  protected post = (
    endpoint: string,
    body: any,
    options?: any,
    useAccessToken?: boolean
  ): Promise<AxiosResponse<T, any>> => {
    const config: any = {
      ...options, 
      cancelToken: this.source.token,
    };

    if (useAccessToken) {
      config.headers = {
        Authorization: Cookies.get(COOKIES_KEY.AUTHORIZATION)
      };
    } else {
      useAccessToken = this.useAccessToken;
    }

    return axiosInstance.post<T>(`${BASE_URL}/${endpoint}`, body, config);
  };

  // PATCH request method
  protected patch = (
    endpoint: string,
    body: any,
    params?: any,
    useAccessToken?: boolean
  ): Promise<AxiosResponse<T, any>> => {
    const config: any = {
      ...params,
      cancelToken: this.source.token,
    };
    if (useAccessToken === undefined) {
      useAccessToken = this.useAccessToken;
    }
    if (useAccessToken) {
      config.headers = {
        Authorization: Cookies.get(COOKIES_KEY.AUTHORIZATION)
      };
    }
    return axiosInstance.patch<T>(`${BASE_URL}/${endpoint}`, body, {
      ...config,
    });
  };

  // PUT request method
  protected put = (
    endpoint: string,
    body?: any,
    params?: any,
    useAccessToken?: boolean
  ): Promise<AxiosResponse<T, any>> => {
    const config: any = {
      ...params,
      cancelToken: this.source.token,
    };
    if (useAccessToken === undefined) {
      useAccessToken = this.useAccessToken;
    }
    if (useAccessToken) {
      config.headers.Authorization = Cookies.get(COOKIES_KEY.AUTHORIZATION)
    }
    return axiosInstance.put<T>(`${BASE_URL}/${endpoint}`, body, config);
  };

  // DELETE request method
  protected delete = (
    endpoint: string,
    params?: any,
    data?: any,
    useAccessToken?: boolean
  ): Promise<AxiosResponse<T, any>> => {
    const config: any = {
      ...params,
      data,
      cancelToken: this.source.token,
    };
    if (useAccessToken === undefined) {
      useAccessToken = this.useAccessToken;
    }
    if (useAccessToken) {
      config.headers.Authorization = Cookies.get(COOKIES_KEY.AUTHORIZATION)
    }
    return axiosInstance.delete<T>(`${BASE_URL}/${endpoint}`, config);
  };

  private updateCancelToken() {
    this.source = this.CancelToken.source();
  }

  cancel = () => {
    this.source.cancel('Explicitly cancelled HTTP request');
    this.updateCancelToken();
  };

  // Method to refresh the access token based on the provided refresh token
  private async refreshAccessToken(refreshTokens): Promise<string> {
    const refreshEndpoint = `${BASE_URL}/api/auth/validate_token`;
    // validate_token in the header
    const response = await axiosInstancePublic.get(refreshEndpoint, {
      headers: {
        'access-token': refreshTokens.accessToken,
        client: refreshTokens.client,
        uid: refreshTokens.uid,
      },
    });

    
    return response.headers['authorization'];
  }

  // Method to create query strings
  protected createQueryStrings = (queryParams: {
    [key: string]: string | number | boolean;
  }) => {
    // Filter out properties with null values
    if (queryParams !== null) {
      const filteredParams = Object.fromEntries(
        Object.entries(queryParams).filter(
          ([_, value]) => {
            if (value === undefined) return false
            return (value !== '' && value !== 'none') || value
          }
        )
      );
      console.log(filteredParams)
      // Create a query string from the filteredParams object
      const queryString = Object.keys(filteredParams)
        .map((key) => `${key}=${encodeURIComponent(filteredParams[key])}`)
        .join('&');
      return queryString;
    }
    return '';
  };
}

export default HttpService;
