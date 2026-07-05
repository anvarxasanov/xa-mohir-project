import { ProfileProfessions } from "./ProfileProfessions";
import { ProfileCourses } from "./ProfileCourses";
import "./ProfilePage.css";

export function ProfileHome() {
    return (
        <>
            <div className="profile-page">

                <h2 className="profile-section-title">Mening Kasblarim</h2>
                <ProfileProfessions />

                <h2 className="profile-section-title">Mening Kurslarim</h2>
                <ProfileCourses />
            </div>
        </>
    );
}
