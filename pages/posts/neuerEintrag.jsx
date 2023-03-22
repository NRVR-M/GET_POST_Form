import Link from 'next/link';
import React, { useState, useEffect } from 'react';

function App() {
    const [postId, setPostId] = useState(null);

    useEffect(() => {
        // POST request using fetch inside useEffect React hook
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'React Hooks POST Request Example' })
        };
        fetch('https://reqres.in/api/posts', requestOptions)
            .then(response => response.json())
            .then(data => setPostId(data.id));

        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);


    return (
        <div>
            <h3> test </h3>
            <div>Post ID: {postId} </div>

            <Link href="/posts/auswahl"> zur Auwahl </Link>
        </div>

    );


}

export default App;



