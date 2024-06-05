import { useMutation, useQuery } from '@tanstack/react-query';
import { PropertiesListResponseDTO, PropertyResponsetDTO } from './dtos/property.dto.res';
import { PropertyReviewRequestDTO } from './review.dto.req';
// import { reviewService } from '@/services';
import { reviewService } from '../../../services';


export const useGetAllReviews = (queryParams) => {
  return useQuery({
    queryKey: ['getAllReviews'],
    queryFn: async (): Promise<PropertiesListResponseDTO> => {
      const { data } = await reviewService.getReviewsFn(queryParams);
      return data;
    },
  });
}

export const useGetReviewById = (reviewId: string) => {
  return useQuery({
    queryKey: ['getReviewById', reviewId],
    queryFn: async (): Promise<PropertyResponsetDTO> => {
      const { data } = await reviewService.getReviewyByIdFn(reviewId);
      return data;
    },
  });
}

export const useCreateReview = () => {
  return useMutation({
    mutationKey: ['createReview'],
    mutationFn: async (data: PropertyReviewRequestDTO) => await reviewService.createReview(data),
  });
}

