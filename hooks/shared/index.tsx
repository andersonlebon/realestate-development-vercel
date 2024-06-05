import { useMutation, useQuery } from '@tanstack/react-query';
import { sharedService } from '@/services';



export const useGetRoles = () => {
  return useQuery({
    queryKey: ['roles'],
    queryFn: async () =>
      await sharedService.getRoles()
  });
}
