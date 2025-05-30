import errorBg from '@/assets/icons/500.svg';
import ErrorBase from './components/ErrorBase';

const ServerError = () => {
  return <ErrorBase title="serverError" errorBg={errorBg} />;
};

export default ServerError;
