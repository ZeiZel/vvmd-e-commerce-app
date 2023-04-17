import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';
import { EndpointBuilder } from '@reduxjs/toolkit/src/query/endpointDefinitions';

export const reducerPath = 'vvmdsite';
export const baseUrl = 'http://localhost:3000';

export const apiSlice = createApi({
	reducerPath,
	baseQuery: fetchBaseQuery({
		baseUrl: baseUrl,
	}),
	endpoints: (build: EndpointBuilder<BaseQuery, string, string>): Definitions => ({
		getProducts: build.query({
			query: () => '/products',
		}),
	}),
});
