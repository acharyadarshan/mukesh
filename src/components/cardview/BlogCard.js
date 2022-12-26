function BlogCard() {
    return (
        <div className="md:px-5 lg:px-10 xl:px-10">
            <div className="mb-3 rounded-xl">
                <img
                    className="rounded-xl"
                    src="https://img.freepik.com/free-photo/online-message-blog-chat-communication-envelop-graphic-icon-concept_53876-139717.jpg?w=2000&t=st=1672050946~exp=1672051546~hmac=20de707d45f786b11c9d4c275703195fb7dfe08fa2f6497c0c233e99947834e8"
                    alt=""
                />
            </div>
            <div className="mb-3">Blog Title</div>
            <div className="flex justify-between mb-3 text-red-500">
                <p>Author</p>
                <p>Date</p>
            </div>
            <div className="mb-3 md:text-md">
                lorem ipsumExcepteur Lorem sunt aute sit ipsum pariatur eu id non pariatur
                cillum in do.
            </div>
        </div>
    );
}

export default BlogCard;
