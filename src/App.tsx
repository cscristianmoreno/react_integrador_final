import React, { ReactElement } from "react";
import { RequestInterceptor } from "./interceptors/request.interceptor";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexSection from "./views/index/index.section";
import ListSection from "./views/list/list.section";
import CreateSection from "./views/create/create.section";
import { GlobalContextProvider } from "./global/state.global";
import { UsersAI } from "./ai/users.ai";

const App: React.FC = (): ReactElement => {
    new RequestInterceptor();
    new UsersAI();

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <GlobalContextProvider>
                        <IndexSection/>
                    </GlobalContextProvider>
                }/>
                <Route path="/list" element={
                    <GlobalContextProvider>
                        <ListSection/>
                    </GlobalContextProvider>
                }/>
                <Route path="*" element={
                    <GlobalContextProvider>
                        <CreateSection/>
                    </GlobalContextProvider>
                }/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;