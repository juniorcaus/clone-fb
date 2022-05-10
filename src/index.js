import App from './App';
import { createRoot } from 'react-dom/client';
import AuthProvider from './contexts/auth';

const root = createRoot(document.querySelector("#root"));

root.render(
    <AuthProvider>
        <App />
    </AuthProvider>
);