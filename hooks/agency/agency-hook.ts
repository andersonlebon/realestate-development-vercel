import { useInfiniteQuery, useMutation, useQuery } from '@tanstack/react-query';
import { agencyService } from '../../services';
import { queryParamsType } from '../type';
import { AgenciesListResponseDTO, AgencyItemResponseDTO } from './dtos/agency.dto.res';

export const useGetAllAgencies = (queryParams: queryParamsType) => {
  return useQuery({
    queryKey: ['getAllAgencies', queryParams],
    queryFn: async (): Promise<AgenciesListResponseDTO> => {
      const res = await agencyService.getAllAgenciesFn(queryParams);
      return res.data;
    },
  });
};

export const useGetAgencyById = (agencyId: string) => {
  return useQuery({
    queryKey: ['getAgencyId', agencyId],
    queryFn: async (): Promise<AgencyItemResponseDTO> => {
      const res = await agencyService.getAgencyByIdFn(agencyId);
      return res.data;
    },
    enabled: !!agencyId,
  });
}


export const useGetAllAgenciesOptions = () => {
  return useQuery({
    queryKey: ['getAllAgenciesOptions'],
    queryFn: async (): Promise<AgenciesListResponseDTO> => {
      const res = await agencyService.getAllAgenciesOptionsFn();
      return res.data;
    },
  });
}