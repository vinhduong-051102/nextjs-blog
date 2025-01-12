import blogs from "@/data/blog.json";
import {delay} from "@/common/commonFunc";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") || "1", 10);
  const pageSize = parseInt(searchParams.get("pageSize") || "2", 10);

  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const paginatedBlogs = blogs.slice(startIndex, endIndex);
  await delay(5000);

  return new Response(
    JSON.stringify({
      page,
      pageSize,
      total: blogs.length,
      blogs: paginatedBlogs,
    }),
    { status: 200 },
  );
}
