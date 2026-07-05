import { professionsAll } from "../../data/all-professions";
import { coursesAll } from "../../data/all-courses";
import { myCourses } from "../../data/all-courses";
import { myProfessions } from "../../data/all-professions";

import './CoursesProfs.css'

// Generate list of all courses of the platform
export function AllCourses() {
    return (
        <>
            <div className="profs-grid">
                {coursesAll.map((course) => (
                    <div key={course.id} className="prof-card">
                        <div className="prof-card__image">
                            <img src={course.image} alt={course.name} />
                        </div>
                        <div className="prof-card__body">
                            <p className="prof-card__students">👤 {course.students} o'quvchi</p>
                            <h3 className="prof-card__title">{course.name}</h3>
                            <div className="prof-card__price">{course.price}</div>
                            <div className="prof-card__buttons">
                                <button className="prof-card__btn">Batafsil</button>
                                <button className="prof-card__btn prof-card__btn--filled">Darsni boshlash</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

// Generate list of all professions of the platform
export function AllProfessions() {
    return (
        <>
            <div className="profs-grid">
                {professionsAll.map((course) => (
                    <div key={course.id} className="prof-card">
                        <div className="prof-card__image">
                            <img src={course.image} alt={course.name} />
                        </div>
                        <div className="prof-card__body">
                            <p className="prof-card__students">👤 {course.students} o'quvchi</p>
                            <h3 className="prof-card__title">{course.name}</h3>
                            <div className="prof-card__price">{course.price}</div>
                            <div className="prof-card__buttons">
                                <button className="prof-card__btn">Batafsil</button>
                                <button className="prof-card__btn prof-card__btn--filled">Darsni boshlash</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}


// Generate list of all user's courses on the platform
export function ProfileCourses() {
    return (
        <>
            <div className="profs-grid">
                {myCourses.map((course) => (
                    <div key={course.id} className="prof-card">
                        <div className="prof-card__image">
                            <img src={course.image} alt={course.name} />
                        </div>
                        <div className="prof-card__body">
                            <h3 className="prof-card__title">{course.name}</h3>
                            <div className="prof-card__progress-wrap">
                                <div className="prof-card__progress-bar">
                                    <div
                                        className="prof-card__progress-fill"
                                        style={{ width: `${course.progress}%` }}
                                    />
                                </div>
                                <span className="prof-card__percent">
                                    {course.progress}%
                                </span>
                            </div>
                            <button className="prof-card__btn">
                                Darsni davom ettirish
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}


// Generate list of all user's professions on the platform
export function ProfileProfessions() {
    return (
        <>
            <div className="profs-grid">
                {myProfessions.map((prof) => (
                    <div key={prof.id} className="prof-card">
                        <div className="prof-card__image">
                            <img src={prof.image} alt={prof.name} />
                        </div>
                        <div className="prof-card__body">
                            <h3 className="prof-card__title">{prof.name}</h3>
                            <div className="prof-card__progress-wrap">
                                <div className="prof-card__progress-bar">
                                    <div
                                        className="prof-card__progress-fill"
                                        style={{ width: `${prof.progress}%` }}
                                    />
                                </div>
                                <span className="prof-card__percent">
                                    {prof.progress}%
                                </span>
                            </div>
                            <button className="prof-card__btn">
                                Darsni davom ettirish
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
