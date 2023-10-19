'use client'
import Head from "next/head";
import { GET, POST } from "../api/catfacts";
import { useEffect, useState } from "react";

const Animals = () => {
    const [catfacts, setCatFacts] = useState([])

    GET()
    .then((data) => {
        console.log(data);
        setCatFacts(data);
    })
    .catch((error) => {
        console.error("Error fetching cat facts: ", error);
    });

    async function postCatFacts() {
        try {
            const data = { facts };
            const response = await POST(data);
            console.log('POST Request Response:', response.data);
        } catch (error) {
            console.error('Error making POST request:', error);
        }
    }
    
    postCatFacts();
    
    useEffect(() => {
        GET();
    }, [])

    return (
        <>
            <Head>
                <title>Animals</title>
            </Head>
            <h1>ANIMALS</h1>
            <section>
                {JSON.stringify(data)}
            </section>
        </>
    )
}

export default Animals;