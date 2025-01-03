import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Cell } from 'react-vant';
import SwitchDark from '@/components/SwitchDark';

const Example = () => {
  const [menuItems] = useState([
    { title: '💿 Mock 指南', route: 'mock' },
    { title: '📊 Echarts 演示', route: 'echarts' },
    { title: '🎨 Icon 示例', route: 'icon' },
    { title: '🧡 KeepAlive 演示', route: 'keepAlive' },
    { title: '🙅 404页 演示', route: '404' },
  ]);

  const navigate = useNavigate();

  return (
    <div className="my-20">
      <Cell.Group card title="基础设置">
        <Cell title="暗黑模式" rightIcon={<SwitchDark />} />
      </Cell.Group>

      <Cell.Group card title="示例组件">
        {menuItems.map((item) => (
          <Cell
            key={item.route}
            title={item.title}
            isLink
            onClick={() => navigate(`/${item.route}`)}
          />
        ))}
      </Cell.Group>
    </div>
  );
};

export default Example;
