import React, {useState, useEffect} from "react"
import { Link } from "gatsby"
import styled, {keyframes} from 'styled-components'
import {isLight} from './isLight'
const key = `AIzaSyBVnim0e-dWFqDyKN0FQrUzcV2ZZg1pFc4`;
const link = `1ix43kxRXfO4YdvPTesdgPc1NVZLi0vnQgvBRvK74Kb4`;
const API = `https://sheets.googleapis.com/v4/spreadsheets/${link}/values:batchGet?ranges=Sheet1&majorDimension=ROWS&key=${key}`;




const useFetch = (keyword, isLoadingCallback) => {


    const [response, setResponse] = useState(null);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
  
    useEffect(() => {

  
      const fetchData = async () => {
        isLoadingCallback(true);
  
        try {
            const res = await fetch(API);
            const data = await res.json();
  
            setResponse(data);
            let batchRowValues = data.valueRanges[0].values;
            const rows = [];
            for (let i = 1; i < batchRowValues.length; i++) {
            let rowObject = {};
            for (let j = 0; j < batchRowValues[i].length; j++) {
                rowObject[batchRowValues[0][j]] = batchRowValues[i][j];
            }
            rows.push(rowObject);
            }


              console.log('keyword fetch: ', keyword);

            console.log('rows: ', rows);
            console.log('row: ', rows.find(row => row.keyword === keyword))
            setData(rows.find(row => row.keyword === keyword))
            isLoadingCallback(false);
        } catch (error) {
          setError(error);
        } 
      };
      fetchData();
    }, []);
    return { data, response, error };
  };
  



const Proto = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [keyword, setKeyword] = useState(false);

    const response = useFetch(props.keyword, setIsLoading);
    useEffect(() => {
    setKeyword(props.keyword)
    }, [])

    const { error, data } = response;
    console.log('data: ', data);
    console.log('props.keyword: ', props.keyword)

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (isLoading) {
    return (
    <div>
        <Loader>Loading<Blink>...</Blink> </Loader>
    </div>
    )
  } else {
    return (
        <Parent>
            <Header  style={{backgroundColor: `${data.accent ? data.accent : `#fff`}`}} >
                <Title style={{color: `${isLight(data.accent) ? `black`: `white`}`}} >{data.keyword}</Title>
            </Header>
            <Hero>
                <Media src={data.image} />
                <HookBox>
                    <Hook>
                        <MainHook>
                            {data.hook}
                        </MainHook>
                        <SubHook>
                            {data.subhook}
                        </SubHook>
                    </Hook>
                    <Form name={`${data.keyword}`} method="post" data-netlify="true" action={`/proto/${data.keyword}`}>
                        <input type="hidden" name="form-name" value="contact" />
                        <Input  placeholder={`${data.email_text}`} name="email" />
                        <Button type="submit">Go!</Button>
                    </Form>
                </HookBox>
            </Hero>
            <Copy style={{backgroundColor: `${data.accent ? data.accent : `#fff`}`}}>
                <Text style={{color: `${isLight(data.accent) ? `black`: `white`}`}}>
                    {data.copy}
                </Text>
            </Copy>
        </Parent>
    )
  }
}

export default Proto

const Parent = styled.div`
    width: 100vw;
    font-family:  Roboto;
`

const Header = styled.div`
`
const Title = styled.h2`
padding: 1rem 1rem;
`
const Hero = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
min-height: 75vh;
`
const Media = styled.img`
max-width: 300px;
`
const HookBox = styled.div`
margin 0 1rem;

`
const Hook = styled.div`

`
const MainHook = styled.h2`
margin: 0;
padding: 0;
`
const SubHook = styled.h3`
margin: 0;
padding:.5rem 0;
font-weight: normal;
`
const Form = styled.form`
font-family:  Roboto;

`
const Input = styled.input`
    height: 38px;
    border-radius: 4px;
    padding: 0 .5rem;
    margin: 1rem 0;
    border: 2px solid #003344;
`
const Button = styled.button `
  background-color: #1A202D;
  padding: .25rem 1rem;  
  margin: 2px;
  border-radius: 4px;
  color: white;
  &:hover {
    background-color:transparent;
    color: black;
    border: 2px solid black
  }
`


const Copy = styled.div`
min-height: 50vh;
display:flex;
align-content: center;
justify-content: center;
`
const Text = styled.p`
justify-self: center;
align-self: center;
margin: 4rem 0;
width: 50%;
@media (max-width: 768px) {
    width: 90%; 
    margin: 1rem 0;
  }

`
const flash = keyframes`
0%{     color: #000;    }
49%{    color: #000; }
60%{    color: transparent; }
99%{    color:transparent;  }
100%{   color: #000;    }
`

const Loader = styled.div`
font-family:  Roboto Mono;
text-align: center;
margin-top: 25%;
display: flex;
justify-content: center;
`
const Blink = styled.div`
font-family: Roboto Mono;
animation:${flash} 1.2s infinite;
`