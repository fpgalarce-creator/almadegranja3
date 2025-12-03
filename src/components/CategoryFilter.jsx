const CategoryFilter = ({ categories, selected, onSelect }) => (
  <div className="w-full overflow-x-auto">
    <div className="flex items-center gap-3 md:gap-4 mb-6 min-w-max pb-1">
      {categories.map((category) => {
        const isActive = selected === category;

        return (
          <button
            key={category}
            type="button"
            onClick={() => onSelect(category)}
            className={`px-6 py-2 rounded-full text-sm md:text-base border transition-all duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/50 ${
              isActive
                ? 'bg-[#708A47] text-white border-transparent shadow-sm'
                : 'bg-[#fbf8f1] text-[#5a4b37] border-[#d8d3c3] shadow-soft dark:bg-brand-dark/60 dark:text-brand-light dark:border-brand-muted/40'
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  </div>
);

export default CategoryFilter;
