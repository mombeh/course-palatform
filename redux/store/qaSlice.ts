// /redux/store/qaSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addNotification } from "./notificationSlice"; // 👈 import notification

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
        addQuestion: {
            reducer: (state, action: PayloadAction<Question>) => {
                state.questions.unshift(action.payload);
            },
            // 👇 prepare callback lets us also trigger side effects like notifications
            prepare: (question: Omit<Question, "id" | "date" | "answer">) => {
                const newQuestion: Question = {
                    id: Date.now(),
                    date: new Date().toLocaleDateString(),
                    answer: null,
                    ...question,
                };

                return { payload: newQuestion };
            },
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

export const { setQuestions, addQuestion, addAnswer } = qaSlice.actions;
export default qaSlice.reducer;
