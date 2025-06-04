import ErrorFallback from '@/components/ErrorFallback';
import { useRoute, useRouter } from '../hooks';

/**
 * 错误页面
 */
const ErrorPage = () => {
  const { reload } = useRouter();

  const { error } = useRoute();

  return <ErrorFallback error={error} resetErrorBoundary={reload} />;
};

export default ErrorPage;
