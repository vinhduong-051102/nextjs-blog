"use client";

import { Row, Col, Pagination } from "antd";
import Card from "@/app/(header-footer)/post/components/Card";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page() {
    const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetch(`/api/post?page=${page}&pageSize=${pageSize}`)
      .then((res) => res.json())
      .then((data) => {
        setTotal(data.total);
        setBlogs(data.blogs);
      });
  }, [page, pageSize]);
  return (
    <div className="w-full">
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Row gutter={[16, 16]}>
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
        </Col>
        <Col span={24}>
          <Pagination
            total={total}
            pageSizeOptions={[10, 20, 50, 100]}
            pageSize={pageSize}
            current={page}
            onChange={(page, size) => {
              setPageSize(size)
              setPage(page);
            }}
          />
        </Col>
      </Row>
    </div>
  );
}
