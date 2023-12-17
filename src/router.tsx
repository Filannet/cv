import {createBrowserRouter} from "react-router-dom";
import {Home, Inner} from "./pages";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/inner",
        element: <Inner/>,
    }
]);
