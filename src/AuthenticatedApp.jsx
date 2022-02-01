import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import Home from './Page/Home/Home';
import Profile from './Page/Profile/Profile';

function AuthenticatedApp() {
	return (
		<>
			{/* <Home /> */}
			<main>
				<Routes>
					<Route path='' element={<Home />} />
					<Route path='channel/:id' element={<Profile />} />
				</Routes>
			</main>
		</>
	);
}

export default AuthenticatedApp;
