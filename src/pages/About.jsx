const milestones = [
  { year: '2010', text: 'La familia Pujado inicia la venta de huevos de campo en ferias locales.' },
  { year: '2018', text: 'Se suman quesos artesanales y miel de productores aliados de la región.' },
  { year: '2024', text: 'Nace Alma de Granja como marca premium con entregas personalizadas.' },
];

const values = [
  { title: 'Frescura', description: 'Cosechas y producciones recientes, cadena de frío y control de calidad en cada entrega.' },
  { title: 'Confianza', description: 'Relación cercana con productores y clientes, con transparencia en origen y precios.' },
  { title: 'Origen local', description: 'Trabajamos con pequeñas granjas y queserías de la zona de O’Higgins.' },
  { title: 'Sostenibilidad', description: 'Preferimos insumos reutilizables, rutas optimizadas y empaques responsables.' },
];

const About = () => (
  <div className="max-w-6xl mx-auto px-4 py-10 space-y-10">
    <header className="space-y-2">
      <h1 className="section-title">Nuestra historia</h1>
      <p className="section-subtitle">Un camino de campo, familia y oficio artesanal.</p>
    </header>

    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
      <div className="card-base p-6 space-y-3">
        <h2 className="text-2xl font-heading text-brand-text dark:text-brand-light">Storytelling</h2>
        <p className="text-brand-text/80 dark:text-brand-light/80">
          Desde los primeros repartos a vecinos hasta la logística actual, mantenemos la misma promesa: productos nobles que
          respetan el trabajo de cada productor. Hoy combinamos tradición con procesos modernos para que recibas en casa la
          frescura del campo.
        </p>
      </div>
      <div className="card-base p-6 space-y-4">
        <h2 className="text-2xl font-heading text-brand-text dark:text-brand-light">Línea de tiempo</h2>
        <div className="relative pl-6 border-l border-brand-muted/60 dark:border-brand-dark space-y-4">
          {milestones.map((item) => (
            <div key={item.year} className="relative">
              <span className="absolute -left-3 top-1 w-2.5 h-2.5 rounded-full bg-brand-primary" />
              <p className="text-sm text-brand-primary font-semibold">{item.year}</p>
              <p className="text-brand-text dark:text-brand-light">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="space-y-4">
      <h2 className="section-title">Valores que nos mueven</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {values.map((value) => (
          <div key={value.title} className="card-base p-5 space-y-2">
            <h3 className="text-xl font-heading text-brand-text dark:text-brand-light">{value.title}</h3>
            <p className="text-sm text-brand-text/80 dark:text-brand-light/80">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default About;
