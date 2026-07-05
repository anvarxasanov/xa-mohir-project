import { useAuth } from "../../context/AuthContext";
import './ProfilePage.css'

export function ProfileInfo() {
    const { user, logout } = useAuth();

    return (
        <div className="profile-info-page">

            <div className="greeting">
                <p className="profile-welcome">
                    Salom, <span>{user?.email}</span>
                </p>
                <button className="logout-btn" onClick={logout}>
                    Chiqish
                </button>
            </div>

            <div className="user-info">
                <h2>Your profile information:</h2>
                <p>Email: <span>{user?.email}</span></p>
                <p>Password: <span>{user?.password}</span></p>
            </div>
            
        </div>
    );
}
