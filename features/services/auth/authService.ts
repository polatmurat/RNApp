import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const authService = createApi({
    reducerPath: 'auth',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5556/api/auth/"
    }),
    endpoints: (builder) => {
        return {
            userLogin: builder.mutation<any, { email: string, password: string }>({
                query: loginData => {
                    return {
                        url: 'login',
                        method: 'POST',
                        body: loginData
                    }
                }
            }),
            userRegister: builder.mutation<any, { email: string, password: string, name: string }>({
                query: registerData => {
                    return {
                        url: 'register',
                        method: 'POST',
                        body: registerData
                    }
                }
            }),
        }
    }
});

export const { useUserLoginMutation, useUserRegisterMutation } = authService;
export default authService;