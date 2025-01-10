import blogs from "@/data/blog.json";
import { unstable_cache } from "next/cache";


export async function GET(request, { params }) {
  const id = (await params).id;
  const blog = blogs.find((blog) => blog.id === parseInt(id, 10));
  const getRandom = unstable_cache(async () => {
    return Math.floor(Math.random() * 100)
  }, [], {
    tags: 'random',
    revalidate: 60,
  })

  const randomNum = await getRandom();

  if (blog) {
    return new Response(JSON.stringify({...blog, random: randomNum}), { status: 200 });
  } else {
    return new Response(JSON.stringify({ error: "Blog not found" }), {
      status: 404,
    });
  }
}
