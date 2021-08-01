import Layout from "../../components/layout";
import { getAllMovieIds, getMovieData } from "../../lib/movies";
import ReactPlayer from "react-player/lazy";


export default function Movie({ movieData }) {
    return (
        <Layout>
            {/* <video controls width="250">
                <source src={"/video/"+movieData.id+'.mp4'}
                        type="video/mp4">
                Sorry, your browser doesn't support embedded videos.
                </source>
            </video> */}
            <ReactPlayer 
                src={'video/' + movieData.id + '.mp4'}
                width='100%'
                height='100%'
                controls={true}
                />
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = getAllMovieIds()
    return {
        paths, 
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const movieData = await getMovieData(params.id)
    return {
        props: {
            movieData
        }
    }
}