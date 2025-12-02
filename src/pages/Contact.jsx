import ContactForm from '../components/ContactForm';
import WhatsAppFloatingButton from '../components/WhatsAppFloatingButton';

const Contact = () => (
  <div className="max-w-6xl mx-auto px-4 py-10 space-y-8">
    <header className="space-y-2">
      <h1 className="section-title">Conversemos</h1>
      <p className="section-subtitle">Estamos listos para ayudarte a armar tu pedido.</p>
    </header>

    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
      <div className="card-base p-6 space-y-3">
        <h2 className="text-2xl font-heading text-brand-text dark:text-brand-light">Canales de contacto</h2>
        <p className="text-brand-text/80 dark:text-brand-light/80">
          Escríbenos por el canal que prefieras y coordinamos rápidamente.
        </p>
        <ul className="space-y-2 text-sm text-brand-text dark:text-brand-light">
          <li>📧 correo@almadegranja.cl</li>
          <li>📞 +56 9 1234 5678</li>
          <li>🕑 Lunes a sábado, 09:00 - 19:00 hrs</li>
        </ul>
        <a
          href="https://wa.me/56912345678"
          target="_blank"
          rel="noreferrer"
          className="btn-primary inline-block text-center"
        >
          Escribir por WhatsApp
        </a>
      </div>
      <ContactForm />
    </section>
    <WhatsAppFloatingButton />
  </div>
);

export default Contact;
