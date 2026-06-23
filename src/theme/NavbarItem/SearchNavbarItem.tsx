import React, {useState} from 'react';

export default function SearchNavbarItem(): JSX.Element {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) {
      window.location.assign('/docsaihub/search');
      return;
    }

    window.location.assign(`/docsaihub/search?q=${encodeURIComponent(trimmed)}`);
  };

  return (
    <>
      <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginLeft: '8px'}}>
        <button
          type="button"
          className="navbar__item navbar__link"
          onClick={() => setOpen(true)}
          style={{
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '6px 10px',
            marginLeft: '-8px',
          }}>
          <span aria-hidden="true">🔍</span>
          <span>Поиск</span>
        </button>

        <a
          href="https://hub.onlanta.ai/"
          className="button button--secondary button--sm"
          style={{marginLeft: '4px'}}>
          Войти
        </a>
        <a
          href="https://hub.onlanta.ai/register"
          className="button button--primary button--sm">
          Регистрация
        </a>
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(15, 23, 42, 0.32)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '20px',
          }}
          onClick={() => setOpen(false)}>
          <div
            onClick={(event) => event.stopPropagation()}
            style={{
              width: 'min(92vw, 760px)',
              background: 'rgba(248, 250, 252, 0.96)',
              border: '1px solid rgba(148, 163, 184, 0.24)',
              borderRadius: '16px',
              padding: '24px',
              boxShadow: '0 18px 45px rgba(15, 23, 42, 0.16)',
              backdropFilter: 'blur(10px)',
            }}>
            <h3 style={{marginTop: 0, marginBottom: '12px', color: '#0f172a'}}>Поиск </h3>
            <form onSubmit={handleSubmit}>
              <input
                autoFocus
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Введите запрос"
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  borderRadius: '10px',
                  minHeight: '48px',
                  border: '1px solid #cbd5e1',
                  fontSize: '16px',
                  background: 'rgba(255, 255, 255, 0.85)',
                  color: '#0f172a',
                }}
              />
              <div style={{marginTop: '12px', display: 'flex', justifyContent: 'flex-end', gap: '8px'}}>
                <button type="button" className="button button--secondary" onClick={() => setOpen(false)}>
                  Отмена
                </button>
                <button type="submit" className="button button--primary">
                  Найти
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
