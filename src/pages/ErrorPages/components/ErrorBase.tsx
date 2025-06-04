import { Button } from '@nutui/nutui-react';
import { m } from 'motion/react';
import { memo, useMemo, type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router';
import { MotionContainer } from '@/components/Animate';
import { varFade } from '@/components/Animate/variants/fade';

interface ErrorBaseProps {
  title: string;
  errorBg: string;
}

const ErrorBase: FC<ErrorBaseProps> = ({ title, errorBg }) => {
  const { t } = useTranslation();

  const elements = useMemo(
    () => [
      {
        id: 'title',
        content: (
          <div className="mb-20 text-20 text-primary font-bold leading-40">
            {t(`system.${title}`)}
          </div>
        ),
      },
      {
        id: 'description',
        content: <div className="mb-30 text-13 text-gray leading-21">{t('system.checkUrl')}</div>,
      },
      {
        id: 'link',
        content: (
          <NavLink to="/">
            <Button type="primary">{t('system.goHome')}</Button>
          </NavLink>
        ),
      },
    ],
    [t]
  );

  return (
    <div className="box-border wh-full bg-layout p-10">
      <MotionContainer className="flex-center flex-col">
        <img className="w-full" src={errorBg} alt={title} />
        <div className="text-center">
          {elements.map((item) => (
            <m.div key={item.id} variants={varFade().inUp}>
              {item.content}
            </m.div>
          ))}
        </div>
      </MotionContainer>
    </div>
  );
};

export default memo(ErrorBase);
