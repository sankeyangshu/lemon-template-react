import type { CSSProperties, FC, ReactNode } from 'react';
import { isNotNil } from 'es-toolkit';
import { isValidElement } from 'react';
import { cn } from '@/lib/utils';
import SvgIcon from './svg-icon';

interface EmptyProps {
  /**
   * 图片类型，可选值为 error network search，支持传入图片 URL
   */
  image?: 'default' | 'error' | 'network' | 'search' | string | ReactNode;
  /**
   * 图片下方的描述文字
   */
  description?: ReactNode;
  /**
   * 子元素
   */
  children?: ReactNode;
  /**
   * 自定义类名
   */
  className?: string;
  /**
   * 样式
   */
  style?: CSSProperties;
}

const PRESET_IMAGES = ['default', 'error', 'network', 'search'];

const Empty: FC<EmptyProps> = (props) => {
  const { image = 'default', description, children, className, style } = props;

  const renderImage = () => {
    if (isValidElement(image)) {
      return image;
    }

    if (PRESET_IMAGES.includes(image as string)) {
      return <SvgIcon localIcon={`empty-${image as string}`} className="size-full" />;
    }

    return <img src={image as string} alt="" />;
  };

  const renderDescription = () => {
    if (isNotNil(description)) {
      return (
        <div className={cn(`
          mt-4 px-15 text-sm leading-5 text-[#969799]
          dark:text-[#707070]
        `)}
        >
          {description}
        </div>
      );
    }
    return null;
  };

  const renderBottom = () => {
    if (isNotNil(children)) {
      return <div className={cn('mt-6')}>{children}</div>;
    }
    return null;
  };

  return (
    <div className={cn('box-border flex flex-col items-center justify-center py-8', className)} style={style}>
      <div className="size-40">
        {renderImage()}
      </div>
      {renderDescription()}
      {renderBottom()}
    </div>
  );
};

export default Empty;
