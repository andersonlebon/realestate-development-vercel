import { useMutation, useQuery } from '@tanstack/react-query';
import { propertiesService } from '../../services';
import { PropertiesListResponseDTO, PropertyResponsetDTO } from './dtos/property.dto.res';
import { PropertiesFilterParams } from './dtos/property.dto.req';

export const useGetAllProperties = (queryParams: PropertiesFilterParams) => {
	return useQuery({
		queryKey: ['getAllProperties'],
		queryFn: async (): Promise<PropertiesListResponseDTO> => {
      const { data } = await propertiesService.getPropertiesFn(queryParams);
      return data;
    },
	});
};

export const useGetPropertyById = (propertyId: string) => {
	return useQuery({
		queryKey: ['getPropertyById', propertyId],
		queryFn: async (): Promise<PropertyResponsetDTO> => {
      const { data } = await propertiesService.getPropertyByIdFn(propertyId);
      return data;
    },
	});
};

export const useGetPropertiesFilter = (queryParams: PropertiesFilterParams) => {
  return useQuery({
    queryKey: ['getPropertiesFilter'],
    queryFn: async (): Promise<PropertiesListResponseDTO> => {
      const { data } = await propertiesService.getPropertiesFilterFn(queryParams);
      return data;
    },
  });
};

export const useCreateProperty = () => {
  return useMutation({
  mutationKey: ['createProperty'],
    mutationFn: async (data) => await propertiesService.createProperty(data),
  });
}

export const useUpdateProperty = () => {
  return useMutation({
    mutationKey: ['updateProperty'],
    mutationFn: async ({id, data}: any) => await propertiesService.updateProperty(id, data),
  });
}

