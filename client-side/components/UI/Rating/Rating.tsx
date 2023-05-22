import { IRatingProps } from './Rating.props';
import styles from './Rating.module.scss';
import cn from 'classnames';
import StarIcon from './star.svg';
import { useEffect, useState, KeyboardEvent, forwardRef, ForwardedRef, useRef } from 'react';

export const Rating = forwardRef(
	(
		{ isEditable = false, error, rating, setRating, tabIndex, ...props }: IRatingProps,
		ref: ForwardedRef<HTMLDivElement>,
	): JSX.Element => {
		// тут находится массив рейтинга
		const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));
		// тут будет храниться ссылка на выбранный элемент из рейтинга
		const ratingArrayRef = useRef<(HTMLSpanElement | null)[]>([]);

		// строим заново рейтинг, когда меняется либо рейтинг, либо индекс табуляции
		useEffect(() => {
			constructRating(rating);
		}, [rating, tabIndex]);

		// рассчёт фокуса
		const computeFocus = (r: number, i: number): number => {
			if (!isEditable) {
				return -1;
			}
			if (!rating && i == 0) {
				return tabIndex ?? 0;
			}
			if (r == i + 1) {
				return tabIndex ?? 0;
			}
			return -1;
		};

		// функция построения рейтинга
		const constructRating = (currentRating: number) => {
			const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
				return (
					<span
						className={cn(styles.star, {
							[styles.filled]: i < currentRating,
							[styles.editable]: isEditable,
						})}
						// при наведении мышки
						onMouseEnter={() => changeDisplay(i + 1)}
						// при уходе мышки с элемента
						onMouseLeave={() => changeDisplay(rating)}
						// при клике мышки на рейтинг
						onClick={() => onClick(i + 1)}
						//
						tabIndex={computeFocus(rating, i)}
						// при нажатии на клавишу
						onKeyDown={handleKey}
						ref={(r) => ratingArrayRef.current?.push(r)}
						// установим роль на странице - если редактируемый, то будет слайдером
						role={isEditable ? 'slider' : ''}
						// лейблы доступности:
						aria-invalid={error ? true : false}
						aria-valuenow={rating}
						aria-valuemax={5}
						aria-label={isEditable ? 'Укажите рейтинг' : 'рейтинг' + rating}
						aria-valuemin={1}
					>
						<StarIcon />
					</span>
				);
			});
			setRatingArray(updatedArray);
		};

		// функция, которая будет пересобирать рейтинг при его изменении
		const changeDisplay = (i: number) => {
			if (!isEditable) {
				return;
			}
			constructRating(i);
		};

		// функция, которая будет при нажатии устанавливать выбранный рейтинг, если он редактируемый
		const onClick = (i: number) => {
			if (!isEditable || !setRating) {
				return;
			}
			setRating(i);
		};

		// функция действий при нажатии на клавишу
		const handleKey = (e: KeyboardEvent) => {
			// если рейтинг нередактируемый, то ничего не делаем
			if (!isEditable || !setRating) {
				return;
			}

			// при нажатии на стррелку вправо или вверх у нас будет подниматься рейтинг
			if (e.code == 'ArrowRight' || e.code == 'ArrowUp') {
				if (!rating) {
					setRating(1);
				} else {
					e.preventDefault();
					setRating(rating < 5 ? rating + 1 : 5);
				}
				ratingArrayRef.current[rating]?.focus();
			}

			// при нажатии на стрелку влево или вниз - он будет опускаться
			if (e.code == 'ArrowLeft' || e.code == 'ArrowDown') {
				e.preventDefault();
				setRating(rating > 1 ? rating - 1 : 1);
				ratingArrayRef.current[rating - 2]?.focus();
			}
		};

		return (
			<div
				{...props}
				ref={ref}
				className={cn(styles.ratingWrapper, {
					[styles.error]: error,
				})}
			>
				{ratingArray.map((r, i) => (
					<span key={i}>{r}</span>
				))}
				{error && (
					<span role='alert' className={styles.errorMessage}>
						{error.message}
					</span>
				)}
			</div>
		);
	},
);
