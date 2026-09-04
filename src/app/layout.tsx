import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personal Website",
  description: "Personal website and portfolio.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
