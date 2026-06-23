import React, {useState} from 'react';
import {useColorMode} from '@docusaurus/theme-common';

const options = [
  {value: 'light', label: 'Светлая', icon: '☀️'},
  {value: 'dark', label: 'Тёмная', icon: '🌙'},
  {value: 'auto', label: 'Как в системе', icon: '🖥️'},
] as const;

export default function ColorModeDropdownNavbarItem(): JSX.Element {
  const {setColorMode} = useColorMode();
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{position: 'relative'}}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}>
      <button
        type="button"
        className="navbar__item navbar__link"
        style={{
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          padding: '6px 10px',
        }}>
        <span aria-hidden="true">🎨</span>
        <span>Тема</span>
      </button>

      {open && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 6px)',
            right: 0,
            minWidth: '180px',
            background: 'var(--ifm-background-surface-color)',
            border: '1px solid var(--ifm-color-emphasis-300)',
            borderRadius: '8px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.12)',
            zIndex: 1000,
            padding: '6px 0',
          }}>
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => {
                setColorMode(option.value as 'light' | 'dark' | 'auto');
                setOpen(false);
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                width: '100%',
                textAlign: 'left',
                cursor: 'pointer',
                border: 'none',
                background: 'transparent',
                padding: '8px 12px',
                color: 'var(--ifm-font-color-base)',
              }}>
              <span aria-hidden="true">{option.icon}</span>
              <span>{option.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
