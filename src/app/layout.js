// app/layout.js
"use client";

import StyledComponentsRegistry from './styledComponentsRegistry';
import { ThemeProvider } from 'styled-components';
import Theme from './styles/Theme';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Footer from './components/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider theme={Theme}>
            <GlobalStyles />
            <Header />
            <main>{children}</main>
            <Footer />
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
