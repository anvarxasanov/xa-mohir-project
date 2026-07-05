import { Routes, Route, Navigate } from "react-router";
import { useAuth } from "./context/AuthContext";
import { HomePage } from "./pages/HomePage/HomePage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { ProfileHome } from "./pages/ProfilePages/ProfileHome";
import { ProfileInfo } from "./pages/ProfilePages/ProfileInfo";
import { ProfileLayout } from "./pages/ProfilePages/ProfileLayout";
import { AllCoursesProfile } from "./pages/ProfilePages/ProfileCourses";
import { AllProfessionsProfile } from "./pages/ProfilePages/ProfileProfessions";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import "./App.css";

function App() {

    const { isAuthenticated, loading } = useAuth();

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <Routes>
            <Route
                path="/"
                element={isAuthenticated ? <Navigate to="/profile" replace /> : <HomePage />}
            />
            <Route path="/login" element={<LoginPage />} />

            <Route path="/profile" 
                element={
                    <ProtectedRoute>
                        <ProfileLayout />
                    </ProtectedRoute>
                }
            >
                <Route path="/profile" element={<ProfileHome />} />
                <Route path="info" element={<ProfileInfo />} />
                <Route path="courses" element={<AllCoursesProfile />} />
                <Route path="professions" element={<AllProfessionsProfile />} />
            </Route>

        </Routes>
    );
}

export default App;
