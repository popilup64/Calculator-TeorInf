import { useI18n } from '../i18n/I18nContext';
import type { OperationId } from '../operations';
import { OPERATION_BY_ID } from '../operations';

type Props = {
  mode: OperationId;
  onModeChange: (id: OperationId) => void;
};

export function Header({ mode, onModeChange }: Props) {
  const { t } = useI18n();

  return (
    <header className="header">
      <div className="header__brand">
        <h1>{t('appTitle')}</h1>
        <span className="header__sub">{t('appSubtitle')}</span>
      </div>

      <nav className="header__methods" aria-label="Методы">
        {(['infoMarginals', 'infoConditionals', 'infoEntropy'] as OperationId[]).map((id) => {
          const op = OPERATION_BY_ID[id];
          const active = mode === id;
          return (
            <button
              key={id}
              type="button"
              className={`header__method-btn ${active ? 'header__method-btn--active' : ''}`}
              onClick={() => onModeChange(id)}
              aria-pressed={active}
            >
              <span className="header__method-icon">{op.icon}</span>
              <span className="header__method-label">{t(op.labelKey)}</span>
            </button>
          );
        })}
      </nav>


    </header>
  );
}