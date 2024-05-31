"use server";

import axios from "axios";

const createCourse = async (name: string, desc: string) => {
  try {
    const data = await axios.post("http://localhost:3001/courses/", {
      Cname: name,
      description: desc,
    });

    console.log(data.data);
  } catch (err) {
    console.log(err);
  }
};

export default createCourse;
