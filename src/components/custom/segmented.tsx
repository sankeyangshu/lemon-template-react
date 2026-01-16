import type { CSSProperties, FC, ReactNode } from 'react';
import { isNotNil, isPlainObject } from 'es-toolkit';
import { cn } from '@/lib/utils';

interface SegmentedItem {
  /**
   * 分段项的显示文本
   */
  label: ReactNode;
  /**
   * 分段项的值
   */
  value: string | number;
  /**
   * 是否禁用分段项
   */
  disabled?: boolean;
  /**
   * 自定义类名
   */
  className?: string;
  /**
   * 图标
   */
  icon?: ReactNode;
}

interface SegmentedProps {
  /**
   * 分段项
   */
  options: string[] | number[] | SegmentedItem[];
  /**
   * 默认选中项的值
   */
  defaultValue?: string | number;
  /**
   * 当前选中项的值
   */
  value?: string | number;
  /**
   * 自定义类名
   */
  className?: string;
  /**
   * 自定义样式
   */
  style?: CSSProperties;
  /**
   * 选中项变化时触发
   */
  onChange?: (value: string | number) => void;
}

const Segmented: FC<SegmentedProps> = (props) => {
  const {
    options,
    value,
    className,
    style,
    onChange,
  } = props;

  const renderItems = (options: SegmentedProps['options'], value?: string | number) => {
    return options.map((option, index) => {
      if (isPlainObject(option)) {
        const isDisabled = option.disabled === true;
        return (
          <div
            className={cn(
              `
                box-border flex h-full items-center justify-center rounded-sm px-1.5 text-xs
                leading-none text-white
              `,
              {
                'bg-black/40 dark:bg-white/40': option.value === value,
                'cursor-not-allowed opacity-50': isDisabled,
                'cursor-pointer': !isDisabled,
              },
              option.className,
            )}
            key={option.value}
            onClick={() => {
              if (option.disabled)
                return;
              onChange?.(option.value);
            }}
          >
            {isNotNil(option.icon)
              ? (
                  <span className="mr-1 flex size-2.5 items-center justify-center">
                    {option.icon}
                  </span>
                )
              : null}
            {option.label}
          </div>
        );
      }

      return (
        <div
          className={cn(
            `
              box-border flex h-full items-center justify-center rounded-sm px-1.5 text-xs
              leading-none text-white
            `,
            {
              'bg-black/40 dark:bg-white/40': index === value,
            },
          )}
          key={option}
          onClick={() => {
            onChange?.(index);
          }}
        >
          {option}
        </div>
      );
    });
  };

  return (
    <div
      className={cn(`
        box-border inline-flex items-center rounded-sm bg-white p-1
        dark:bg-[#1C1C1E]
      `, className)}
      style={style}
    >
      {renderItems(options, value)}
    </div>
  );
};

export default Segmented;
