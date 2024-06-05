// import { encodeQuery } from '@/utils/params';


import HttpService from '../base.service';

class SharedService extends HttpService<any> {
  private prefix: string = `api`;
  
  constructor() {
    super();
  }

  async getRoles() {
    const response = await this.get(`${this.prefix}/roles`);
    return response.data;
  }
}

export default SharedService;
