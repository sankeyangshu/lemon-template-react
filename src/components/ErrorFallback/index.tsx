import { Button } from '@nutui/nutui-react';
import { useTranslation } from 'react-i18next';
import errorBg from '@/assets/icons/error.svg';
import type { FallbackProps } from 'react-error-boundary';

const isDev = import.meta.env.DEV;

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  const { t } = useTranslation();

  return (
    <div className="box-border wh-full flex-center flex-col px-50 py-20">
      <img className="w-full" src={errorBg} alt="error" />

      {isDev ? (
        <div className="text-red-500">{error.message}</div>
      ) : (
        <h3>{t('system.errorFallback')}</h3>
      )}
      <Button type="primary" onClick={resetErrorBoundary} className="mt-20">
        {t('system.refreshAgain')}
      </Button>
    </div>
  );
};

export default ErrorFallback;
