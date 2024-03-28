import { Header, Post, PostsContainer } from "@std/components/Corner/Home";

const Page = async () => {
    return (
        <>
            <div className="flex flex-col items-start gap-y-4 p-8 w-full px-8 md:px-24 md:pb-0">
                <Header />
                <PostsContainer>
                    <Post title="Welcome to my corner!" author="Dani" slug="hello" />
                    <Post title="Welcome to my corner!" author="Dani" slug="hello" />
                    <Post title="Welcome to my corner!" author="Dani" slug="hello" />
                    <Post title="Welcome to my corner!" author="Dani" slug="hello" />
                </PostsContainer>
            </div>
        </>
    )
};

export default Page;