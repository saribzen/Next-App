"use client";

import getCourses from "@/api/getCourses";
import { Label } from "@/components/ui/label";
import { courseType } from "@/constants/types";
import React, { useEffect, useState } from "react";
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
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import createCourse from "@/api/createCourse";
import deleteCourse from "@/api/deleteCourse";
import { useRouter } from "next/navigation";
import { DialogClose } from "@radix-ui/react-dialog";

// MAIN
const courses = () => {
  const [data, setData] = useState<courseType[]>([]);
  const [cname, setCname] = useState("");
  const [desc, setDesc] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const router = useRouter();

  useEffect(() => {
    async function fetchMyAPI() {
      setData(await getCourses());
    }

    fetchMyAPI();
  }, []);

  const handleInsert = () => {
    if (cname !== "" && desc !== "") {
      createCourse(cname, desc);
      router.refresh();
    }
  };

  const handleDelete = (id: string) => {
    deleteCourse(id);
    router.refresh();
  };

  return (
    <div className=" w-auto m-32">
      <div className=" flex justify-between py-2">
        <Label>COURSE TABLE</Label>
        <Dialog>
          <DialogTrigger>
            <Button>New</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Course</DialogTitle>
              <DialogDescription>
                This action cannot be undone.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="coursename"
                  placeholder="Enter Course Name"
                  className="col-span-3"
                  value={cname}
                  onChange={(event) => setCname(event.target.value)}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Description
                </Label>
                <Input
                  id="coursedesc"
                  placeholder="Enter Course Description"
                  className="col-span-3"
                  value={desc}
                  onChange={(event) => setDesc(event.target.value)}
                />
              </div>
              <DialogClose asChild>
                <Button onClick={handleInsert} className=" mt-5">
                  Add Course
                </Button>
              </DialogClose>

              <DialogClose asChild>
                <Button variant={"secondary"}>Cancel</Button>
              </DialogClose>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Table className="">
        <TableHeader>
          <TableRow>
            <TableHead className="">Course ID</TableHead>
            <TableHead>Course Name</TableHead>
            <TableHead className="">Course Description</TableHead>
            <TableHead className=""></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((course) => (
            <TableRow key={course.id}>
              <TableCell>{course.id}</TableCell>
              <TableCell>{course.Cname}</TableCell>
              <TableCell>{course.description}</TableCell>
              <TableCell>
                <Dialog>
                  <DialogTrigger>
                    <Button
                      onClick={() => {
                        setSelectedCourse(course.id);
                      }}
                      variant={"destructive"}
                    >
                      Delete
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Confirm Delete Course</DialogTitle>
                      <DialogDescription>
                        This action cannot be undone.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <DialogClose asChild>
                        <Button
                          onClick={() => {
                            handleDelete(selectedCourse);
                          }}
                          className=" mt-5"
                          variant={"destructive"}
                        >
                          Confirm Delete
                        </Button>
                      </DialogClose>

                      <DialogClose asChild>
                        <Button>Cancel</Button>
                      </DialogClose>
                    </div>
                  </DialogContent>
                </Dialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default courses;
