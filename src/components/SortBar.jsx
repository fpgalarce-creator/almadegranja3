const SortBar = ({ value, onChange }) => (
  <div className="flex items-center gap-3 md:gap-4 mb-6 ml-4 mr-4 md:ml-6">
    <label className="text-sm text-brand-text/80 dark:text-brand-light/80 whitespace-nowrap">Ordenar por:</label>
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none px-5 pr-10 py-2 rounded-full border border-[#d8d3c3] bg-[#fbf8f1] text-[#5a4b37] shadow-soft focus:outline-none focus:ring-2 focus:ring-brand-primary/50 min-w-[210px] dark:bg-brand-dark/60 dark:text-brand-light dark:border-brand-muted/40"
      >
        <option value="price-asc">Precio: menor a mayor</option>
        <option value="price-desc">Precio: mayor a menor</option>
        <option value="name-asc">A-Z</option>
        <option value="name-desc">Z-A</option>
      </select>
      <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-[#5a4b37]/70">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="w-4 h-4"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </span>
    </div>
  </div>
);

export default SortBar;
