

import HttpService from '../base.service';

class UserServices extends HttpService<any> {
  private prefix: string = `api/users`;
  
  constructor() {
    super();
  }

  async updateUser({id, userdata})  {
    const { data } = await this.put(`${this.prefix}/users/${id}`, userdata);
    return data;
  }

}

export default UserServices;
