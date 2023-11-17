import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthPage from '../pages/AuthPage/AuthPage'

const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/auth" element={<AuthPage/>}/>
                <Route />
            </Routes>
        </BrowserRouter>
    )
}
export default App