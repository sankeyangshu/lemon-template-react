import { Button } from 'antd-mobile';
import { useTranslation } from 'react-i18next';
import SvgIcon from '../SvgIcon';
import type { FallbackProps } from 'react-error-boundary';

const isDev = import.meta.env.DEV;

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  const { t } = useTranslation();

  return (
    <div className="box-border wh-full flex-center flex-col px-50 py-20">
      <SvgIcon localIcon="error" size={400} />

      {isDev ? (
        <div className="text-red-500">{error.message}</div>
      ) : (
        <h3>{t('system.errorFallback')}</h3>
      )}
      <Button color="primary" onClick={resetErrorBoundary}>
        {t('system.refreshAgain')}
      </Button>
    </div>
  );
};

export default ErrorFallback;
