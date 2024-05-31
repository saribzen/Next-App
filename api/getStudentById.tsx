"use server";

import { studentType } from "@/constants/types";
import { cookies } from "next/headers";

const getStudentById = async () => {
  let student: studentType[] = [
    {
      id: "",
      Sname: "",
      email: "",
      role: "",
    },
  ];
  const Userid = cookies().get("Userid")?.value;

  try {
    student = await fetch(`http://localhost:3001/students/${Userid}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => data);
  } catch (err) {
    console.log(err);
  }

  return student;
};

export default getStudentById;
