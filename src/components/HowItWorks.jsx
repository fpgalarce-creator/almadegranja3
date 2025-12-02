const steps = [
  {
    title: 'Arma tu pedido',
    description: 'Elige tus productos frescos y artesanales desde nuestra tienda organizada por categorías.',
  },
  {
    title: 'Envío por WhatsApp',
    description: 'Confirmamos disponibilidad y coordinamos tu despacho de forma rápida y personalizada.',
  },
  {
    title: 'Recibe en tu casa',
    description: 'Despachos dedicados en Rancagua, Graneros y Machalí con cadena de frío asegurada.',
  },
];

const HowItWorks = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {steps.map((step) => (
      <div key={step.title} className="card-base p-6">
        <h4 className="text-xl font-heading text-brand-text dark:text-brand-light mb-2">{step.title}</h4>
        <p className="text-sm text-brand-text/80 dark:text-brand-light/80">{step.description}</p>
      </div>
    ))}
  </div>
);

export default HowItWorks;
