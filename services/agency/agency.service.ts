

import HttpService from '../base.service';
import { queryParamsType } from '../../hooks/type';

class AgencyService extends HttpService<any> {
  private prefix: string = `api/agencies`;
  
  constructor() {
    super();
  }

  async getAllAgenciesFn(queryParams: queryParamsType)  {
    const { data } = await this.get(`${this.prefix}`);
    return data;
  }

  async getAgencyByIdFn(id: string) {
    const { data } = await this.get(`${this.prefix}/${id}`);
    return data;
  }

  async getAllAgenciesOptionsFn() {
    const { data } = await this.get(`${this.prefix}_options`);
    return data;
  }
}

export default AgencyService;
