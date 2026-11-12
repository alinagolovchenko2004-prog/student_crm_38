import Header from "./components/Header.jsx";

import StudentList from "./components/StudentList.jsx";

import Footer from "./components/Footer.jsx";

import { students } from "./data/students.js";

import "./App.css";

function App() {

    const studentsCount = students.length;

    return (
        <div className="app">
            <Header />

            <main className="main">

                <h2>
                    Наши студенты
                </h2>

                <p className="students-count">
                    Всего студентов: {studentsCount}
                </p>

                <StudentList
                    students={students}
                />

            </main>

            <Footer />

        </div>
    );

}

export default App;