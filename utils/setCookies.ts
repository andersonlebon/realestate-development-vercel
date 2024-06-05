import Cookies from 'js-cookie';

type dataProps = {
	access_token: string;
	refresh_token: string;
	expires_in: string;
};

export enum COOKIES_KEY {
	ACCESS_TOKEN = 'access_token',
	AUTHORIZATION = 'Authorization',
	EXPIRY = 'expiry',
	UID = 'uid',
	CLIENT = 'client',
	USER_INFO = 'user_info',
}

export const setCookies = (data, user) => {
	Cookies.set(COOKIES_KEY.ACCESS_TOKEN, data['access-token']);
	Cookies.set(COOKIES_KEY.AUTHORIZATION, data['authorization']);
	Cookies.set(COOKIES_KEY.EXPIRY, data['expiry']);
	Cookies.set(COOKIES_KEY.UID, data['uid']);
	Cookies.set(COOKIES_KEY.CLIENT, data['client']);
	sessionStorage.setItem(COOKIES_KEY.USER_INFO, JSON.stringify(user));
};

export const clearAllCookies = () => {
	const cookies = document.cookie.split(";");
	for (let i = 0; i < cookies.length; i++) {
		document.cookie = cookies[i].replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
	}
}