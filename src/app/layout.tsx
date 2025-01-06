import React from 'react';
import '../styles/css/reset.css';
import '../styles/css/style.css';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="ja">
            <body>
                {children}
            </body>
        </html>
    );
};

export default RootLayout;
