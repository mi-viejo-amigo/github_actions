import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './app';
import { Analytic } from './context/analityc';
import './styles.css';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);
root.render(
	<StrictMode>
		<Analytic.Provider value={{ yandexId: 98549934, googleId: 'G-YYY4K5BDR3' }}>
			<BrowserRouter
				basename={process.env.PUBLIC_PATH ? process.env.PUBLIC_PATH : '/'}>
				<App />
			</BrowserRouter>
		</Analytic.Provider>
	</StrictMode>
);
