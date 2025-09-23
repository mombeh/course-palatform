import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Question {
    id: number;
    courseId: number;
    courseTitle: string;
    student: string;
    question: string;
    answer: string | null;
    date: string;
}

interface QAState {
    questions: Question[];
}

const initialState: QAState = {
    questions: [],
};

const qaSlice = createSlice({
    name: "qa",
    initialState,
    reducers: {
        setQuestions: (state, action: PayloadAction<Question[]>) => {
            state.questions = action.payload;
        },
        addAnswer: (
            state,
            action: PayloadAction<{ id: number; answer: string }>
        ) => {
            const q = state.questions.find((q) => q.id === action.payload.id);
            if (q) q.answer = action.payload.answer;
        },
    },
});

export const { setQuestions, addAnswer } = qaSlice.actions;
export default qaSlice.reducer;
