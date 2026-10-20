// lucide-react 1.x marka ikonlarını içermediği için basit, lucide stilinde (stroke) SVG'ler.
// Resmî logolar gerekirse simple-icons paketinden path'leri buraya kopyalayabilirsiniz.

function Icon({ children, ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function InstagramIcon(props) {
  return (
    <Icon {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </Icon>
  );
}

export function LinkedinIcon(props) {
  return (
    <Icon {...props}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M8 10.5V17" />
      <circle cx="8" cy="7.3" r="0.6" fill="currentColor" />
      <path d="M12 17v-6.5M12 13.5c0-1.8 1.2-3 2.7-3s2.3 1 2.3 2.8V17" />
    </Icon>
  );
}

export function YoutubeIcon(props) {
  return (
    <Icon {...props}>
      <rect x="2.5" y="5" width="19" height="14" rx="4" />
      <path d="m10 9.5 5 2.5-5 2.5z" fill="currentColor" />
    </Icon>
  );
}

export const socialIcons = {
  instagram: InstagramIcon,
  linkedin: LinkedinIcon,
  youtube: YoutubeIcon,
};
