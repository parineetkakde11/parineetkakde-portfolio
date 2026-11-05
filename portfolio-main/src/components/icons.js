import { Code, Network, QrCode, Server, Terminal, Truck, Link as LinkIcon } from 'lucide-react';

// Maps icon keys used in /data files to Lucide components.
// GitHub/LinkedIn use the same generic glyphs as the original design ("code" / "link").
export const icons = {
  github: Code,
  linkedin: LinkIcon,
  code: Code,
  server: Server,
  terminal: Terminal,
  truck: Truck,
  qr: QrCode,
  hub: Network,
};
