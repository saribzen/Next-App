import getStudentById from "@/api/getStudentById";
import { Label } from "@/components/ui/label";
import { studentType } from "@/constants/types";
import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@/components/ui/table";

const PersonalInfoPage = async () => {
  const student: studentType[] = await getStudentById();

  return (
    <div className=" w-auto m-32">
      <Label>Personal Info</Label>
      <Table>
        <TableBody>
          <TableRow>
            <TableHead className="w-[400px]">ID</TableHead>
            <TableCell className="w-[400px]">{student[0].id}</TableCell>
          </TableRow>

          <TableRow>
            <TableHead>Student Name</TableHead>
            <TableCell>{student[0].Sname}</TableCell>
          </TableRow>

          <TableRow>
            <TableHead>Student Email</TableHead>
            <TableCell>{student[0].email}</TableCell>
          </TableRow>

          <TableRow>
            <TableHead>Student Role</TableHead>
            <TableCell>{student[0].role}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default PersonalInfoPage;
