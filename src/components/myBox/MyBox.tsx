import styles from './myBox.module.scss';
import useMetrika from '../../hooks/useMetrika';

const MyBox = (): JSX.Element => {
	const { ym } = useMetrika();

	return (
		<button className={styles.card} onClick={() => ym('reachGoal', 'buy')}>
			<span className={styles.title}>В Корзину</span>
		</button>
	);
};

export default MyBox;
