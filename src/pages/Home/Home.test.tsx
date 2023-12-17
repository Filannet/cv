import {render, screen} from '@testing-library/react';
import {Provider} from "react-redux";
import Home from "./Home";
import {store} from "../../redux/store";
import {BrowserRouter} from "react-router-dom";

describe('<Home />', () => {
    it('should render Home Page', () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Home/>
                </BrowserRouter>
            </Provider>
        );

        const section = screen.getByText(/Know more/i);
        expect(section).toBeInTheDocument();

    });
});
