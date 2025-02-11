import "@/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider"
import Footer from "@/components/Footer";
import { LinkType } from "@/types/universalTypes";

export const metadata: Metadata = {
  title: "Home | Universal Public School",
  description: "Universal Public School (UPS)",
  icons: [{ rel: "icon", url: "/universal-public-school-logo.png" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const navFooterquickLinks: LinkType[] = [
    { text: "Home", href: "/" },
    { text: "Admissions", href: "/admissions" },
    { text: "Contact Us", href: "/contact-us" },
  ];


  return (
    <html lang="en" className={`${GeistSans.variable}`} suppressHydrationWarning>
      <body className="relative bg-main">
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar navItems={navFooterquickLinks}/>
            <div>
              {children}
            </div>
            <div>
            <Footer quickLinks={navFooterquickLinks}/>
            </div>
          </ThemeProvider>
      </body>
    </html>
  );
}