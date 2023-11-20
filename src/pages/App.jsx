import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthPage from './AuthPage/AuthPage'
import GameLib from './GameLib/GameLib'



const App = () => {

    return (
        <BrowserRouter >
            <Routes >
                <Route path="/auth" element={<AuthPage />} />
                <Route path="/" element={<GameLib />} />
            </Routes>
        </BrowserRouter>
    )
}
export default App