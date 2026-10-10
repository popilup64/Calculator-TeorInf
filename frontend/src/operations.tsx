import type { ReactNode } from 'react';
import type { TranslationKey } from './i18n/translations';

export type OperationId =
  | 'infoMarginals'
  | 'infoConditionals'
  | 'infoEntropy';

export type OperationCategory = 'matrix' | 'system' | 'information';
export type ResultKind =
  | 'scalar'
  | 'vector'
  | 'matrix'
  | 'eigen'
  | 'sections';
export type InputKind = 'matrix' | 'augmented' | 'jointDistribution';

export type OperationDef = {
  id: OperationId;
  category: OperationCategory;
  labelKey: TranslationKey;
  descriptionKey: TranslationKey;
  shapeKey: TranslationKey;
  icon: ReactNode;
  inputKind: InputKind;
  requiresSquare: boolean;
  resultKind: ResultKind;
};

export const OPERATIONS: OperationDef[] = [
  {
    id: 'infoMarginals',
    category: 'information',
    labelKey: 'opInfoMarginalsLabel',
    descriptionKey: 'opInfoMarginalsDesc',
    shapeKey: 'opInfoMarginalsShape',
    icon: <IconProbability />,
    inputKind: 'jointDistribution',
    requiresSquare: false,
    resultKind: 'sections',
  },
  {
    id: 'infoConditionals',
    category: 'information',
    labelKey: 'opInfoConditionalsLabel',
    descriptionKey: 'opInfoConditionalsDesc',
    shapeKey: 'opInfoConditionalsShape',
    icon: <IconConditional />,
    inputKind: 'jointDistribution',
    requiresSquare: false,
    resultKind: 'sections',
  },
  {
    id: 'infoEntropy',
    category: 'information',
    labelKey: 'opInfoEntropyLabel',
    descriptionKey: 'opInfoEntropyDesc',
    shapeKey: 'opInfoEntropyShape',
    icon: <IconEntropy />,
    inputKind: 'jointDistribution',
    requiresSquare: false,
    resultKind: 'sections',
  },
];

export const OPERATION_BY_ID = Object.fromEntries(
  OPERATIONS.map(o => [o.id, o]),
) as Record<OperationId, OperationDef>;

export const CATEGORY_ORDER: OperationCategory[] = [
  'information',
];

export const CATEGORY_LABEL_KEY: Record<OperationCategory, TranslationKey> = {
  matrix: 'opCategoryMatrix',
  system: 'opCategorySystem',
  information: 'opCategoryInformation',
};

/* ---------- Иконки ---------- */

/* ---------- Оставшиеся иконки удалены ---------- */

function IconProbability() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.7" />
      <path d="M3 12h18M12 3v18" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function IconConditional() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 20V8a4 4 0 0 1 4-4h8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M13 10l3-3-3-3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="18" cy="18" r="3" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function IconEntropy() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 18h4l3-12 4 12 3-6h4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}