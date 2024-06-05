

import HttpService from '../base.service';

class ReviewService extends HttpService<any> {
  private prefix: string = `api`;
  
  constructor() {
    super();
  }

  async getReviewsFn(params: any)  {
    const queryStr = this.createQueryStrings(params);
    const { data } = await this.get(`${this.prefix}/reviews?${queryStr}`);
    return data;
  }

  async getReviewyByIdFn(propertyId: string) {
    const { data } = await this.get(`${this.prefix}/reviews/${propertyId}`);
    return data;
  }

  async createReview(dataRequest: any) {
    const { data } = await this.post(`${this.prefix}/reviews`, dataRequest);
    return data;
  }

  async updateReview(id: string, dataRequest: any) {
    const { data } = await this.put(`${this.prefix}/reviews/${id}`, dataRequest);
    return data;
  }

  async deleteReview(id: string) {
    const { data } = await this.delete(`${this.prefix}/reviews/${id}`);
    return data;
  }
}


export default ReviewService;