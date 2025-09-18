import Link from "next/link";
import { students } from "../../../data/mockStudents";

export default function StudentsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">My Students</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2">Course</th>
              <th className="px-4 py-2">Enrolled At</th>
              <th className="px-4 py-2">Progress</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="border-t">
                <td className="px-4 py-2">
                  <Link
                    href={`/tutor/students/${student.id}`}
                    className="text-purple-600 hover:underline"
                  >
                    {student.name}
                  </Link>
                </td>
                <td className="px-4 py-2">{student.email}</td>
                <td className="px-4 py-2">{student.course}</td>
                <td className="px-4 py-2">{student.enrolledAt}</td>
                <td className="px-4 py-2">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-purple-600 h-2 rounded-full"
                      style={{ width: `${student.progress}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600">
                    {student.progress}%
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
