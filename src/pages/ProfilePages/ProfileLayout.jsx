import { Outlet } from "react-router";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";

export function ProfileLayout() {
    return (
        <>
            {/* <Header />
            <Outlet />
            <Footer /> */}
            <div className="profile-layout">
                <Header />
                <Outlet />
                <Footer />
            </div>
        </>
    );
}
