import errorBg from '@/assets/icons/403.svg';
import ErrorBase from './components/ErrorBase';

const Forbidden = () => {
  return <ErrorBase title="forbidden" errorBg={errorBg} />;
};

export default Forbidden;
