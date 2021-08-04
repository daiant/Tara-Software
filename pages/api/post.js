import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default async function handle(req, res) {
    const {title, director, genre, location} = JSON.parse(req.body)
    
    const result = await prisma.movie.create({
        data: {
            title: title, 
            director: director, 
            genre: genre,
            location: location
        },
    })
    res.json(result)
}