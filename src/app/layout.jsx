import { ColorSchemeScript } from '@mantine/core';
import { RootProvider } from '@partials/providers';
import '@mantine/core/styles.css';
import '@styles/globals.css';

export const metadata = {
    title: 'NextJS Boilerplate',
    description: 'Combined with TailwindCSS and MantineUI',
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <head>
                <ColorSchemeScript />
            </head>
            <body className='bg-black'>
                <RootProvider>{children}</RootProvider>
            </body>
        </html>
    );
}
