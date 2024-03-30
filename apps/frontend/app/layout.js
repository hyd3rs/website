import './globals.css'
import { Fredoka, Golos_Text, Inter, IBM_Plex_Mono, Outfit, Rubik } from 'next/font/google'
import { ProgressBar, ThemeProvider } from '@std/app/Client';
import { AiFillWarning } from 'react-icons/ai';

const inter = Inter({ subsets: ['latin'], variable: "--var-inter", display: "swap" })
const outfit = Outfit({ subsets: ['latin'], variable: "--var-outfit", display: "swap" });
const fredoka = Fredoka({ subsets: ['latin'], variable: "--var-fredoka", display: "swap" });
const ibmPlexMono = IBM_Plex_Mono({
    subsets: ['latin'], variable: "--var-ibm-plex-mono", display: "swap", weight: ["100", "200", "300", "400", "500", "600", "700"]
});

export const metadata = {
    title: 'dani',
    description: 'i design and develop websites and apps for the modern web.',
};

export const viewpoint = {
    themeColor: "#9035ee"
};

import Layout from "@std/components/Layout";
import { Footer } from '@std/components/Base/Footer';
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
                    <div>
                        <div className="bg-background pt-12">
                            <NavigationRoot>
                                <NavMusic />
                            </NavigationRoot>
                        </div>
                        <div className="relative flex flex-col min-h-[90vh] py-8 h-full bg-background">
                            <Layout>
                                {children}
                            </Layout>
                            <div className="mt-48 sm:mt-96 lg:mt-36 xl:mt-24">
                                <Footer />
                            </div>
                        </div>
                    </div>
                    <ProgressBar
                        color="#884be2"
                        height="4px"
                        shallowRouting
                    />
                </ThemeProvider>
            </body>
        </html>
    );
};
