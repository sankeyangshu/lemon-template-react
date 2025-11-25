import type { SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { createFileRoute, useNavigate, useRouter } from '@tanstack/react-router';
import { isNotNil } from 'es-toolkit';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import * as z from 'zod';
import NavBar from '@/components/custom/nav-bar';
import SvgIcon from '@/components/custom/svg-icon';
import { useUserStore } from '@/store/user';
import PasswordInput from './-components/password-input';

const signInSearchSchema = z.object({
  redirect: z.string().optional(),
});

export const Route = createFileRoute('/(auth)/sign-in')({
  validateSearch: signInSearchSchema,
  component: RouteComponent,
});

function RouteComponent() {
  const { t } = useTranslation();
  const router = useRouter();
  const navigate = useNavigate();
  const { redirect } = Route.useSearch();

  const loginAPI = useUserStore((state) => state.login);

  const formSchema = z.object({
    username: z.string().min(1, { message: t('login.usernameError') }),
    password: z.string().min(1, { message: t('login.passwordError') }),
  });

  type FormData = z.infer<typeof formSchema>;

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    defaultValues: {
      username: 'admin',
      password: '123456',
    },
    resolver: zodResolver(formSchema),
  });

  const { mutate: fetchLogin, isPending } = useMutation({
    mutationFn: loginAPI,
    onSuccess: () => {
      // 如果有 redirect 参数，跳转到被拦截的页面并替换当前历史记录
      if (isNotNil(redirect)) {
        void navigate({ to: redirect, replace: true });
      } else {
        // 否则返回上一页或跳转到首页
        if (router.history.length > 1) {
          router.history.back();
        } else {
          void navigate({ to: '/' });
        }
      }
    },
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    fetchLogin(data);
  };

  return (
    <div className="box-border flex size-full flex-col items-center p-5">
      <NavBar
        title={t('router.login')}
        fixed
        placeholder
        leftArrow={(
          <SvgIcon className="text-2xl" icon="mdi:chevron-left" />
        )}
        onClickLeft={() => router.history.back()}
      />
      <div className="mt-5 mb-7.5">
        <SvgIcon className="size-25!" localIcon="icon-logo" />
      </div>

      <form className="grid w-full gap-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className={`
            box-border flex h-12.5 w-full rounded-2xl bg-white px-4 py-3
            dark:bg-[#1f1f1f]
          `}
          >
            <input
              type="text"
              placeholder={t('login.username')}
              className={`
                flex-1 bg-transparent text-base
                focus:outline-none
              `}
              {...register('username')}
            />
          </label>
          {errors.username && (
            <p className="mt-2 text-xs text-error">
              {errors.username.message}
            </p>
          )}
        </div>

        <PasswordInput
          placeholder={t('login.password')}
          error={errors.password?.message}
          {...register('password')}
        />

        <button
          type="submit"
          disabled={isPending}
          className="btn w-full btn-primary"
        >
          {isPending
            ? (
                <>
                  <span className="loading loading-spinner"></span>
                  {t('system.loading')}
                </>
              )
            : (
                t('login.login')
              )}
        </button>
      </form>

      <div className="mt-25 flex items-center justify-center">
        <SvgIcon className="mx-15 text-3xl text-[#83DC42]" icon="mdi:wechat" />
        <SvgIcon className="text-3xl text-[#F9221D]" icon="mdi:sina-weibo" />
        <SvgIcon className="mx-15 text-3xl" icon="mdi:github" />
      </div>

      <div className="mt-8 flex h-5 items-center justify-center text-sm/5 text-primary">
        <div onClick={() => void navigate({ to: '/forgot-password' })}>{t('login.forgotPassword')}</div>
        <div className="divider divider-horizontal"></div>
        <div onClick={() => void navigate({ to: '/sign-up' })}>{t('login.registerAccount')}</div>
      </div>
    </div>
  );
}
