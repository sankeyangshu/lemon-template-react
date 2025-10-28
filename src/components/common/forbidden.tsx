import { Link } from '@tanstack/react-router';
import forbidden from '@/assets/svg-icon/forbidden.svg';

function Forbidden() {
  const elements = [
    {
      id: 'title',
      content: (
        <div className="mb-5 text-xl leading-10 font-bold text-primary">
          您没有访问权限！
        </div>
      ),
    },
    {
      id: 'description',
      content: <div className="mb-7.5 text-sm leading-5 text-gray-500">请检查URL地址是否正确, 或点击回到首页。</div>,
    },
    {
      id: 'link',
      content: (
        <Link to="/">
          <button className="btn btn-sm btn-primary">回到首页</button>
        </Link>
      ),
    },
  ];

  return (
    <div className="box-border size-full p-2.5">
      <div className="flex flex-col items-center justify-center">
        <img className="w-full" src={forbidden} alt="Forbidden" />
        <div className="text-center">
          {elements.map((item, index) => (
            <div
              key={item.id}
              className="animate-in duration-320 ease-in fade-in slide-in-from-bottom-[120px]"
              style={{
                animationDelay: `${(index + 1) * 50}ms`,
                animationFillMode: 'both',
              }}
            >
              {item.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Forbidden;
