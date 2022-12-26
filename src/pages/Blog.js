import BlogCard from "../components/cardview/BlogCard";

const Blog = () => {
    return (
        <div className="">
            <div className="h-40 bg-fuchsia-300 text-white mb-5 mt-5 md:pl-20">
                <p>
                    <ul className="flex">
                        <li className="mr-5">Home</li>
                        <li className="mr-5">&#62;</li>
                        <li className="mr-5">Blogs</li>
                    </ul>
                </p>
                <p className="md:text-2xl lg:text-3xl mb-5">Blogs</p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                </p>
            </div>

            <div className="grid grid-cols-3 gap-x-10 mt-8">
                <div className="listView md:flex md:justify-around  col-span-2 md:px-20">
                    <BlogCard />
                    <BlogCard />
                </div>
                <div>
                    <input
                        className="bg-slate-200 p-5 w-max"
                        placeholder="Search for blogs"
                    />
                </div>
            </div>
        </div>
    );
};

export default Blog;
