import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IContact } from '../../../interfaces/Contact.interface';
import { createApi } from '@reduxjs/toolkit/query/react';
import { fetchBaseQuery } from '@reduxjs/toolkit/query';

const initialState: IContact = {
	email: '',
	name: '',
	surname: '',
	phoneNumber: '',
	message: '',
};

export const contactFormApi = createApi({
	reducerPath: 'contactFormApi',
	baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
	endpoints: (builder) => ({
		submitContactFormData: builder.mutation<void, IContact>({
			query: (formData) => ({
				url: '/submit-contact-form-data',
				method: 'POST',
				body: formData,
			}),
		}),
	}),
});

export const { useSubmitContactFormDataMutation } = contactFormApi;
