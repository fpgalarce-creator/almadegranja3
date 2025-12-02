const CategoryFilter = ({ categories, selected, onSelect }) => (
  <div className="flex flex-wrap gap-3 mb-6">
    {categories.map((category) => (
      <button
        key={category}
        type="button"
        onClick={() => onSelect(category)}
        className={`px-4 py-2 rounded-full border border-brand-muted/60 dark:border-brand-muted/30 shadow-soft text-sm transition-colors ${selected === category ? 'bg-brand-primary text-white border-brand-primary' : 'bg-white dark:bg-brand-dark/60 text-brand-text dark:text-brand-light'}`}
      >
        {category}
      </button>
    ))}
  </div>
);

export default CategoryFilter;
