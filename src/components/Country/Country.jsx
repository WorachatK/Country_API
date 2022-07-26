import React from 'react'
import { 
    Container, 
    Wrapper,
    TabContainer,
    SeachContainer,
    InputSeach,
    FilterContainer,
    FilterSelect,
    FilterOption,
    CountryContainer,
    CountryBox,
    ImageCountry,
    HeadText,
    DescContainer,
    SubText,
    DescText,
    LinkName
} from './CountryElement'
import {BsSearch} from 'react-icons/bs'

const Country = ({changCountry,changRegion,findCountry,country}) => {

    

  return (
    <Container>
        <Wrapper>

            <TabContainer>
                <SeachContainer>
                    <BsSearch/>
                    <InputSeach placeholder='Search for a country...' onChange={changCountry}/>
                </SeachContainer>
                <FilterContainer>
                    <FilterSelect id="region" onChange={changRegion}>
                        <FilterOption disabled>Filter by Region</FilterOption>
                        <FilterOption value="all">all</FilterOption>
                        <FilterOption value="Africa">Africa</FilterOption>
                        <FilterOption value="Americas">America</FilterOption>
                        <FilterOption value="Asia">Asia</FilterOption>
                        <FilterOption value="Europe">Europe</FilterOption>
                        <FilterOption value="Oceania">Oceania</FilterOption>
                    </FilterSelect>
                </FilterContainer>
            </TabContainer>

            
                {findCountry ? (
                    <CountryContainer>
                    
                    {findCountry.map((item)=>(
                    <CountryBox key={item.name.common}>
                        <LinkName to={item.name.common}>
                        <ImageCountry src={item.flags.svg} alt='thai'/>
                        <HeadText>{item.name.official}</HeadText>
                        <DescContainer>
                            <SubText>Population</SubText>
                            <DescText>{item.population}</DescText>
                        </DescContainer>
                        <DescContainer>
                            <SubText>Region</SubText>
                            <DescText>{item.region}</DescText>
                        </DescContainer>
                        <DescContainer>
                            <SubText>Capital</SubText>
                            <DescText>{item.capital}</DescText>
                        </DescContainer>
                        </LinkName>
                    </CountryBox>
                    ))}
                    </CountryContainer>
                ):(
                    <>
                    <CountryContainer>
                    {country.map((item)=>(
                        <CountryBox key={item.name.common}>
                            <LinkName to={item.name.common} >
                            <ImageCountry src={item.flags.svg} alt='thai'/>
                            <HeadText>{item.name.official}</HeadText>
                            <DescContainer>
                                <SubText>Population</SubText>
                                <DescText>{item.population}</DescText>
                            </DescContainer>
                            <DescContainer>
                                <SubText>Region</SubText>
                                <DescText>{item.region}</DescText>
                            </DescContainer>
                            <DescContainer>
                                <SubText>Capital</SubText>
                                <DescText>{item.capital}</DescText>
                            </DescContainer>
                            </LinkName>
                        </CountryBox>
                    ))}
                    </CountryContainer>
                    </>
                )}
            

            
        </Wrapper>
    </Container>
  )
}

export default Country