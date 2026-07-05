import { courses } from "../../data/my-courses";

export function ProfileCourses() {
    return (
        <>
            <div className="profs-grid">
                {courses.map((course) => (
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
