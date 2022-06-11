type Props = {
  title: string;
  description?: string;
};

const APP_NAME = import.meta.env.VITE_APP_NAME ?? 'App Name';

export const Head = ({ title, description }: Props) => (
  <>
    <title>{`${title} | ${APP_NAME}`}</title>
    <meta name="description" content={description ?? `This is ${APP_NAME}`} />
    <meta property="og:title" content={`${title} | ${APP_NAME}`} />
    <meta property="og:description" content={description ?? `This is ${APP_NAME}`} />
    <meta name="robots" content="noindex" />
  </>
);
