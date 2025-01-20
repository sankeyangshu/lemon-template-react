import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { setupI18n } from './locales'; // 引入国际化配置
import 'virtual:svg-icons-register'; // svg-icons注册导入
import './styles/index.less'; // 导入默认样式
import 'virtual:uno.css'; // 引入unocss

function bootstrap() {
  setupI18n(); // 初始化国际化

  const container = document.getElementById('root');
  if (!container) return;
  const root = createRoot(container);
  root.render(<App />);
}

bootstrap();
