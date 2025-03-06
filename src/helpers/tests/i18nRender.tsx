import { I18nextProvider } from 'react-i18next';

import { RenderOptions, render } from '@testing-library/react';

import i18n from '../../i18n';

export const i18nRender = (children: React.ReactElement, options?: RenderOptions) =>
  render(<I18nextProvider i18n={i18n}>{children}</I18nextProvider>, options);
