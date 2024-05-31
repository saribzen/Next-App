import { cookies } from "next/headers";
// import { redirect } from "next/navigation";

// export const verifyToken = () => {
//   const token = cookies().get("access-token")?.value;

//   if (token == undefined) redirect("/");
// };

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  // protected routes (admin routes)
  if (req.nextUrl.pathname.startsWith("/studentdashboard")) {
    const role = cookies().get("role")?.value;
    if (role == "student") {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/auth/login", req.url));
    }
  }

  if (req.nextUrl.pathname.startsWith("/teacherdashboard")) {
    const role = cookies().get("role")?.value;
    if (role == "teacher") {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/auth/login", req.url));
    }
  }
}
