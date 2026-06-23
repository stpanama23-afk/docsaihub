import React, {useEffect, useState} from 'react';
import SearchBar from '@easyops-cn/docusaurus-search-local/dist/client/client/theme/SearchBar';

export default function SearchModal(): JSX.Element {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="navbar__item navbar__link"
        onClick={() => setOpen(true)}
        style={{
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '10px 14px',
          minHeight: '40px',
          borderRadius: '999px',
          fontSize: '0.95rem',
          fontWeight: 600,
          whiteSpace: 'nowrap',
        }}>
        <span aria-hidden="true" style={{fontSize: '1rem'}}>🔍</span>
        <span>Поиск </span>
      </button>

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
              width: 'min(92vw, 680px)',
              background: 'rgba(248, 250, 252, 0.96)',
              border: '1px solid rgba(148, 163, 184, 0.24)',
              borderRadius: '16px',
              padding: '20px',
              boxShadow: '0 20px 48px rgba(15, 23, 42, 0.16)',
              backdropFilter: 'blur(10px)',
            }}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px'}}>
              <h3 style={{margin: 0, color: '#0f172a'}}>Поиск </h3>
              <button type="button" className="button button--secondary button--sm" onClick={() => setOpen(false)}>
                Закрыть
              </button>
            </div>
            <SearchBar handleSearchBarToggle={() => setOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
}
