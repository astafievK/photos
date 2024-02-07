import './index.css'
import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import PageIndex from "./components/PageIndex/PageIndex.tsx";
import { Provider } from 'react-redux';
import {PersistGate} from "redux-persist/integration/react";
import {persistor, store} from "./store/store.ts";

const Root = () => {
    return (
        <>
            <Outlet/>
        </>
    )
}

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />}>
            <Route path="" element={
                <>
                    <PageIndex/>
                </>
            } />
        </Route>
    ))


function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <RouterProvider router={router} />
            </PersistGate>
        </Provider>
    )
}

export default App
