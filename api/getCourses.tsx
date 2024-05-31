"use server";

import { courseType } from "@/constants/types";

const getCourses = async () => {
  let courses: courseType[] = [];

  try {
    courses = await fetch("http://localhost:3001/courses", {
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

  return courses;
};

export default getCourses;
