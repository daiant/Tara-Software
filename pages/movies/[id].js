import Layout from "../../components/layout";
import { getAllMovieIds, getMovieData } from "../../lib/movies";
import ReactPlayer from "react-player/lazy";


export default function Movie({ movieData }) {
    return (
        <Layout>
            <div style={{width: '100%'}}>
                <video controls style={{display: 'block', margin: '0 auto'}}>
                    <source src={"/video/"+movieData.id+'.mp4'}
                            type="video/mp4">
                    </source>
                    Sorry, your browser doesn't support embedded videos.
                </video>
            </div>
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