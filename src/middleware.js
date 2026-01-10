// src/middleware.js
import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/login",
  },
});


export const config = { 
  matcher: [
    // "/",   
    // "/shops/:path*", 
    // "/wishlist", 
    // "/cart",     
    // "/blog/:path*",  

     "/((?!api|_next/static|_next/image|favicon.ico|login|.*\\..*).*)",
  ] 
};