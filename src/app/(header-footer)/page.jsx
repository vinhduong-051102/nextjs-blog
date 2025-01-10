"use client";

import "./style.css";
import {
  R_375px,
  R_1440px,
  Original,
} from "@/app/(header-footer)/components/Resolution";
import { Col, Row } from "antd";
import Card from "@/app/(header-footer)/components/Card";
import { useRef } from "react";
import Streaming from "@/app/(header-footer)/components/Streaming";
import Image from "next/image";

export default function Home() {
  const ref375 = useRef(null);
  const ref1440 = useRef(null);

  return (
    <div className="w-full flex justify-center flex-col items-center gap-[50px]">
      <h1 className="text-6xl font-extrabold flex items-center">
        The React Framework for the Web
      </h1>
      <h3 className="text-2xl w-[70%] text-center font-medium">
        Used by some of the world's largest companies, Next.js enables you to
        create high-quality web applications with the power of React components.
      </h3>
      <br />
      <br />
      <Row className="w-full" gutter={[20, 20]}>
        <Col span={8}>
          <Card
            onBlur={(e) => {
              e.stopPropagation();
              ref375.current.stop();
              ref1440.current.stop();
            }}
            onHover={(e) => {
              e.stopPropagation();
              ref375.current.start();
              ref1440.current.start();
            }}
            header={
              <div className="relative w-[278px] h-[211px] left-1/2 transform -translate-x-1/2">
                <div className="absolute z-10">
                  <Original />
                </div>
                <div className="absolute z-20 top-[60px] left-[-20px]">
                  <R_1440px ref={ref1440} />
                </div>
                <div className="absolute z-30 top-[120px] left-[-40px]">
                  <R_375px ref={ref375} />
                </div>
              </div>
            }
            title="Built-in Optimizations"
            description="Automatic Image, Font, and Script Optimizations for improved UX and Core Web Vitals."
          />
        </Col>
        <Col span={8}>
          <Card
            header={<Streaming />}
            title="Dynamic HTML Streaming"
            description="Instantly stream UI from the server, integrated with the App Router and React Suspense."
          />
        </Col>
        <Col span={8}>
          <Card
            header={
              <Image
                src="/spheres-light.avif"
                alt=""
                width={260}
                height={211}
              />
            }
            title="React Server Components"
            description="Add components without sending additional client-side JavaScript. Built on the latest React features."
          />
        </Col>
        <Col span={8}>
          <Card
            title="Data Fetching"
            description="Make your React component async and await your data. Next.js supports both server and client data fetching."
          />
        </Col>
        <Col span={8}>
          <Card
            title="CSS Support"
            description="Style your application with your favorite tools, including support for CSS Modules, Tailwind CSS, and popular community libraries."
          />
        </Col>
        <Col span={8}>
          <Card
            title="Client and Server Rendering"
            description="Flexible rendering and caching options, including Incremental Static Regeneration (ISR), on a per-page level."
          />
        </Col>
      </Row>
    </div>
  );
}
