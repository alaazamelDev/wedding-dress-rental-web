import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/HomePage/HomePage.tsx";
import {DressDetailsPage} from "./pages/DressDetailsPage/DressDetailsPage.tsx";
import {AccountPage} from "./pages/AccountPage/AccountPage.tsx";


const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/dress/:id" element={<DressDetailsPage/>}/>
                <Route path="/account" element={<AccountPage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;