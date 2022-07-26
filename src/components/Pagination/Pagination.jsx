import React from 'react'
import { 
    NumberPage,
    Number,
    Page,
    Container,
    TextNumber
} from './PageElement'

const Pagination = ({postsPerPage,totalPosts,paginate,currentPage}) => {

    const pageNumbers = [];
    const lastPage = Math.ceil(totalPosts/postsPerPage)

    for(let i=1; i<= Math.ceil(totalPosts/postsPerPage);i++){
        pageNumbers.push(i)
    }

  return (
    <Container>
        <NumberPage>
            {currentPage === 1 ? (''):(<TextNumber onClick={()=>paginate(currentPage-1)}>Previous</TextNumber>)}
            <Page>
                {pageNumbers.map((number)=>(
                    (currentPage === number) ? (
                        <Number key={number} onClick={()=>paginate(number)} active={true}>{number}</Number>
                    ):(
                        <Number key={number} onClick={()=>paginate(number)}>{number}</Number>
                    )
                ))}
            </Page>
            {currentPage === lastPage ? (''):(<TextNumber onClick={()=>paginate(currentPage+1)}>Next</TextNumber>)}
        </NumberPage>
    </Container>
  )
}

export default Pagination