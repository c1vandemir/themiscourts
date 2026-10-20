import Container from './Container';

/** Sabit navbar'ın altında kalmaması için scroll-margin'li bölüm sarmalayıcısı. */
export default function Section({ id, className = '', containerClassName = '', children }) {
  return (
    <section id={id} className={`scroll-mt-20 py-20 sm:py-28 ${className}`}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
