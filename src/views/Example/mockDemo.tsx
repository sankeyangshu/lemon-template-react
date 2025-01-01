import dayjs from 'dayjs';
import { useState } from 'react';
import { Button, Empty } from 'react-vant';
import { getExampleAPI } from '@/api/System/user';

const MockDemo = () => {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const onClickGetMessage = async () => {
    try {
      setLoading(true); // 按钮进入加载状态
      const { data } = await getExampleAPI();

      setMessage(
        JSON.stringify({
          content: data.content,
          date: dayjs(data.date).format('YYYY-MM-DD HH:mm:ss'),
        })
      );
    } finally {
      setLoading(false); // 关闭按钮加载状态
    }
  };

  return (
    <div className="box-border w-full p-20">
      <div border="l-3 l-solid color-[var(--rv-primary-color)]" className="mb-12 pl-12 leading-27">
        <div className="my-[4px] text-[18px] font-bold">来自Mock请求的数据</div>
      </div>

      <div className="mt-20 h-300 flex-center rounded-15 bg-white p-20 text-16 leading-30 dark:bg-[#1c1c1e]">
        {message ? (
          <div className="overflow-auto whitespace-pre text-left">
            <pre>{JSON.stringify(JSON.parse(message), null, 2)}</pre>
          </div>
        ) : (
          <Empty description="暂无数据" />
        )}
      </div>

      <Button
        className="mt-30 w-full"
        type="primary"
        round
        block
        loading={loading}
        onClick={onClickGetMessage}
      >
        请求
      </Button>
    </div>
  );
};

export default MockDemo;
