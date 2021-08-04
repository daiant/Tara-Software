// import fs from 'fs'
// import path from 'path'
import { PrismaClient } from '@prisma/client'

// const moviesDirectory = path.join(process.cwd(), 'public/video')
const prisma = new PrismaClient();

export async function getServerSideProps() {
    const movies = await prisma.movie.findMany();
    return {
        props: {
            initialMovies: movies
        }
    };
}

export function getSortedMoviesData() {
    // Get file names under /movies
    const fileNames = fs.readdirSync(moviesDirectory)
    const allMoviesData = fileNames.map(fileName => {

        // remove extension from filename to get id
        
        const [id, extension] = fileName.split('.')
        // TODO: Read file Contents as the movie and so and so
        // TODO: Implement a database with info

        return {id, extension}
    })
    // sort movies by name
    return allMoviesData.sort((a, b) => {
        if(a.id < b.id) {
            return 1
        }
        else {
            return -1
        }
    })
}

export function getAllMovieIds() {
    const fileNames = fs.readdirSync(moviesDirectory)
    return fileNames.map(fileName => {
        const id = fileName.split('.')[0]
        return {
            params: {
                id: id
            }
        }
    })
}
export async function getMovieData(id) {
    const fullPath = path.join(moviesDirectory, `${id}.mp4`)
    // Al ser un video no se como gestionar esto. Encima luego va a ser una base de datos. Entiendes por donde voy?.
    return {id, fullPath}
}