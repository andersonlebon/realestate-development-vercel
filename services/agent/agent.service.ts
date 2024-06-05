

import HttpService from '../base.service';

class AgentService extends HttpService<any> {
  private prefix: string = `api/agents`;
  
  constructor() {
    super();
  }

  async getAllAgentsFn()  {
    const { data } = await this.get(`${this.prefix}`);
    return data;
  }

  async getAgentByIdFn(id: string) {
    const { data } = await this.get(`${this.prefix}/${id}`);
    return data;
  }

  async getAgentProperties(id: string) {
    const { data } = await this.get(`${this.prefix}/${id}/properties`);
    return data;
  }

  async getAllAgentsOptionsFn() {
    const { data } = await this.get(`${this.prefix}_options`);
    return data;
  }
  
}

export default AgentService;