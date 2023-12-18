/** @format */

import { Route, Routes } from 'react-router-dom';
import { path } from './utils/path';
import { PublicLayout, Home, AboutUs, OurAgents, Properties } from './pages/public';

function App() {
    return (
        <div className="w-full min-h-screen relative">
            <Routes>
                <Route path={path.PUBLIC_LAYOUT} element={<PublicLayout />}>
                    <Route path={path.HOME} element={<Home />}></Route>
                    <Route path={path.ABOUT_US} element={<AboutUs />}></Route>
                    <Route path={path.OUR_AGENTS} element={<OurAgents />}></Route>
                    <Route path={path.PROPERTIES} element={<Properties />}></Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
