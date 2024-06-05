import HttpService, { axiosInstancePublic } from '../base.service';
import { BASE_URL } from '@/config';
// here we need to remove this any type and provide a specific type.

const formDataConfig = {
  headers: {
    'Content-Type': 'multipart/form-data',
  },
};

class AuthService extends HttpService<any> {
  private prefix: string = `api/auth`;

  constructor() {
    super();
  }

  async signin(data) {
    const response = await this.post(`${this.prefix}/sign_in`, data);
    return response;
  }

  async signup(data) {
    const response = await this.post(`${this.prefix}/`, data);
    return response;
  }

  async setUserRole(data) {
    const response = await this.post('api/roles/', data);
    return response;
  }

  async validateToken(refreshTokens) {
    const refreshEndpoint = `${BASE_URL}/api/auth/validate_token`;
    // validate_token in the header
    const response = await axiosInstancePublic.get(refreshEndpoint, {
      headers: {
        'access-token': refreshTokens.access_token,
        client: refreshTokens.client,
        uid: refreshTokens.uid,
      },
    });

    return response

  }

  async getUserRoles(userId) {
    const refreshEndpoint = `${BASE_URL}/api/user_roles/${userId}`;
    const {data} = await axiosInstancePublic.get(refreshEndpoint);
    
    return data

  }

}
export default AuthService;
