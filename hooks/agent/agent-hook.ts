import { useInfiniteQuery, useMutation, useQuery } from '@tanstack/react-query';
import { agentService } from '../../services';
import { AgentiesListResponseDTO, AgentResponseDTO } from './dtos/agent.dto.res';
// import { agentService } from '@/services';


export const useGetAllAgents = () => {
  return useQuery({
    queryKey: ['getAllAgent'],
    queryFn: async (): Promise<AgentiesListResponseDTO> => {
      const res = await agentService.getAllAgentsFn();
      return res.data;
    },
  });
};

export const useGetAgentById = (agentId: string) => {
  return useQuery({
    queryKey: ['getAgentById', agentId],
    queryFn: async (): Promise<AgentResponseDTO> => {
      const res = await agentService.getAgentByIdFn(agentId);
      return res.data;
    },
    enabled: !!agentId,
  });
}

export const useGetAgentProperties = (agentId: string) => {
  return useQuery({
    queryKey: ['getAgentById', agentId],
    queryFn: async (): Promise<AgentResponseDTO> => {
      const res = await agentService.getAgentProperties(agentId);
      return res.data;
    },
    enabled: !!agentId,
  });
}


// export const useGetAllAgents = (agentId: string) => {
//   return useQuery({
//     queryKey: ['getAllAgentList', agentId],
//     queryFn: async (): Promise<AgentiesListResponseDTO> => {
//       const res = await candidateService.getCandidatePublicProfileFn(
//         agentId
//       );
//       return res?.data;
//     },
//     enabled: !!agentId,
//   });
// };


export const useGetAllAgentsOptions = () => {
  return useQuery({
    queryKey: ['getAllAgentsOptions'],
    queryFn: async (): Promise<AgentiesListResponseDTO> => {
      const res = await agentService.getAllAgentsOptionsFn();
      return res.data;
    },
  });
}