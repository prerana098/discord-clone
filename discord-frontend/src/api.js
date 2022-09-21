import axios from "axios";
import { logout } from "./shared/utils/auth";

const apiClient = axios.create({
	baseURL: "http://localhost:5000/api",
	timeout: 1000,
});

apiClient.interceptors.request.use(
	(request) => {
		const userDetails = localStorage.getItem("user");

		if (userDetails) {
			const token = JSON.parse(userDetails).token;
			request.headers.authorization = `Bearer ${token}`;
		}
		return request;
	},
	(error) => {
		return Promise.reject(error);
	}
);

// public routes

export const login = async (data) => {
	try {
		return await apiClient.post("/auth/login", data);
	} catch (exception) {
		return {
			error: true,
			exception,
		};
	}
};

export const register = async (data) => {
	try {
		return await apiClient.post("/auth/register", data);
	} catch (exception) {
		return {
			error: true,
			exception,
		};
	}
};

// secure routes

const checkResponseCode = (exception) => {
	const responseCode = exception?.response?.status;

	// 401 - unauthorized
	// 403 - forbidden

	if (responseCode) {
		(responseCode === 401 || responseCode === 403) && logout();
	}
};
