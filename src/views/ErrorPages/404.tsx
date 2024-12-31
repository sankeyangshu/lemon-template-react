import { useNavigate } from 'react-router';
import { Button } from 'react-vant';
import notFoundImg from '@/assets/images/404.png';

const NotFound = () => {
  const navigate = useNavigate();

  // 返回首页
  const onClickGoHome = () => {
    navigate('/');
  };

  return (
    <div className="wh-full flex-center flex-col">
      <div className="text-center">
        <img className="w-350" src={notFoundImg} alt="404" />
      </div>
      <div className="text-center">
        <div className="m-20 text-18">抱歉，你访问的页面不存在</div>
        <Button type="primary" onClick={onClickGoHome}>
          回到首页
        </Button>
      </div>
    </div>
  );
};
export default NotFound;
