import validator from 'validator';

const URL = process.env.NODE_ENV === "production" ? process.env.GATSBY_AWS_URL: 'http://localhost:3000/prod'

export const saveEmail = async (email, keyword) => {

    if (!validator.isEmail(email)) {
        alert(`${email} is not a valid email.`)
        return;
    }

    console.log('node: ', process.env.NODE_ENV);
    console.log('url: ', URL);
    console.log('gatsby: ', process.env.GATSBY_AWS_URL);


    
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