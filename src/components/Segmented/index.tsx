import clsx from 'clsx';
import { useCallback, type FC, type ReactNode } from 'react';

export interface SegmentOption {
  label: ReactNode;
  value: string;
  className?: string;
}

interface Props {
  options: SegmentOption[];
  value?: string | number;
  onChange?: (value: string) => void;
  className?: string;
}

const Segmented: FC<Props> = ({ options, value, onChange, className }) => {
  const renderItems = useCallback(
    (optionList: SegmentOption[], val: string | number | undefined) => {
      return optionList.map((option) => {
        return (
          <div
            className={clsx('flex-center h-full leading-1 rounded-8 py-10 box-border', {
              'bg-layout': option.value === val,
              [`${option.className}`]: !!option.className,
            })}
            key={option.value}
            onClick={() => onChange?.(option.value)}
          >
            {option.label}
          </div>
        );
      });
    },
    [value]
  );

  return (
    <div
      className={clsx('bg-container inline-flex items-center rounded-8 p-2 box-border', className)}
    >
      {renderItems(options, value)}
    </div>
  );
};

export default Segmented;
