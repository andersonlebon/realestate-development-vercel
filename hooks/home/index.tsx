
import { useMutation, useQuery } from '@tanstack/react-query';
import { homeService } from '@/services';



export const useGetHomeInfo = () => {
  return useQuery({
    queryKey: ['home'],
    queryFn: async () =>
      await homeService.getHomeInfo()
  });
}
