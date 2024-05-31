"use client";

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
import { useRouter } from "next/navigation";
import { useState } from "react";

const RegisterPage = () => {
  const [isStudent, setIsStudent] = useState(true);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const router = useRouter();

  const handleRegister = () => {
    if (email !== "" && pass !== "" && name !== "" && role !== "") {
      if (isStudent) {
        setRole("students");
        alert("Student Register" + "\n" + email + "\n" + pass);
      } else {
        setRole("teachers");
        alert("Teacher Register" + "\n" + email + "\n" + pass);
      }
    } else {
      alert("Please input data");
    }
  };

  return (
    <div className="flex justify-center py-36">
      <Card className="w-[350px] shadow-xl">
        <CardHeader>
          <CardTitle>
            {isStudent ? "Student Register" : "Teacher Register"}
          </CardTitle>
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
                  id="name"
                  placeholder="Enter Username"
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Input
                  id="email"
                  placeholder="Enter Email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Input
                  id="pass"
                  type="Password"
                  placeholder="Enter Password"
                  onChange={(event) => setPass(event.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Input
                  id="role"
                  value={isStudent ? "students" : "teachers"}
                  disabled={true}
                />
              </div>
            </div>
          </form>
        </CardContent>

        <CardFooter className="flex justify-between pt-4">
          <Button onClick={() => router.push("/auth/login")} variant="outline">
            Back
          </Button>
          <Button onClick={handleRegister}>Register</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default RegisterPage;
