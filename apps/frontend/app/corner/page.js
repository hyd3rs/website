import { Header, Post, PostsContainer } from "@std/components/Corner/Home";
import { getAllPosts } from "./fsHandling";

//export const revalidate = 1800;

const Page = async () => {
    const posts = await getAllPosts();
    return (
        <>
            <div className="flex flex-col items-start gap-y-4 p-8 w-full px-8 md:px-24 md:pb-0">
                <Header />
                <PostsContainer>
                    {
                        posts?.map((post, key) => {
                            return (
                                <div key={key}>
                                    <Post {...post}>
                                        {post?.description}
                                    </Post>
                                </div>
                            );
                        })
                    }
                </PostsContainer>
            </div>
        </>
    )
};

export default Page;