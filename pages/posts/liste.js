import Link from 'next/link';
import React from "react";



class App extends React.Component {

    // Constructor 
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            DataisLoaded: false
        };
    }

    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
        fetch(
            "https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div>;

        return (
            <div className="App">
                <h1> Fetch data from an api in react </h1>  {
                    items.map((item) => (
                        <ol key={item.id} >
                            Username: {item.username},
                            Name: {item.name},
                            Email: {item.email}
                        </ol>
                    ))
                }

                <h2>
                    <Link href="/posts/first-post"> Zurück </Link>
                </h2>

            </div>
        );


    }

}

export default App;