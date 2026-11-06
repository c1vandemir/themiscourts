// Yalnızca build sırasında scripts/prerender.js tarafından kullanılır (tarayıcı paketine girmez).
import { StrictMode } from 'react';
import { prerenderToNodeStream } from 'react-dom/static';
import { StaticRouter } from 'react-router';
import i18n from './i18n';
import App from './App';

/** Verilen adresin HTML'ini (React 19'un <head>'e taşınacak etiketleri dahil) üretir. */
export async function render(url, lng) {
  await i18n.changeLanguage(lng);

  const { prelude } = await prerenderToNodeStream(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>,
  );

  const chunks = [];
  for await (const chunk of prelude) chunks.push(Buffer.from(chunk));
  return Buffer.concat(chunks).toString('utf8');
}
