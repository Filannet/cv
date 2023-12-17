import {act, fireEvent, render, screen, waitFor} from '@testing-library/react';
import {Provider} from "react-redux";
import {store} from "../../redux/store";
import {BrowserRouter} from "react-router-dom";
import SkillForm from "./SkillForm";

describe('<SkillForm />', () => {
    it('should render Skill Form', () => {

        render(
            <Provider store={store}>
                <BrowserRouter>
                    <SkillForm/>
                </BrowserRouter>
            </Provider>
        );

        const skillName = screen.getByText(/Skill name:/i);
        expect(skillName).toBeInTheDocument();

        const skillRange = screen.getByText(/Skill range:/i);
        expect(skillRange).toBeInTheDocument();

        const button = screen.getByText(/Add skill/i);
        expect(button).toBeInTheDocument();
    });

    it("should render correct values", async () => {

            render(
                <Provider store={store}>
                        <SkillForm/>
                </Provider>
            );

            const skillName = screen.getByTestId("name") as HTMLInputElement;
            const skillRange = screen.getByTestId("range") as HTMLInputElement;

            await act(async () => {
                fireEvent.change(skillName, {
                    target: { value: "Test Skill" }
                });

                fireEvent.change(skillRange, {
                    target: { value: "100" }
                });
            });

            await waitFor(() => expect(skillName.value).toBe('Test Skill'));
            await waitFor(() => expect(skillRange.value).toBe('100'));
    });

});
