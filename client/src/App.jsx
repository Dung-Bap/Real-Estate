/** @format */

import { Route, Routes } from "react-router-dom";
import { path } from "./utils/path";
import { PublicLayout, Home } from "./pages/public";

function App() {
    return (
        <div className="w-full min-h-screen relative">
            <Routes>
                <Route path={path.PUBLIC_LAYOUT} element={<PublicLayout />}>
                    <Route path={path.HOME} element={<Home />}></Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
