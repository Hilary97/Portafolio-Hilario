import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const socials = [
  {
    href: "https://www.linkedin.com/in/hilario-nava",
    label: "LinkedIn",
    Icon: FaLinkedin,
  },
  {
    href: "https://github.com/Hilary97",
    label: "GitHub",
    Icon: FaGithub,
  },
  {
    href: "mailto:navahilario499@gmail.com",
    label: "Email",
    Icon: FaEnvelope,
  },
  {
    href: "https://wa.me/523313023706",
    label: "WhatsApp",
    Icon: FaWhatsapp,
  },
];

export function Socials({ className = "" }) {
  return (
    <div className={`flex items-center gap-5 ${className}`}>
      {socials.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          aria-label={label}
          className="text-2xl text-dusk transition hover:-translate-y-0.5 hover:text-lilac"
        >
          <Icon />
        </a>
      ))}
    </div>
  );
}
