import { Navigate } from 'react-router';
import { useAuth } from '../../context/AuthContext';

export function ProtectedRoute({ children }) {
    const { isAuthenticated, loading } = useAuth();

    if (loading) {
        return <p>Loading...</p>
    }

    if (!isAuthenticated) {
        return <Navigate to='/login' replace />
    }

    return children;
}