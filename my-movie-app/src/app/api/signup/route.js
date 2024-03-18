import prisma from "@/utils/prisma";
import * as bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(request) {
    const body = await request.json();

    const user = await prisma.user.create({
        data: {
            email: body.email,
            password: await bcrypt.hash(body.password, 10) // 10 c'est le salt
        }
    });

    // On récupère et on renvoie l'utilisateur qui a été créé
    const {password, ...rest} = user; // On sépare le password du reste
    return NextResponse.json(rest); // On renvoie l'utilisateur sans le mot de passe
}