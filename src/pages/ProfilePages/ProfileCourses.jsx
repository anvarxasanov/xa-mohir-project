import { AllCourses } from "../../components/AllCourses/AllCourses";

export function AllCoursesProfile() {
    return (
        <>
            <div className="profile-page">
                <h2 className="profile-section-title">Kurslar</h2>
                <AllCourses />
            </div>
        </>
    )
}