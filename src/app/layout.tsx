import "./globals.css";
import AppShell from "./AppShell";

export const metadata = {
  title: "MOONWITNESS XII — Global Championships",
  description: "A source-aware story universe, character studio, and community mission platform.",
  applicationName: "MOONWITNESS XII",
};

export const viewport = { themeColor: "#0b1220" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="id" suppressHydrationWarning><body><AppShell>{children}</AppShell></body></html>;
}
