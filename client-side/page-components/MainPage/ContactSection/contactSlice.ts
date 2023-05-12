import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IContact } from '../../../interfaces/Contact.interface';
import { createApi } from '@reduxjs/toolkit/query/react';
import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { API_PATH, API_ROUTE } from '../../../api/helper.api';

const initialState: IContact = {
	name: '',
	surname: '',
	email: '',
	phoneNumber: '',
	message: '',
};

export const contactFormApi = createApi({
	reducerPath: 'contactFormApi',
	baseQuery: fetchBaseQuery({
		baseUrl: API_PATH,
	}),
	endpoints: (builder) => ({
		submitContactFormData: builder.mutation<void, IContact>({
			query: (formData) => ({
				url: API_ROUTE.message,
				method: 'POST',
				body: formData,
			}),
		}),
	}),
});

export const { useSubmitContactFormDataMutation } = contactFormApi;
