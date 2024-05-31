"use server";

import axios from "axios";
import { cookies } from "next/headers";

const deleteCourse = async (id: string) => {
  try {
    const token = cookies().get("access-token")?.value;

    const data = await axios.delete("http://localhost:3001/courses/" + id, {
      headers: {
        Authorization: token,
      },
    });

    console.log(data.data);
  } catch (err) {
    console.log(err);
  }
};

export default deleteCourse;
