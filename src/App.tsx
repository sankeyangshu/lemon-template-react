import { LazyAnimate } from './components/Animate';
import LangProvider from './provider/LangProvider';
import ThemeProvider from './provider/Theme';
import UIConfigProvider from './provider/UIprovider';
import Router from './routers';

function App() {
  return (
    <ThemeProvider>
      <LangProvider>
        <UIConfigProvider>
          <LazyAnimate>
            <Router />
          </LazyAnimate>
        </UIConfigProvider>
      </LangProvider>
    </ThemeProvider>
  );
}

export default App;
