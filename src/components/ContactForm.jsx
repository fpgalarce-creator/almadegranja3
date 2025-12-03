import { useState } from 'react';
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'TU_SERVICE_ID';
const TEMPLATE_ID = 'TU_TEMPLATE_ID';
const PUBLIC_KEY = 'TU_PUBLIC_KEY';

const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus({ type: 'error', message: 'Nombre, correo y mensaje son obligatorios.' });
      return;
    }

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus({ type: 'error', message: 'Configura SERVICE_ID, TEMPLATE_ID y PUBLIC_KEY de EmailJS para enviar correos a f.pgalarce@gmail.com.' });
      return;
    }

    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          to_email: 'f.pgalarce@gmail.com',
          from_name: form.name,
          reply_to: form.email,
          phone: form.phone,
          subject: form.subject || 'Consulta Alma de Granja',
          message: form.message,
        },
        PUBLIC_KEY,
      );

      setStatus({ type: 'success', message: 'Mensaje enviado correctamente. Te contactaremos a la brevedad.' });
      setForm({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      setStatus({ type: 'error', message: 'Ocurrió un error al enviar. Intenta nuevamente o escríbenos por WhatsApp.' });
      // eslint-disable-next-line no-console
      console.error('EmailJS error', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="card-base p-6 space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Nombre"
          className="w-full px-4 py-3 rounded-xl border border-brand-muted/50 dark:border-brand-dark bg-white dark:bg-brand-dark text-brand-text dark:text-brand-light"
          required
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Correo"
          className="w-full px-4 py-3 rounded-xl border border-brand-muted/50 dark:border-brand-dark bg-white dark:bg-brand-dark text-brand-text dark:text-brand-light"
          required
        />
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Teléfono"
          className="w-full px-4 py-3 rounded-xl border border-brand-muted/50 dark:border-brand-dark bg-white dark:bg-brand-dark text-brand-text dark:text-brand-light"
        />
        <input
          name="subject"
          value={form.subject}
          onChange={handleChange}
          placeholder="Asunto"
          className="w-full px-4 py-3 rounded-xl border border-brand-muted/50 dark:border-brand-dark bg-white dark:bg-brand-dark text-brand-text dark:text-brand-light"
        />
      </div>
      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Mensaje"
        rows="4"
        className="w-full px-4 py-3 rounded-xl border border-brand-muted/50 dark:border-brand-dark bg-white dark:bg-brand-dark text-brand-text dark:text-brand-light"
        required
      />
      <button type="submit" className={`btn-primary w-full md:w-auto ${loading ? 'opacity-70 cursor-not-allowed' : ''}`} disabled={loading}>
        {loading ? 'Enviando...' : 'Enviar mensaje'}
      </button>
      {status.message && (
        <p className={`text-sm ${status.type === 'error' ? 'text-red-600' : 'text-green-700'}`}>
          {status.message}
        </p>
      )}
    </form>
  );
};

export default ContactForm;
