import { FacebookLogo, InstagramLogo, WhatsappLogo } from 'phosphor-react';

const baseClasses =
  'w-12 h-12 rounded-full bg-[#fbf8f1] dark:bg-brand-dark text-[#708A47] dark:text-brand-light border border-[#d8d3c3] dark:border-brand-muted/40 shadow-soft flex items-center justify-center transition-transform hover:-translate-y-0.5';

const SocialFloatingButtons = () => (
  <div className="fixed bottom-6 right-4 flex flex-col gap-3 z-30">
    <a
      href="https://wa.me/56912345678"
      target="_blank"
      rel="noreferrer"
      className={baseClasses}
      aria-label="WhatsApp"
    >
      <WhatsappLogo size={28} weight="regular" />
    </a>
    <a
      href="https://instagram.com"
      target="_blank"
      rel="noreferrer"
      className={baseClasses}
      aria-label="Instagram"
    >
      <InstagramLogo size={28} weight="regular" />
    </a>
    <a
      href="https://facebook.com"
      target="_blank"
      rel="noreferrer"
      className={baseClasses}
      aria-label="Facebook"
    >
      <FacebookLogo size={28} weight="regular" />
    </a>
  </div>
);

export default SocialFloatingButtons;
