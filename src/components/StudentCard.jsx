
import StatusBadge from "./StatusBadge.jsx";


function StudentCard({ student }) {

    return (
        <div className="student-card">
            <div className="student-card-header">
                <h3>
                    {student.name}
                </h3>

                <StatusBadge
                    isActive={student.isActive}
                />
            </div>
            <p>
                Возраст: {student.age}
            </p>
            <p>
                Группа: {student.group}
            </p>

            {}
            {student.age < 18 && (

                <p className="student-warning">
                    Несовершеннолетний студент
                </p>
            )}
        </div>
    );

}

export default StudentCard;