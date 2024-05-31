"use server";

import { loginResponseType } from "@/constants/types";
import axios from "axios";
import { cookies } from "next/headers";

const loginTeacher = async (email: string, pass: string) => {
  let res: loginResponseType = {
    success: "false",
    Userdata: { token: "", id: "", role: "" },
  };

  try {
    const data = await axios.post("http://localhost:3001/teachers/login", {
      email: email,
      pass: pass,
    });

    res = data.data;
  } catch (err) {
    console.log(err);
  }

  if (res.success) {
    cookies().set("access-token", res.Userdata.token, {
      httpOnly: true,
      maxAge: 24 * 60 * 60,
      sameSite: "strict",
    });
    cookies().set("Userid", res.Userdata.id, {
      httpOnly: true,
      maxAge: 24 * 60 * 60,
      sameSite: "strict",
    });
    cookies().set("role", res.Userdata.role, {
      httpOnly: true,
      maxAge: 24 * 60 * 60,
      sameSite: "strict",
    });
    return res;
  } else {
    return res;
  }
};

export default loginTeacher;
