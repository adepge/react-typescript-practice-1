const BlogList = ({blogs, title}:{blogs:any; title:string;}) => {
    // const blogs = props.blogs;
    // const title = props.title;

    // console.log(props,blogs);
    return ( 
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map((blog: any) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;