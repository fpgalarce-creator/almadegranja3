import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const CartContext = createContext();

const CART_KEY = 'almadegranja_cart';

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState(() => {
    const stored = localStorage.getItem(CART_KEY);
    return stored ? JSON.parse(stored) : [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [customer, setCustomer] = useState({
    firstName: '',
    lastName: '',
    address: '',
    notes: '',
  });

  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(items));
  }, [items]);

  const addItem = (product, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: Math.min(item.quantity + quantity, product.stock) }
            : item
        );
      }
      return [...prev, { ...product, quantity: Math.min(quantity, product.stock) }];
    });
  };

  const updateQuantity = (id, quantity) => {
    setItems((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, quantity } : item))
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => setItems((prev) => prev.filter((item) => item.id !== id));

  const clearCart = () => setItems([]);

  const toggleCart = () => setIsCartOpen((prev) => !prev);
  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const totals = useMemo(() => {
    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const count = items.reduce((sum, item) => sum + item.quantity, 0);
    return { subtotal, count };
  }, [items]);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        updateQuantity,
        removeItem,
        clearCart,
        totals,
        isCartOpen,
        toggleCart,
        openCart,
        closeCart,
        customer,
        setCustomer,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
