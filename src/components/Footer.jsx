const Footer = () => (
  <footer className="bg-brand-muted/50 dark:bg-brand-dark border-t border-brand-muted/50 dark:border-brand-dark mt-12">
    <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-brand-text dark:text-brand-light">
      <div>
        <h3 className="text-xl font-heading mb-3">Alma de Granja</h3>
        <p className="text-sm text-brand-text/80 dark:text-brand-light/80">
          Productos frescos y nobles del campo chileno. Calidad artesanal, sabor auténtico y despacho directo a tu mesa.
        </p>
      </div>
      <div>
        <h4 className="font-semibold mb-2">Despachos</h4>
        <ul className="space-y-1 text-sm">
          <li>Rancagua</li>
          <li>Graneros</li>
          <li>Machalí</li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-2">Contacto</h4>
        <p className="text-sm">correo@almadegranja.cl</p>
        <p className="text-sm">+56 9 1234 5678</p>
      </div>
    </div>
    <div className="text-center text-xs text-brand-text/60 dark:text-brand-light/60 pb-6">
      © {new Date().getFullYear()} Alma de Granja. Todos los derechos reservados.
    </div>
  </footer>
);

export default Footer;
