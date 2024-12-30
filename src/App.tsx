import { HashRouter } from 'react-router';
import { ConfigProvider } from 'react-vant';
import { useTheme } from './hooks/useTheme';
import Router from './routers';

function App() {
  // 初始化主题
  const { initTheme } = useTheme();
  initTheme();

  return (
    <ConfigProvider>
      <HashRouter>
        <Router />
      </HashRouter>
    </ConfigProvider>
  );
}

export default App;
