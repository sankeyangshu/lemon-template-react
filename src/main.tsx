import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import 'virtual:svg-icons-register'; // svg-icons注册导入
import './styles/index.less'; // 导入默认样式
import 'virtual:uno.css'; // 引入unocss

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
