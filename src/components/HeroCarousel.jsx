import { useEffect, useState } from 'react';

const slides = [
  {
    src: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1600&q=80',
    alt: 'Huevos frescos de campo en bandeja rústica',
  },
  {
    src: 'https://images.unsplash.com/photo-1546961329-78bef0414d7c?auto=format&fit=crop&w=1600&q=80',
    alt: 'Tabla rústica con quesos artesanales variados',
  },
  {
    src: 'https://images.unsplash.com/photo-1506368083636-6defb67639ab?auto=format&fit=crop&w=1600&q=80',
    alt: 'Cesta rural con frutos secos y pan casero',
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCurrent((prev) => (prev + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-3xl shadow-soft h-64 sm:h-80">
      {slides.map((slide, index) => (
        <img
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            current === index ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${current === index ? 'bg-brand-primary' : 'bg-white/70'}`}
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
