import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [form, setForm] = useState({ email: 'admin@almadegranja.cl', password: 'Admin123' });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const result = login(form.email, form.password);
    if (result.success) {
      const redirectTo = location.state?.from || '/admin';
      navigate(redirectTo, { replace: true });
    } else {
      setError(result.message || 'Credenciales inválidas');
    }
  };

  return (
    <div className="max-w-md mx-auto px-4 py-12 space-y-6">
      <div className="space-y-2 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-brand-text/70 dark:text-brand-light/70">Alma de Granja</p>
        <h1 className="text-4xl font-display text-brand-text dark:text-brand-light">Ingresar</h1>
        <p className="section-subtitle">Accede al panel administrativo con tu usuario autorizado.</p>
      </div>

      <form onSubmit={handleSubmit} className="card-base p-6 space-y-4">
        <div className="space-y-3">
          <label className="text-sm text-brand-text/80 dark:text-brand-light/80 font-semibold" htmlFor="email">
            Correo electrónico
          </label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
            className="w-full px-4 py-3 rounded-xl border border-brand-muted/50 dark:border-brand-dark bg-white dark:bg-brand-dark text-brand-text dark:text-brand-light"
            required
          />
        </div>
        <div className="space-y-3">
          <label className="text-sm text-brand-text/80 dark:text-brand-light/80 font-semibold" htmlFor="password">
            Contraseña
          </label>
          <input
            id="password"
            type="password"
            value={form.password}
            onChange={(e) => setForm((prev) => ({ ...prev, password: e.target.value }))}
            className="w-full px-4 py-3 rounded-xl border border-brand-muted/50 dark:border-brand-dark bg-white dark:bg-brand-dark text-brand-text dark:text-brand-light"
            required
          />
        </div>
        <button type="submit" className="btn-primary w-full">
          Ingresar
        </button>
        {error && <p className="text-sm text-red-600">{error}</p>}
        <p className="text-xs text-brand-text/60 dark:text-brand-light/60">
          Usa las credenciales de administrador proporcionadas para acceder al panel.
        </p>
      </form>
    </div>
  );
};

export default Login;
