// /redux/store/tutorSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TutorProfile {
    name: string;
    email: string;
    bio: string;
    specialization: string;
}

const initialState: TutorProfile = {
    name: "John Doe",
    email: "johndoe@example.com",
    bio: "Passionate web developer and tutor with 5 years of teaching experience.",
    specialization: "Full-Stack Development",
};

const tutorSlice = createSlice({
    name: "tutor",
    initialState,
    reducers: {
        updateTutor: (state, action: PayloadAction<Partial<TutorProfile>>) => {
            return { ...state, ...action.payload };
        },
    },
});

export const { updateTutor } = tutorSlice.actions;
export default tutorSlice.reducer;
