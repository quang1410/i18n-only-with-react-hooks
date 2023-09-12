import React from 'react';
import { Logo as logo } from 'Assets';
import { useTranslate } from 'Translate';
import { LanguageSwitcher } from 'Components';

function HelloWorld() {
  const i18n = useTranslate();
  const { t } = i18n;

  return (
    <span className="HelloWorld">
      <header>
        <h1>{t('Application.title')}</h1>
        <h2>{t('Application.subTitle')}</h2>
        <img src={logo} className="HelloWorld-logo" alt="logo" />
      </header>
      <main>
        <LanguageSwitcher></LanguageSwitcher>
      </main>

      <footer>{t('Application.footer')}</footer>
    </span>
  );
}

export default HelloWorld;