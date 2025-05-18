import type React from "react";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/charts/styles.css";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import MobileLayout from "@/components/main/mobile-layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Project Percobaan",
  description: "Hanya untuk percobaan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" data-mantine-color-scheme="light">
      <head>
        <ColorSchemeScript />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </head>
      <body className={inter.className} cz-shortcut-listen="true">
        <MantineProvider>
          <MobileLayout>{children}</MobileLayout>
        </MantineProvider>
      </body>
    </html>
  );
}

