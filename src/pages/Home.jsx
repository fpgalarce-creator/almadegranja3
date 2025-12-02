import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import HeroCarousel from '../components/HeroCarousel';
import HowItWorks from '../components/HowItWorks';
import ProductList from '../components/ProductList';
import WhatsAppFloatingButton from '../components/WhatsAppFloatingButton';
import { useProducts } from '../context/ProductsContext';

const Home = () => {
  const { products } = useProducts();
  const featured = products.filter((p) => p.featured).slice(0, 4);

  return (
    <div className="space-y-12">
      <section className="max-w-6xl mx-auto px-4 pt-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.2em] text-brand-text/70 dark:text-brand-light/70">Alma de Granja</p>
          <h1 className="text-4xl md:text-5xl font-heading text-brand-text dark:text-brand-light leading-tight">
            El alma del campo en tu mesa.
          </h1>
          <p className="text-lg text-brand-text/80 dark:text-brand-light/80">
            Huevos, quesos, miel, frutos secos y más del campo chileno con un servicio premium y cercano.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/tienda" className="btn-primary">
              Ver tienda
            </Link>
            <Link
              to="/contacto"
              className="btn-secondary flex items-center gap-2"
            >
              Contáctanos
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="card-base p-4">
              <p className="text-sm text-brand-text/70 dark:text-brand-light/70">Despacho dedicado</p>
              <p className="text-lg font-semibold">Rancagua y alrededores</p>
            </div>
            <div className="card-base p-4">
              <p className="text-sm text-brand-text/70 dark:text-brand-light/70">Calidad artesanal</p>
              <p className="text-lg font-semibold">Productores locales</p>
            </div>
          </div>
        </div>
        <HeroCarousel />
      </section>

      <section className="max-w-6xl mx-auto px-4 space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div>
            <h2 className="section-title">¿Cómo funciona?</h2>
            <p className="section-subtitle">3 pasos para que disfrutes los mejores sabores de campo.</p>
          </div>
          <Link to="/contacto" className="btn-secondary">Coordinar por WhatsApp</Link>
        </div>
        <HowItWorks />
      </section>

      <section className="max-w-6xl mx-auto px-4 space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div>
            <h2 className="section-title">Destacados de la semana</h2>
            <p className="section-subtitle">Selección premium lista para tu próximo pedido.</p>
          </div>
          <Link to="/tienda" className="btn-primary">Ver todo</Link>
        </div>
        <ProductList products={featured} />
      </section>

      <section className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        <div className="md:col-span-1 card-base p-6 space-y-2">
          <h3 className="text-2xl font-heading text-brand-text dark:text-brand-light">Conversemos</h3>
          <p className="text-brand-text/80 dark:text-brand-light/80">
            Escríbenos para coordinar pedidos especiales, eventos o suscripciones.
          </p>
          <div className="space-y-2 text-sm text-brand-text dark:text-brand-light">
            <p>📧 correo@almadegranja.cl</p>
            <p>📞 +56 9 1234 5678</p>
            <p>🕑 Lunes a sábado, 09:00 - 19:00 hrs.</p>
          </div>
          <a
            href="https://wa.me/56912345678"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary inline-block text-center w-full"
          >
            Escribir por WhatsApp
          </a>
        </div>
        <div className="md:col-span-2">
          <ContactForm />
        </div>
      </section>

      <WhatsAppFloatingButton />
    </div>
  );
};

export default Home;
