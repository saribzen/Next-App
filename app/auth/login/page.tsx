"use client";

import loginStudent from "@/api/loginStudent";
import loginTeacher from "@/api/loginTeacher";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { loginResponseType } from "@/constants/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginPage = () => {
  const [isStudent, setIsStudent] = useState(true);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    if (email !== "" && pass !== "") {
      if (isStudent) {
        const res: loginResponseType = await loginStudent(email, pass);
        if (res.success) {
          router.push("/studentdashboard");
        } else {
          alert("Wrong Email or Password");
        }
      } else {
        const res: loginResponseType = await loginTeacher(email, pass);
        if (res.success) {
          router.push("/teacherdashboard");
        } else {
          alert("Wrong Email or Password");
        }
      }
    } else {
      alert("Please input data");
    }
  };

  return (
    <div className="flex justify-center py-36">
      <Card className="w-[350px] shadow-xl">
        <CardHeader>
          <CardTitle>{isStudent ? "Student Login" : "Teacher Login"}</CardTitle>
          <div className="flex items-center justify-between pt-6 pb-3">
            <Button
              className=" px-11"
              onClick={() => setIsStudent(true)}
              variant={isStudent ? "default" : "outline"}
            >
              Student
            </Button>
            <Button
              className=" px-11"
              onClick={() => setIsStudent(false)}
              variant={isStudent ? "outline" : "default"}
            >
              Teacher
            </Button>
          </div>
        </CardHeader>

        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Input
                  id="email"
                  placeholder="Enter Email"
                  onChange={(event) => setEmail(event.target.value)}
                  value={email}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Input
                  id="pass"
                  type="Password"
                  placeholder="Enter Password"
                  onChange={(event) => setPass(event.target.value)}
                  value={pass}
                />
              </div>
            </div>
          </form>
        </CardContent>

        <CardFooter className="flex justify-between pt-4">
          <Button onClick={() => router.push("/")} variant="outline">
            Cancel
          </Button>
          <Button onClick={handleLogin}>Login</Button>
        </CardFooter>
        <CardFooter className="flex justify-center pt-4">
          <Label>
            Dont have an Account?{" "}
            <Link className=" text-blue-700" href={"/auth/register"}>
              Register
            </Link>
          </Label>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginPage;
