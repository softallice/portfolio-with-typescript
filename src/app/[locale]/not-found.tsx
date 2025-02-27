import {
  getLocale,
  getTranslations,
  unstable_setRequestLocale
} from 'next-intl/server';

import { ErrorTemplate } from '@/components/templates';

const NotFoundPage = async () => {
  const locale = await getLocale();

  unstable_setRequestLocale(locale);

  return <ErrorTemplate namespace='pages.notFound' />;
};

const generateMetadata = async () => {
  const locale = await getLocale();

  const t = await getTranslations({
    locale,
    namespace: 'pages.notFound.metadata'
  });

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description')
    }
  };
};

export default NotFoundPage;
export { generateMetadata };
