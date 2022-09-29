import api from '../index';

// --- User - login ---
export const getUserLogin = (params: any) => api.post('/get/user', params);

// -------------------- Project --------------------
// --- Project - create ---
export const createProject = (params: any) => api.post('/create/project', params);

// --- Project - getAPP ---
export const getProject = (params: any) => api.get('/get/project', { params });

// --- Project - getList ---
export const getProjectList = (params: any) => api.get('/get/project/list', { params });

// --- Project - setting ---
export const setProjectConfig = (params: any) => api.post('/project/set', params);

// -------------------- dashboard --------------------
// --- 整站 PV/UV ---
export const getDashboard = (params: any) => api.get('/get/dashboard', { params });

// --- 页面聚合 PV Top 10 ---
export const getPageGroupPv = (params: any) => api.get('/get/group/dashboard', { params });

// --- UV - dashboard ---
export const getUvDashboard = (params: any) => api.get('/get/dashboard/uv', { params });

// --- Performance - dashboard ---
export const getPerformanceDashboard = (params: any) => api.get('/get/dashboard/performance', { params });

// --- 接口聚合 - API - 慢请求 Top 10 ---
export const getGroupPerformanceApi = (params: any) => api.get('/get/group/performance/api', { params });

// --- 接口聚合 - Res - 慢请求 Top 10 ---
export const getGroupPerformanceRes = (params: any) => api.get('/get/group/performance/res', { params });

// --- Crash - dashboard ---
export const getCrashDashboard = (params: any) => api.get('/get/error/crash', { params });

// --- Get Error List ---
export const getErrorList = (params: any) => api.get('/get/error', { params });

// --- Click - event ---
export const getPageClick = (params: any) => api.get('/get/dashboard/click', { params });
