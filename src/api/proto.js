

const URL = process.env.NODE_ENV === "production" ? process.env.GATSBY_AWS_URL: 'http://localhost:3000/prod'


export const saveEmail = async (email, keyword) => {
    
    return await fetch(`${URL}/email`,{
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        }, 
        body: JSON.stringify({
            email,
            keyword
            })
        })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            const { message } = data;
            return message

        }).catch(e => {
            console.log('error: ', e.message)
            return null;
        })

}