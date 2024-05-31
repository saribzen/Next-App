"use server";

import { loginResponseType } from "@/constants/types";
import { cookies } from "next/headers";

const loginStudent = async (email: string, pass: string) => {
  let res: loginResponseType = {
    success: "false",
    Userdata: { token: "", id: "", role: "" },
  };

  try {
    res = await fetch("http://localhost:3001/students/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, pass }),
    })
      .then((response) => response.json())
      .then((data) => data);
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

export default loginStudent;
