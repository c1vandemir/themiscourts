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

export const socialIcons = {
  instagram: InstagramIcon,
};
