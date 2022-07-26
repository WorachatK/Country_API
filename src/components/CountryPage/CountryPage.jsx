import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { 
    Container,
    Wrapper,
    BackContainer,
    BackLink,
    CountryContainer,
    FlagContainer,
    FlagImage,
    AboutContainer,
    NameContainer,
    Name,
    DescContainer,
    DescWrap,
    Desc,
    NameDesc,
    BorderContainer
} from './PageElement'

const CountryPage = () => {
    const {name} = useParams()

    const [country,setCountry] = useState([])

    useEffect(()=>{
        axios.get("https://restcountries.com/v3.1/name/"+name+"?fullText=true")
        .then(function(response){
            setCountry(response.data)
        })
        .catch(function(error){
            console.log(error); 
        })
    },[name])

  return (
    <Container>
        <Wrapper>
            <BackContainer>
                <BackLink to='/'>
                    Back
                </BackLink>
            </BackContainer>
            {country.map(item=>(
                <CountryContainer key={item.name.common}>
                    <FlagContainer>
                        <FlagImage src={item.flags.svg}/>
                    </FlagContainer>
                    <AboutContainer>
                        <NameContainer><Name>{item.name.official}</Name></NameContainer>
                        <DescContainer>
                            <DescWrap>
                                <NameDesc>Name: </NameDesc>
                                <Desc>{item.name.common}</Desc>
                            </DescWrap>
                            <DescWrap>
                                <NameDesc>Population: </NameDesc>
                                <Desc>{item.population}</Desc>
                            </DescWrap>
                            <DescWrap>
                                <NameDesc>Region: </NameDesc>
                                <Desc>{item.region}</Desc>
                            </DescWrap>
                            <DescWrap>
                                <NameDesc>Sub Region</NameDesc>
                                <Desc>{item.subregion}</Desc>
                            </DescWrap>
                            <DescWrap>
                                <NameDesc>Capital: </NameDesc>
                                <Desc>{item.capital}</Desc>
                            </DescWrap>
                            <DescWrap>
                                <NameDesc>Top Level Domain: </NameDesc>
                                <Desc>{item.tld}</Desc>
                            </DescWrap>
                            <DescWrap>
                                <NameDesc>Borders Country: </NameDesc>
                                <Desc>{item.borders}</Desc>
                            </DescWrap>
                        </DescContainer>
                        <BorderContainer></BorderContainer>
                    </AboutContainer>
                </CountryContainer>
            ))}
            
        </Wrapper>
    </Container>
  )
}

export default CountryPage