import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
    reducerPath: 'api',
    tagTypes: ['photo'],
    baseQuery: fetchBaseQuery({ baseUrl: 'http://89.223.67.159:8088/api ' }),
    endpoints: (builder) => ({
        getData: builder.query({
            query: () => 'data',
        }),
    }),
});