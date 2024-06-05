

import HttpService from '../base.service';

class HomeService extends HttpService<any> {
  private prefix: string = `api`;
  
  constructor() {
    super();
  }

  async getHomeInfo()  {
    const { data } = await this.get(`${this.prefix}/home`);
    return data;
  }
}

export default HomeService;