export async function generateStaticParams() {
  const defaultParams = ["null"]
  return defaultParams.map(param => {
    return {
      id: param.toString()
    }
  })
}

export default async function BlogDetail({ params }) {
  const id = (await params).id;

  if (id !== "null") {
    const res = await fetch(`http://localhost:3000/api/post/${id}`);
    if (!res.ok) {
      return <p>Blog not found</p>;
    }
    const blog = await res.json();
    return (
      <div>
        <h1 className="text-[24px] text-bold">{blog.title} - {blog.random}</h1>
        <p className="mb-5">{blog.description}</p>
        <div>{blog.content}</div>
      </div>
    );
  }
  else {
    return <div>
      Đây là nội dung được render trong khi build
    </div>
  }
}