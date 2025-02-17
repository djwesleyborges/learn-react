import { NextRequest, NextResponse } from "next/server";



// CRIANDO UM MIDDLEWARE

export function middleware(request: NextRequest) {

    const authenticated = false; // SIMULANDO NAO AUTENTICADO
    //const authenticated = true; // SIMULANDO AUTENTICADO

    if(request.nextUrl.pathname.startsWith('/dashboard') && !authenticated) {
        console.log("ACESSO NEGADO!! FAVOR AUTENTICAR!")
        return NextResponse.redirect(new URL('/', request.url))
    }
    return NextResponse.next();
}