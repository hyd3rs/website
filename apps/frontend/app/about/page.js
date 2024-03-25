import { BiLink, BiWinkSmile } from 'react-icons/bi';

export default function About() {
    return (
        <div className="flex flex-col gap-y-8 w-full px-8">
            <div className="flex flex-col gap-y-4">
                <div className="flex flex-row items-center gap-x-4 font-outfit">
                    <h1 className="text-5xl font-bold">about me!</h1>
                    <BiWinkSmile className="text-4xl" />
                </div>
                <span className="text-2xl font-regular font-outfit">
                    I&apos;m Dani. Outside of my work and studies, I have a passion for web development and UI design.
                </span>
            </div>
        </div>
    )
};