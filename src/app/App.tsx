import React, { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import styles from './app.module.scss';

const Modal = React.lazy(
	() => import('../components/modal' /*webpackChunkName: "modal" */)
);

const AnotherComponent = React.lazy(
	() =>
		import(
			'../components/another-component' /*webpackChunkName: "another-component" */
		)
);

const MyBox = React.lazy(
	() => import('../components/myBox/MyBox' /*webpackChunkName: "myBox" */)
);

export const App = () => {
	return (
		<div className={styles.page}>
			<div className={styles.links}>
				<Link to='/another' className={styles.link}>
					Перейти на станицу c компонентом AnotherComponent
				</Link>
				<Link to='/modal' className={styles.link}>
					Перейти на станицу c компонентом Modal
				</Link>
				<Link to='/myBox' className={styles.link}>
					Перейти в my-Box Component
				</Link>
			</div>
			<Routes>
				<Route
					path='/modal'
					element={
						<Suspense fallback={<div>Loading...</div>}>
							<Modal />
						</Suspense>
					}
				/>
				<Route
					path='/another'
					element={
						<Suspense fallback={<div>Loading...</div>}>
							<AnotherComponent />
						</Suspense>
					}
				/>
				<Route
					path='/myBox'
					element={
						<Suspense fallback={<div>Loading...</div>}>
							<MyBox />
						</Suspense>
					}
				/>
			</Routes>
		</div>
	);
};
