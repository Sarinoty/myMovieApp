import prisma from "@/utils/prisma";
import * as bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();

  const user = await prisma.user.findFirst({ // On regarde s'il y a bien un utilisateur avec cet email
    where: {
      email: body.email,
    },
  });

  if (user && (await bcrypt.compare(body.password, user.password))) { // On check que le mot de passe est bon
    const { password, ...rest } = user;
    return NextResponse.json(rest); // On renvoie l'utilisateur sans le mot de passe
  }

  return NextResponse.json(null); // Quand next/auth reçoit null il comprend que la connexion a échoué
}