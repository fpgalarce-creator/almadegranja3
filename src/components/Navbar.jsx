import { useState } from 'react';
import { Menu, ShoppingCart, X } from 'lucide-react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import DarkModeToggle from './DarkModeToggle';

const navItems = [
  { to: '/', label: 'Inicio' },
  { to: '/tienda', label: 'Tienda' },
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/contacto', label: 'Contáctanos' },
];

const Navbar = () => {
  const navigate = useNavigate();
  const { totals, toggleCart } = useCart();
  const { isAuthenticated, user, logout } = useAuth();
  const [open, setOpen] = useState(false);

  const handleLoginClick = () => {
    navigate('/ingresar');
    setOpen(false);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
    setOpen(false);
  };

  return (
    <header className="bg-white/80 dark:bg-brand-dark/80 backdrop-blur-md sticky top-0 z-30 border-b border-brand-muted/40 dark:border-brand-dark">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-brand-primary text-white flex items-center justify-center font-display text-xl shadow-soft">
            AG
          </div>
          <div>
            <p className="text-lg font-display text-brand-text dark:text-brand-light logo-text">Alma de Granja</p>
            <p className="text-xs text-brand-text/70 dark:text-brand-light/70 font-body">Origen rural, calidad premium</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-brand-text dark:text-brand-light font-medium">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `hover:text-brand-primary transition-colors ${isActive ? 'text-brand-primary' : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3 text-sm">
          {isAuthenticated ? (
            <div className="flex items-center gap-3">
              <span className="text-brand-text dark:text-brand-light font-display">Hola, {user?.role === 'admin' ? 'Admin' : user?.email}</span>
              <button
                type="button"
                onClick={handleLogout}
                className="px-4 py-2 rounded-full border border-brand-muted/60 dark:border-brand-muted/30 text-brand-text dark:text-brand-light hover:border-brand-primary"
              >
                Cerrar sesión
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={handleLoginClick}
              className="px-4 py-2 rounded-full border border-brand-muted/60 dark:border-brand-muted/30 text-brand-text dark:text-brand-light hover:border-brand-primary"
            >
              Ingresar
            </button>
          )}
          <button
            type="button"
            onClick={toggleCart}
            className="relative w-11 h-11 rounded-full bg-brand-primary text-white flex items-center justify-center shadow-soft hover:shadow-md transition-shadow"
            aria-label="Abrir carrito"
          >
            <ShoppingCart size={22} strokeWidth={1.75} />
            {totals.count > 0 && (
              <span className="absolute -top-1 -right-1 bg-white text-brand-primary text-xs px-2 py-0.5 rounded-full shadow-soft">
                {totals.count}
              </span>
            )}
          </button>
          <DarkModeToggle />
        </div>

        <button
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-full border border-brand-muted/60 dark:border-brand-muted/30"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        >
          {open ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white dark:bg-brand-dark border-t border-brand-muted/40 dark:border-brand-dark px-4 pb-4 space-y-3">
          <nav className="flex flex-col gap-2 text-brand-text dark:text-brand-light">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-2 border-b border-brand-muted/40 ${isActive ? 'text-brand-primary font-semibold' : ''}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center justify-between gap-3">
            {isAuthenticated ? (
              <button
                type="button"
                onClick={handleLogout}
                className="px-4 py-2 rounded-full border border-brand-muted/60 dark:border-brand-muted/30 text-brand-text dark:text-brand-light hover:border-brand-primary"
              >
                Cerrar sesión
              </button>
            ) : (
              <button
                type="button"
                onClick={handleLoginClick}
                className="px-4 py-2 rounded-full border border-brand-muted/60 dark:border-brand-muted/30 text-brand-text dark:text-brand-light hover:border-brand-primary"
              >
                Ingresar
              </button>
            )}
            <button
              type="button"
              onClick={() => {
                toggleCart();
                setOpen(false);
              }}
              className="relative flex-1 px-4 py-2 rounded-full bg-brand-primary text-white flex items-center justify-center gap-2"
            >
              <ShoppingCart size={20} strokeWidth={1.75} />
              <span>Carrito</span>
              {totals.count > 0 && (
                <span className="bg-white text-brand-primary text-xs px-2 py-0.5 rounded-full shadow-soft">
                  {totals.count}
                </span>
              )}
            </button>
            <DarkModeToggle />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
