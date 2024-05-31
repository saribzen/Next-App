"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import React from "react";

const StudentDashboard = () => {
  const router = useRouter();

  return (
    <div className="m-24 ">
      <h1 className=" font-bold text-lg mb-6">Student Dashboard</h1>
      <div className=" flex flex-col w-32 items-stretch gap-6">
        <Button onClick={() => router.push("/studentdashboard/personalinfo")}>
          Personal Info
        </Button>
        <Button onClick={() => router.push("/studentdashboard/courses")}>
          Courses
        </Button>
      </div>
    </div>
  );
};

export default StudentDashboard;
