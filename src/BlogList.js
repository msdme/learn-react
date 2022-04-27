//Perhatikan props disini
//Disini biasanya pakai props, tapi pakai magic, 
//yang harusnya {props}, const blogs= props.blogs
//jadi pakai extract langsung, ({blogs, title})
const BlogList = ({blogs, title}) => {
    
    return (
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={ blog.id }>
                    <h2>{ blog.title }</h2>
                    <p> Written By { blog.author }</p>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;
