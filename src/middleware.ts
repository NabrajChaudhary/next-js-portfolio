import { NextResponse } from "next/server";

export function middleware(request:any){
    // if (request.nextUrl.pathname != "/login") {
        const response = NextResponse

    try {
        const url = request.nextUrl.clone();
        const urlPath = url.pathname.split('/').filter((x) => x !== '')
       if(['/', '/admin', '/test'].includes(url.pathname)){
        return response.next()
       }
       url.pathname = "/"
       return response.redirect(url)
        console.log(urlPath)
    } catch (error) {
        console.log(error)
       
    }
       
        
    
    // }
    
}

export const config = {
    matcher: [
      /*
       * Match all request paths except for the ones starting with:
       * - api (API routes)
       * - _next/static (static files)
       * - _next/image (image optimization files)
       * - favicon.ico (favicon file)
       */
      '/((?!api|_next/static|_next/image|favicon.ico|nlogo.png).*)',
    ],
  }