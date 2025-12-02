const SortBar = ({ value, onChange }) => (
  <div className="flex items-center gap-3 mb-6">
    <label className="text-sm text-brand-text/80 dark:text-brand-light/80">Ordenar por:</label>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="px-4 py-2 rounded-full border border-brand-muted/60 dark:border-brand-muted/30 bg-white dark:bg-brand-dark text-brand-text dark:text-brand-light shadow-soft"
    >
      <option value="price-asc">Precio: menor a mayor</option>
      <option value="price-desc">Precio: mayor a menor</option>
      <option value="name-asc">A-Z</option>
      <option value="name-desc">Z-A</option>
    </select>
  </div>
);

export default SortBar;
