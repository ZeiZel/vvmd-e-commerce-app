import React from 'react';
import styles from './ContactsPage.module.scss';
import { Card, HTag } from '../../components';

export const ContactsPage = () => {
	return (
		<div className={styles.contacts}>
			<div className={styles.container}>
				<Card className={styles.contacts__wrapper}>
					<div className={styles.contacts__title}>
						<div>
							<span>Справочная служба</span>
							<span>
								<a href='tel:+7 800 444-5851'>+7 800 444-5851</a>
							</span>
						</div>
						<div>
							<span>E-MAIL</span>
							<span>
								<a href='mailto:info@vvmd.ru'>info@vvmd.ru</a>
							</span>
						</div>
					</div>
					<div className={styles.contacts__map}>
						<a href='https://yandex.ru/maps/org/volgo_vyatskiy_monetny_dvor/55315507221/?utm_medium=mapframe&utm_source=maps'>
							Волго-вятский монетный двор
						</a>
						<a href='https://yandex.ru/maps/46/kirov/category/jewelry_workshop/184105830/?utm_medium=mapframe&utm_source=maps'>
							Ювелирная мастерская в Кирове
						</a>
						<a href='https://yandex.ru/maps/46/kirov/category/manufacture_and_wholesale_of_souvenirs/184107184/?utm_medium=mapframe&utm_source=maps'>
							Изготовление и оптовая продажа сувениров в Кирове
						</a>
						<iframe
							src='https://yandex.ru/map-widget/v1/?from=tabbar&ll=49.630694%2C58.591130&mode=search&oid=55315507221&ol=biz&sctx=ZAAAAAgBEAAaKAoSCSZuFcRAz0hAEZ8gsd09Sk1AEhIJRbqfU5Cfwz8Rf2399J81rz8iBgABAgMEBSgKOABA5Z8NSAFqAnJ1nQHNzEw9oAEAqAEAvQG8HT%2FHwgEGldC%2BiM4B6gEA8gEA%2BAEAggIEdnZtZIoCAJICAJoCDGRlc2t0b3AtbWFwcw%3D%3D&sll=49.630694%2C58.591130&source=serp_navig&sspn=0.025928%2C0.008153&text=vvmd&z=16.2'
							allowFullScreen={true}
						></iframe>
					</div>
					<div className={styles.contacts__description}>
						<HTag className={styles['contacts__description-title']} tag={'h2'}>
							Киров
						</HTag>
						<div className={styles['contacts__description-block']}>
							<div>
								<span>Киров, Мелькомбинатовский проезд, д. 7</span>
								<span>Пн - Пт: 8.30 - 17.30,</span>
								<span>Сб - Вс: выходные</span>
							</div>
							<span>
								<a href='tel:+78004445851'>8 (800) 444 585 1</a>
							</span>
							<span>
								<a href='mailto:info@vvmd.ru'>info@vvmd.ru</a>
							</span>
						</div>
					</div>
				</Card>
			</div>
		</div>
	);
};
