import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiFetch } from "@/lib/api";
import { TutorCourse } from "./tutorCoursesSlice";

export const fetchTutorCourses = createAsyncThunk<TutorCourse[]>(
    "tutorCourses/fetchAll",
    async () => {
        return await apiFetch<TutorCourse[]>("/courses");
    }
);

export const createTutorCourse = createAsyncThunk<TutorCourse, Omit<TutorCourse, "id" | "students">>(
    "tutorCourses/create",
    async (courseData) => {
        return await apiFetch<TutorCourse>("/courses", {
            method: "POST",
            body: JSON.stringify(courseData),
        });
    }
);

export const updateTutorCourse = createAsyncThunk<TutorCourse, { id: string; updates: Partial<TutorCourse> }>(
    "tutorCourses/update",
    async ({ id, updates }) => {
        return await apiFetch<TutorCourse>(`/courses/${id}`, {
            method: "PUT",
            body: JSON.stringify(updates),
        });
    }
);

export const deleteTutorCourse = createAsyncThunk<string, string>(
    "tutorCourses/delete",
    async (id) => {
        await apiFetch(`/courses/${id}`, { method: "DELETE" });
        return id;
    }
);
