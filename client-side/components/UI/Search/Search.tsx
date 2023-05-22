import React from 'react';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import SearchIcon from './Search.svg';
import { useForm } from 'react-hook-form';

const Search = () => {
	const { register, handleSubmit } = useForm();

	const onSubmit = () => {};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Input
				{...register('search', { required: { value: true, message: 'Введите запрос' } })}
			/>
			<button>
				<SearchIcon />
			</button>
		</form>
	);
};

export default Search;
