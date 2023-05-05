import { ICatalogPageModel } from '../interfaces/Catalog.interface';

export const catalogPageData: ICatalogPageModel[] = [
	{ title: 'Монеты и медали монетного типа', image: '/0_coins_and_medals.png', category: 0 },
	{ title: 'Медали и ордена', image: '/1_medals_and_orders.png', category: 1 },
	{ title: 'Знаки и символы', image: '/2_signs_and_symbols.jpg', category: 2 },
	{ title: 'Реплики почтовых марок', image: '/3_postmarks_replica.jpg', category: 3 },
	{ title: 'Ювелирные изделия', image: '/4_jewelry.jpg', category: 4 },
	{ title: 'Жетоны и Шильды', image: '/5_tokens_and_shields.jpg', category: 5 },
	{ title: 'Упаковки', image: '/6_packages.jpg', category: 6 },
];

// переводим числовую цену в стринговую
export const priceRu = (price: number): string =>
	price
		.toString()
		.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
		.concat(' Р');

// меняем окончания (товар - товаров - товара)
export const declOfNum = (number: number, titles: [string, string, string]): string => {
	const cases = [2, 0, 1, 1, 1, 2];
	return titles[
		number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]
	];
};
