const SocialFloatingButtons = () => (
  <div className="fixed bottom-6 right-4 flex flex-col gap-3 z-30">
    <a
      href="https://wa.me/56912345678"
      target="_blank"
      rel="noreferrer"
      className="w-12 h-12 rounded-full bg-brand-primary text-white flex items-center justify-center shadow-soft hover:translate-y-[-2px] transition-transform"
      aria-label="WhatsApp"
    >
      🟢
    </a>
    <a
      href="https://instagram.com"
      target="_blank"
      rel="noreferrer"
      className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-secondary to-brand-primary text-white flex items-center justify-center shadow-soft hover:translate-y-[-2px] transition-transform"
      aria-label="Instagram"
    >
      📸
    </a>
    <a
      href="https://facebook.com"
      target="_blank"
      rel="noreferrer"
      className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-soft hover:translate-y-[-2px] transition-transform"
      aria-label="Facebook"
    >
      f
    </a>
  </div>
);

export default SocialFloatingButtons;
