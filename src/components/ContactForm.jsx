import { useState } from 'react';

const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías integrar EmailJS o tu servicio favorito
    setStatus('Mensaje preparado. Configura EmailJS para enviarlo.');
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
      <button type="submit" className="btn-primary w-full md:w-auto">
        Enviar mensaje
      </button>
      {status && <p className="text-sm text-brand-text/70 dark:text-brand-light/70">{status}</p>}
    </form>
  );
};

export default ContactForm;
