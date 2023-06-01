import { Roboto } from 'next/font/google';
import { PropsWithChildren } from 'react';

import Providers from './providers';
import Layout from './_layout';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900']
});

export const metadata = {
  title: 'Admin painel'
};

function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}

export default RootLayout;
