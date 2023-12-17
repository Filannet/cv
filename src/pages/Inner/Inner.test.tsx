import {render, screen} from '@testing-library/react';
import {Provider} from "react-redux";
import Inner from "./Inner";
import {store} from "../../redux/store";
import {BrowserRouter} from "react-router-dom";

describe('<Inner />', () => {
    it('should render Inner Page', () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Inner/>
                </BrowserRouter>
            </Provider>
        );

        const aboutSection = screen.getByTestId('box');
        expect(aboutSection).toBeInTheDocument();

        const educationSection = screen.getByTestId('education');
        expect(educationSection).toBeInTheDocument();

        const skillsSection = screen.getByTestId('experience');
        expect(skillsSection).toBeInTheDocument();

        const expertiseSection = screen.getByTestId('skills');
        expect(expertiseSection).toBeInTheDocument();

        const portfolioSection = screen.getByTestId('portfolio');
        expect(portfolioSection).toBeInTheDocument();

        const contactsSection = screen.getByTestId('contacts');
        expect(contactsSection).toBeInTheDocument();

        const feedbackSection = screen.getByTestId('feedback');
        expect(feedbackSection).toBeInTheDocument();

    });
});
