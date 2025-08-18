import AosProvider from "@/providers/AosProvider";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Children } from "@/types";
import { Toaster } from "sonner";

const RootLayout = ({ children }: Children) => {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <AosProvider> {children}</AosProvider>
          </ThemeProvider>
          <Toaster richColors position="top-right" theme="system" />
        </body>
      </html>
    </>
  );
};

export default RootLayout;
