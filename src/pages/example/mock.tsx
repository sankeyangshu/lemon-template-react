import { useMutation } from '@tanstack/react-query';
import { createFileRoute, useRouter } from '@tanstack/react-router';
import { formatDate } from 'date-fns';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getExampleAPI } from '@/api/system/user';
import Empty from '@/components/custom/empty';
import NavBar from '@/components/custom/nav-bar';
import SvgIcon from '@/components/custom/svg-icon';

export const Route = createFileRoute('/example/mock')({
  component: RouteComponent,
});

function RouteComponent() {
  const { t } = useTranslation();
  const router = useRouter();

  const [message, setMessage] = useState('');

  const { mutate: fetchMessage, isPending } = useMutation({
    mutationFn: getExampleAPI,
    onSuccess: ({ content, date }) => {
      setMessage(
        JSON.stringify({
          content,
          date: formatDate(date, 'yyyy-MM-dd HH:mm:ss'),
        }),
      );
    },
  });

  return (
    <>
      <NavBar
        title={t('router.mock')}
        fixed
        placeholder
        leftArrow={(
          <SvgIcon className="text-2xl" icon="mdi:chevron-left" />
        )}
        onClickLeft={() => void router.history.back()}
      />

      <div className="box-border w-full p-4">
        <div className="mb-3 border-l-3 border-solid border-l-primary pl-3 leading-7">
          <div className="my-1 text-lg font-bold">{t('example.mockTips')}</div>
        </div>

        <div className={`
          mt-5 flex h-75 items-center justify-center bg-white p-5 text-base leading-7.5
          dark:bg-[#1c1c1e]
        `}
        >
          {message
            ? (
                <div className="overflow-auto text-left whitespace-pre">
                  <pre>{JSON.stringify(JSON.parse(message), null, 2)}</pre>
                </div>
              )
            : (
                <Empty description={t('example.noData')} />
              )}
        </div>

        <button className="btn mt-7 w-full btn-primary" onClick={() => void fetchMessage()} disabled={isPending}>
          {isPending
            ? (
                <>
                  <span className="loading loading-spinner"></span>
                  {t('system.loading')}
                </>
              )
            : t('example.request')}
        </button>
      </div>
    </>
  );
}
