"use client";

import { useAppDispatch } from "@/redux/store/hooks";
import { askQuestion } from "@/redux/store/qaThunks";

export default function AskQuestionForm({
    courseId,
    courseTitle,
}: {
    courseId: number;
    courseTitle: string;
}) {
    const dispatch = useAppDispatch();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const input = form.elements.namedItem("question") as HTMLInputElement;

        if (input.value.trim()) {
            dispatch(
                askQuestion({
                    courseId,
                    courseTitle,
                    student: "John Doe", // later replace with logged-in user
                    question: input.value,
                })
            );
            input.value = "";
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-2">
            <textarea
                name="question"
                className="w-full border rounded-md p-2"
                placeholder="Ask your question..."
            />
            <button className="bg-purple-600 text-white px-4 py-2 rounded">
                Submit Question
            </button>
        </form>
    );
}
