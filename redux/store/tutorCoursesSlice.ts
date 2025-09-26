import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchTutorCourses, createTutorCourse, updateTutorCourse, deleteTutorCourse } from "./tutorCoursesThunks";

export type TutorCourse = {
    id: string;
    title: string;
    price: number;
    description: string;
    status: "Draft" | "Published";
    students: number;
};

interface TutorCourseState {
    courses: TutorCourse[];
    loading: boolean;
    error: string | null;
}

const initialState: TutorCourseState = {
    courses: [],
    loading: false,
    error: null,
};

const tutorCoursesSlice = createSlice({
    name: "tutorCourses",
    initialState,
    reducers: {
        addCourse: (state, action: PayloadAction<TutorCourse>) => {
            state.courses.push(action.payload);
        },
        updateCourse: (state, action: PayloadAction<TutorCourse>) => {
            state.courses = state.courses.map((c) =>
                c.id === action.payload.id ? action.payload : c
            );
        },
        toggleStatus: (state, action: PayloadAction<string>) => {
            const course = state.courses.find((c) => c.id === action.payload);
            if (course) {
                course.status =
                    course.status === "Published" ? "Draft" : "Published";
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTutorCourses.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchTutorCourses.fulfilled, (state, action) => {
                state.loading = false;
                state.courses = action.payload;
            })
            .addCase(fetchTutorCourses.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to fetch courses";
            })
            .addCase(createTutorCourse.fulfilled, (state, action) => {
                state.courses.push(action.payload);
            })
            .addCase(updateTutorCourse.fulfilled, (state, action) => {
                state.courses = state.courses.map((c) =>
                    c.id === action.payload.id ? action.payload : c
                );
            })
            .addCase(deleteTutorCourse.fulfilled, (state, action) => {
                state.courses = state.courses.filter((c) => c.id !== action.payload);
            });
    },
});

export const { addCourse, updateCourse, toggleStatus } = tutorCoursesSlice.actions;
export default tutorCoursesSlice.reducer;
