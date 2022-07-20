import axios from "axios"

async function getData(number) {

    const { data: users } = await axios("https://jsonplaceholder.typicode.com/users/" + number);

    
    const { data: post1}  = await axios("https://jsonplaceholder.typicode.com/posts?id=" + number );

    return { users , post1 };

 
}


export default getData;

