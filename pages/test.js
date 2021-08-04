//import executeQuery from "../lib/db";
// import Head from 'next/head'
import { useState } from "react";
import Layout from "../components/layout";

export default function Test() {
    const [title, setTitle] = useState('')
    const [director, setDirector] = useState('')
    const [genre, setGenre] = useState('')
    const [location, setLocation] = useState('')
    
    const submitData = async e => {
        e.preventDefault()
        const response = await fetch('http://localhost:3000/api/post', {
            method: 'POST',
            body: JSON.stringify({title, director, genre, location})
        });
        if(!response.ok) {
            throw new Error(response.statusText)
        }

        return await response.json();
    }

    return (
        <Layout>
            <form
              onSubmit={submitData}>
                <h1>Create row in cosa</h1>
                <input
                  autoFocus
                  onChange={e => setTitle(e.target.value)}
                  placeholder="Title"
                  type="text"
                  value={title}
                />
                <input
                  autoFocus
                  onChange={e => setDirector(e.target.value)}
                  placeholder="Director"
                  type="text"
                  value={director}
                />
                <input
                  autoFocus
                  onChange={e => setGenre(e.target.value)}
                  placeholder="Genre"
                  type="text"
                  value={genre}
                />
                <input
                  autoFocus
                  onChange={e => setLocation(e.target.value)}
                  placeholder="Location"
                  type="text"
                  value={location}
                />
                <input 
                  disabled={!title || !director || !genre || !location }
                  type="submit"
                  value="Crear"
                />
                <a className="back" href="#" onClick={() => alert("YOU'RE HERE FOREVER.")} >Cancelar</a>
            </form>
        </Layout>
    )
}