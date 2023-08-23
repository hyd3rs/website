import { NavigationRoot } from '../components/Navigation';
import './globals.css'
import { Fredoka, Golos_Text, Inter, Outfit, Rubik } from 'next/font/google'
import { ColourProvider } from './Providers';
import { AiFillWarning } from 'react-icons/ai';

const inter = Inter({ subsets: ['latin'], variable: "--var-inter", display: "swap" })
const outfit = Outfit({ subsets: ['latin'], variable: "--var-outfit", display: "swap" });
const fredoka = Fredoka({ subsets: ['latin'], variable: "--var-fredoka", display: "swap" });

export const metadata = {
    title: 'dani',
    description: 'web designer. (:',
    themeColor: "#bd85ff"
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="dark">
            <ColourProvider>
                <body className={`${outfit.variable} ${inter.variable} ${fredoka.variable} font-sans`}>
                        <div className="dark:hidden flex flex-row items-center gap-x-2 w-full p-2 bg-red-400 font-medium font-fredoka lg:text-2xl">
                            <AiFillWarning className="text-6xl lg:text-3xl text-white" />
                            <span className="text-white">Howdy there! Light mode is currently a huge mess and an eyesore. Do pardon the mess, you should probably go back to dark mode.</span>
                        </div>
                        <div className="px-8 sm:px-16 lg:px-48 xl:px-60 2xl:px-96 py-16">
                            <NavigationRoot />
                            <main className="flex flex-col min-h-screen py-8">
                                {children}
                            </main>
                        </div>
                </body>
            </ColourProvider>
        </html>
    )
}
