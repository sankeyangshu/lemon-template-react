import errorBg from '@/assets/icons/404.svg';
import ErrorBase from './components/ErrorBase';

const NotFound = () => {
  return <ErrorBase title="notFound" errorBg={errorBg} />;
};

export default NotFound;
