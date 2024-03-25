import './globals.css'
import { Fredoka, Golos_Text, Inter, IBM_Plex_Mono, Outfit, Rubik } from 'next/font/google'
import { ThemeProvider } from './Providers';
import { AiFillWarning } from 'react-icons/ai';

const inter = Inter({ subsets: ['latin'], variable: "--var-inter", display: "swap" })
const outfit = Outfit({ subsets: ['latin'], variable: "--var-outfit", display: "swap" });
const fredoka = Fredoka({ subsets: ['latin'], variable: "--var-fredoka", display: "swap" });
const ibmPlexMono = IBM_Plex_Mono({
    subsets: ['latin'], variable: "--var-ibm-plex-mono", display: "swap", weight: ["100", "200", "300", "400", "500", "600", "700"]
});

export const metadata = {
    title: 'dani',
    description: 'web designer. (:',
};

export const viewpoint = {
    themeColor: "#bd85ff"
};

import Layout from "@std/components/Layout";
import { NavigationRoot } from '@std/components/Navigation';
import { NavMusic } from '@std/components/Base/NavWidgets';

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${outfit.variable} ${inter.variable} ${fredoka.variable} ${ibmPlexMono.variable} font-sans`}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                    <div className="hidden flex-row items-center gap-x-2 w-full p-2 bg-red-400 font-medium font-fredoka lg:text-2xl">
                        <AiFillWarning className="text-6xl lg:text-3xl text-white" />
                        <span className="text-white">Howdy there! Light mode is currently a huge mess and an eyesore. Do pardon the mess, you should probably go back to dark mode.</span>
                    </div>
                    <div className="pt-12">
                        <NavigationRoot>
                            <NavMusic />
                        </NavigationRoot>
                        <div className="flex flex-col min-h-screen py-8">
                            <Layout>
                                {children}
                            </Layout>
                        </div>
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
};
