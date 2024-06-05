import { useMutation, useQuery } from '@tanstack/react-query';
import { usersService } from '@/services';


export const useUpdateUser = () => {
  return useMutation({
    mutationKey: ['updateProperty'],
    mutationFn: async ({id, userdata}: any) => await usersService.updateUser({id, userdata}),
  });
}

