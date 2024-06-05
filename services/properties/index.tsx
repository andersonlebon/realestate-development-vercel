

import HttpService from '../base.service';

class PropertyService extends HttpService<any> {
  private prefix: string = `api`;
  
  constructor() {
    super();
  }

  async getPropertiesFn(params: any)  {
    const queryStr = this.createQueryStrings(params);
    const { data } = await this.get(`${this.prefix}/properties?${queryStr}`);
    return data;
  }

  async getPropertyByIdFn(propertyId: string) {
    const { data } = await this.get(`${this.prefix}/properties/${propertyId}`);
    return data;
  }

  async createProperty(dataRequest: any) {
    const { data } = await this.post(`${this.prefix}/properties`, dataRequest);
    return data;
  }

  async updateProperty(id: string, dataRequest: any) {
    const { data } = await this.put(`${this.prefix}/properties/${id}`, dataRequest);
    return data;
  }

  async deleteProperty(id: string) {
    const { data } = await this.delete(`${this.prefix}/properties/${id}`);
    return data;
  }

  async getPropertiesFilterFn(params: PropertiesFilterParams)  {
    console.log(params)
    const queryStr = this.createQueryStrings(params);
    console.log(queryStr)
    const { data } = await this.get(`${this.prefix}/properties_filter?${queryStr}`);
    return data;
  }

}


export default PropertyService;