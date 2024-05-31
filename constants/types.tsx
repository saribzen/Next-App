export type courseType = {
  id: string;
  Cname: string;
  description: string;
};

export type studentType = {
  id: string;
  Sname: string;
  email: string;
  role: string;
};

export type loginResponseType = {
  success: string;
  Userdata: {
    id: string;
    token: string;
    role: "teacher" | "student" | "";
  };
};
