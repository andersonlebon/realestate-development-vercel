import { useMutation, useQuery } from '@tanstack/react-query';
import { authService } from '@/services';
import Cookies from 'js-cookie';
import { clearAllCookies, COOKIES_KEY } from '@/utils/setCookies';

export const useSignin = () => {
	return useMutation({
		mutationKey: ['signin'],
		mutationFn: async (formData) => await authService.signin(formData),
	});
};

export const useSignup = () => {
	return useMutation({
		mutationKey: ['signup'],
		mutationFn: async (formData) => await authService.signup(formData),
	});
};

export const useSetUserRole = () => {
	return useMutation({
		mutationKey: ['userRole'],
		mutationFn: async (role) => await authService.setUserRole(role),
	});
};

export const useValidateToken = () => {
	const access_token = Cookies.get(COOKIES_KEY.ACCESS_TOKEN);
	const uid = Cookies.get(COOKIES_KEY.UID);
	const client = Cookies.get(COOKIES_KEY.CLIENT);
	return useQuery({
		queryKey: ['validateToken'],
		queryFn: async () =>
			await authService.validateToken({ access_token, uid, client }),
		enabled: !!access_token && !!uid && !!client,
	});
};

export const useGetUserRoles = (userId) => {
	return useQuery({
		queryKey: ['getUserRoles'],
		queryFn: async () => await authService.getUserRoles(userId),
		enabled: !!userId,
	});
};
