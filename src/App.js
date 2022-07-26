import Navbar from "./components/Navbar/Navbar";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./globalStyles";
import { lightTheme,darkTheme } from "./Themes";
import Country from "./components/Country/Country";
import axios from 'axios'
import React,{useState,useEffect} from 'react';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Pagination from "./components/Pagination/Pagination";
import CountryPage from "./components/CountryPage/CountryPage";


function App() {

  const [theme,setTheme] = useState('light')
  const themeToggle = ()=>{
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  const [allCountry,setAllCountry] = useState([])
  const [country,setCountry] = useState([])
  const [findCountry,setFindCountry] = useState(null)
  const [currentPage,setCurrentPage] = useState(1)
  const [postsPerPage] = useState(12)

  useEffect(()=>{
      axios.get("https://restcountries.com/v3.1/all?fields=name,capital,region,flags,population,region")
      .then(function(response){
          setAllCountry(response.data);
          setCountry(response.data)
      })
      .catch(function(error){
          console.log(error); 
      })
  },[])

  const changRegion=((e)=>{
      e.preventDefault()
      const region = e.target.value
      if(region === 'all'){
          setCountry(allCountry)
          setCurrentPage(1)
          setFindCountry(null)
      }else{
          const newCountry = allCountry.filter(country => country.region === region)
          setCountry(newCountry)
          setCurrentPage(1)
          setFindCountry(null)
      }
  })

  const changCountry=((e)=>{
      const findCountry = e.target.value
      if(findCountry){    
          const newCountry = allCountry.filter(item => 
              item.name.common.toLowerCase().includes(findCountry) || 
              item.name.common.includes(findCountry) ||
              item.name.official.toLowerCase().includes(findCountry) || 
              item.name.official.includes(findCountry) 
          )
          setFindCountry(newCountry)        
      }else if(findCountry === ''){
          setFindCountry(null)
      }
  })

  // Get current post

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentCountry = country.slice(indexOfFirstPost,indexOfLastPost)

  // Change Page
  const paginate = (pageNumber)=> setCurrentPage(pageNumber)

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles/>
      <BrowserRouter>
        <Navbar themeToggle={themeToggle} theme={theme}/>
        <Routes>

          <Route exact path="/" element={<>
            <Country country={currentCountry} findCountry={findCountry} changRegion={changRegion} changCountry={changCountry}/>
            {findCountry? (''):(
              <Pagination postsPerPage={postsPerPage} totalPosts={country.length} paginate={paginate} currentPage={currentPage}/>
            )}
          </>}/>
            
          <Route path="/:name" element={<CountryPage/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
