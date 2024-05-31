"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

const Teacherdashboard = () => {
  const router = useRouter();

  return (
    <div className="m-24 ">
      <h1 className=" font-bold text-lg mb-6">Teacher Dashboard</h1>
      <div className=" flex flex-col w-32 items-stretch gap-6">
        <Button onClick={() => router.push("/teacherdashboard/students")}>
          Students
        </Button>
        <Button onClick={() => router.push("/teacherdashboard/courses")}>
          Courses
        </Button>
      </div>
    </div>
  );
};

export default Teacherdashboard;
