import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { Button } from 'react-vant';
import notFoundImg from '@/assets/images/404.png';

const NotFound = () => {
  const navigate = useNavigate();

  // 返回首页
  const onClickGoHome = () => {
    navigate('/');
  };

  // 使用i18n全局函数
  const { t } = useTranslation();

  return (
    <div className="wh-full flex-center flex-col">
      <div className="text-center">
        <img className="w-350" src={notFoundImg} alt="404" />
      </div>
      <div className="text-center">
        <div className="m-20 text-18">{t('errorPages.404')}</div>
        <Button type="primary" onClick={onClickGoHome}>
          {t('errorPages.back')}
        </Button>
      </div>
    </div>
  );
};
export default NotFound;
