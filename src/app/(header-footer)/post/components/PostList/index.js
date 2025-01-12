import {Col, Row} from "antd";
import Link from "next/link";
import Card from "@/app/(header-footer)/post/components/Card";
import {useEffect} from "react";

const PostList = () => {
  useEffect(() => {
    fetch(`/api/post?page=${page}&pageSize=${pageSize}`)
      .then((res) => res.json())
      .then((data) => {
        setTotal(data.total);
        setBlogs(data.blogs);
      });
  }, [page, pageSize]);
  return <Row gutter={[16, 16]}>
    {blogs.map((item, index) => {
      return (
        <Col span={8} key={index}>
          <Link href={`/post/${item.id}`}>
            <Card title={item.title} description={item.description} />
          </Link>
        </Col>
      );
    })}
  </Row>
}

export default PostList;
