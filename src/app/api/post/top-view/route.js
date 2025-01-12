import blogs from "@/data/blog.json";
import {delay} from "@/common/commonFunc";

export async function GET() {
  const topBlogs = blogs
    .sort((a, b) => b.view - a.view)
    .slice(0, 5);
  await delay(2000);
  return new Response(
    JSON.stringify({
      topBlogs
    }),
    { status: 200 },
  );
}
