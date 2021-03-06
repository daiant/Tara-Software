import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handle(req, res) {
    const movies = await prisma.movie.findMany();
    res.json(movies);
}