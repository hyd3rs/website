import { Header } from '@std/components/Home/Header';
import { NameBrand } from "@std/components/Branding";
import { BiSolidBook } from 'react-icons/bi';

const Home = async () => {
    return (
        <div className="flex flex-col gap-y-8 w-full h-full text-center items-center sm:text-left sm:items-stretch justify-center p-8 md:px-24 lg:py-24 md:pb-0">
            <Header />
        </div>
    )
};

export const metadata = {
    test: "yes"
};

export default Home;