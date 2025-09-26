"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store/store";
import { updateTutor } from "@/redux/store/tutorSlice";
import { useState } from "react";

export default function ProfileSettings() {
    const tutor = useSelector((state: RootState) => state.tutor);
    const dispatch = useDispatch();

    const [form, setForm] = useState({
        name: tutor.name,
        email: tutor.email,
        bio: tutor.bio,
        specialization: tutor.specialization,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSave = () => {
        dispatch(updateTutor(form));
        alert("Profile updated!");
    };

    return (
        <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
            <h2 className="text-xl font-semibold">Profile Settings</h2>

            <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full border p-2 rounded"
            />

            <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full border p-2 rounded"
            />

            <input
                name="specialization"
                value={form.specialization}
                onChange={handleChange}
                placeholder="Specialization"
                className="w-full border p-2 rounded"
            />

            <textarea
                name="bio"
                value={form.bio}
                onChange={handleChange}
                placeholder="Bio"
                className="w-full border p-2 rounded"
            />

            <button
                onClick={handleSave}
                className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
            >
                Save Changes
            </button>
        </div>
    );
}
