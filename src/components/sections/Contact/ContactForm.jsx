import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CheckCircle2, Send } from 'lucide-react';
import Button from '../../ui/Button';
import { site } from '../../../config/site';

const initial = { name: '', email: '', department: 'general', message: '' };

const fieldClass =
  'mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/60 transition focus:border-white focus:bg-white/10 focus:outline-none';

export default function ContactForm() {
  const { t } = useTranslation();
  const [values, setValues] = useState(initial);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const update = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }));

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    try {
      if (site.contactEndpoint) {
        const res = await fetch(site.contactEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(values),
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
      } else {
        // Uç nokta tanımlı değil: geliştirme sırasında gönderimi simüle et
        await new Promise((r) => setTimeout(r, 800));
      }
      setStatus('success');
      setValues(initial);
    } catch {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-white/10 bg-navy-900/60 p-6 sm:p-10">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-white/90">
          {t('contact.form.name')}
          <input name="name" required autoComplete="name" value={values.name} onChange={update} className={fieldClass} />
        </label>
        <label className="block text-sm font-medium text-white/90">
          {t('contact.form.email')}
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            value={values.email}
            onChange={update}
            className={fieldClass}
          />
        </label>
      </div>

      <label className="mt-5 block text-sm font-medium text-white/90">
        {t('contact.form.department')}
        <select name="department" value={values.department} onChange={update} className={`${fieldClass} [&>option]:text-navy-950`}>
          {site.emails.map(({ department }) => (
            <option key={department} value={department}>
              {t(`contact.departments.${department}`)}
            </option>
          ))}
        </select>
      </label>

      <label className="mt-5 block text-sm font-medium text-white/90">
        {t('contact.form.message')}
        <textarea name="message" required rows={5} value={values.message} onChange={update} className={`${fieldClass} resize-y`} />
      </label>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
        <Button type="submit" size="lg" disabled={status === 'sending'}>
          {status === 'sending' ? t('contact.form.sending') : t('contact.form.submit')}
          <Send className="h-4 w-4" aria-hidden="true" />
        </Button>
        <p aria-live="polite" className="text-sm">
          {status === 'success' && (
            <span className="inline-flex items-center gap-2 text-white">
              <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
              {t('contact.form.success')}
            </span>
          )}
          {status === 'error' && <span className="text-white">{t('contact.form.error')}</span>}
        </p>
      </div>
    </form>
  );
}
