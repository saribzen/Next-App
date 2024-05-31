import getCourses from "@/api/getCourses";
import { Label } from "@/components/ui/label";
import { courseType } from "@/constants/types";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const CourseList = async () => {
  const data: courseType[] = await getCourses();

  return (
    <div className=" w-auto m-32">
      <Label>COURSE TABLE</Label>
      <Table className="">
        <TableHeader>
          <TableRow>
            <TableHead className="">Course ID</TableHead>
            <TableHead>Course Name</TableHead>
            <TableHead className="">Course Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((course) => (
            <TableRow key={course.id}>
              <TableCell>{course.id}</TableCell>
              <TableCell>{course.Cname}</TableCell>
              <TableCell>{course.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CourseList;
