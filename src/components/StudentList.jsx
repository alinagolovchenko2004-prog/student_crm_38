
import StudentCard from "./StudentCard.jsx";


function StudentList({ students }) {

    if (students.length === 0) {
        return (
            <p className="empty-message">
                Список студентов пока пуст.
            </p>
        );
    }

    return (
        <div className="students-container">
            {students.map((student) => (
                <StudentCard
                    key={student.id}
                    student={student}
                />
            ))}
        </div>
    );
}

export default StudentList;