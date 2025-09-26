// /redux/store/qaThunks.ts
import { AppDispatch } from "./store";
import { addQuestion } from "./qaSlice";
import { addNotification } from "./notificationSlice";

export const askQuestion =
    (question: { courseId: number; courseTitle: string; student: string; question: string }) =>
        (dispatch: AppDispatch) => {
            dispatch(addQuestion(question));

            dispatch(
                addNotification({
                    type: "question",
                    message: `New question on ${question.courseTitle} from ${question.student}`,
                    date: new Date().toLocaleString(),
                })
            );
        };
