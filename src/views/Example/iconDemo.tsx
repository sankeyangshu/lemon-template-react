import IconifyIcon from '@/components/Icon/IconifyIcon';
import SvgIcon from '@/components/Icon/SvgIcon';

const IconDemo = () => {
  const iconifyList = [
    'mdi:github',
    'mdi:palette',
    'mdi:book-open-variant',
    'mdi:cellphone-settings-variant',
    'mdi:logout',
  ];

  const svgList = ['Moon', 'Sunny'];

  return (
    <div className="box-border w-full p-20">
      <div border="l-3 l-solid color-[var(--rv-primary-color)]" className="mb-12 pl-12 leading-27">
        <div className="my-[4px] text-[18px] font-bold">Iconify Icon</div>
      </div>
      <div>
        {iconifyList.map((item) => (
          <IconifyIcon key={item} icon={item} className="mr-10 text-24" />
        ))}
      </div>

      <div
        border="l-3 l-solid color-[var(--rv-primary-color)]"
        className="mb-12 mt-20 pl-12 leading-27"
      >
        <div className="my-[4px] text-[18px] font-bold">Svg Icon</div>
      </div>
      <div>
        {svgList.map((item) => (
          <SvgIcon key={item} icon={item} className="mr-10 text-24" />
        ))}
      </div>
    </div>
  );
};

export default IconDemo;
