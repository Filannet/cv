import {createSlice} from '@reduxjs/toolkit'
import {skillItems} from "../../mocks";

interface Skill {
    name: string,
    range: number
}

type StateType = {
    items: Array<Skill>,
    isFormShown: boolean
}

const initialState: StateType = {
    items: [],
    isFormShown: false
};

const getSkillsFromLocalStorage = (): Array<Skill> => {
    return [...skillItems, ...JSON.parse(localStorage.getItem('skills') ?? '[]')];
}

const skillsSlice = createSlice({
    name: 'skills',
    initialState,
    reducers: {
        setIsFormShown: (state, action) => {
            state.isFormShown = action.payload;
        },
        getSkills: (state) => {
            state.items = getSkillsFromLocalStorage();
        },
        setSkill: (state, action) => {
            localStorage.setItem('skills', JSON.stringify([...getSkillsFromLocalStorage(), action.payload]));
            state.items = [...state.items, action.payload];
        },
    },
})

export const { setIsFormShown, getSkills, setSkill } = skillsSlice.actions;
export default skillsSlice.reducer;
