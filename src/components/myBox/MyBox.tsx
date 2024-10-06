import styles from './myBox.module.scss';
import useMetrika from '../../hooks/useMetrika';

const MyBox = (): JSX.Element => {
	const { ym, gtag } = useMetrika();

	return (
		<>
			<button className={styles.card} onClick={() => ym('reachGoal', 'buy')}>
				<span className={styles.title}>В Корзину (Yandex-Metrika)</span>
			</button>
			<button
				className={styles.card}
				onClick={() =>
					gtag('event', 'add_to_basket', {
						event_name: 'add_to_basket',
					})
				}>
				<span className={styles.title}>В Корзину (Google-Analitics)</span>
			</button>
		</>
	);
};

export default MyBox;
