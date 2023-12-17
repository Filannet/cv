import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

export const fetchEducation = createAsyncThunk(
    'education/fetch-education',
    async () => {
        return await fetch('/api/educations')
            .then((data) => data.json());
});

interface Education {
    date: number;
    title: string;
    text: string
}

type StateType = {
    items: Array<Education>,
    isLoading: boolean,
    isError: boolean,
}

const initialState: StateType = {
    items: [],
    isLoading: false,
    isError: false,
};

const educationSlice = createSlice({
    name: 'education',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchEducation.pending, state => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(fetchEducation.fulfilled, (state, action) => {
                state.items = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchEducation.rejected, state => {
                state.isLoading = false;
                state.isError = true;
            })
    },
})

export default educationSlice.reducer;
