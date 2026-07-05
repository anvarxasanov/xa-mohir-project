import './LoginPage.css'
import { Header } from '../../components/Header/Header';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Footer } from '../../components/Footer/Footer';

export function LoginPage() {

    const [form, setForm] = useState({email: '', password: ''});
    const [error, setError] =useState('');
    const navigate = useNavigate();
    const { login } = useAuth();

    function handleChange(e) {
        const {name, value} = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    function handleLogin(e) {
        e.preventDefault();
        const result = login(form.email, form.password);

        if (result.success) {
            navigate('/profile');
        } else {
            setError(result.message);
        }
    }
    return (
        <>
            <Header />

            <div className="login-page">
                <div className="login-card">
                    <h2 className="login-title">Tizimga kirish</h2>
                    <p className="login-subtitle">
                        Hisobingizga kiring va o'qishni davom ettiring
                    </p>

                    <form className="login-form" onSubmit={handleLogin}>
                        <label className="login-label">Email</label>
                        <input
                            type="email"
                            name='email'
                            className="login-input"
                            placeholder="email@mohirdev.uz"
                            value={form.email}
                            onChange={handleChange}
                        />

                        <label className="login-label">Parol</label>
                        <input
                            type="password"
                            name="password"
                            className="login-input"
                            placeholder="••••••••"
                            value={form.password}
                            onChange={handleChange}
                        />

                        {error && <p className='login-error'>{error}</p>}

                        <button type="submit" className="login-btn">Kirish</button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}
