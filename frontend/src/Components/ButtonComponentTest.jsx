import React from "react"
import styled from "@emotion/styled"
import SearchIcon from '@mui/icons-material/Search'
import FilterListIcon from '@mui/icons-material/FilterList';


const Button = styled.span`
    background-color: red;
    color: #fff;
    padding: 10px;
    border-radius: 30px;
`;

const SearchContainer = styled.div`
    display: flex;
    width: 100%;
    background-color: #fff;
`

const SearchBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: #fff;
    padding: 5px;
    margin-right: 5px;
    border: 1px solid #C4C7D0;
    border-radius: 10px;
`
const SearchIconWrapper = styled.div`
    padding: 2px;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #C4C7D0;
`
const SearchInput = styled.input`
    padding: 2px;
    width: 100%;
    height: 100%;
    border: none;
`
const FilterIconWrapper = styled.div`
    height: 40px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    color: #FFC529;
    border-radius: 10px;
    box-shadow: 2px 2px 5px 0px rgba(154, 159, 174, 0.2);
`

const ButtonComponentTest = () => {
    return(
        <>
        <h1>Button Styled Component</h1>
        <Button>Value</Button>
        <SearchContainer>
            <SearchBar>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <SearchInput placeholder="Search..." />
            </SearchBar>
            <FilterIconWrapper>
                <FilterListIcon />
            </FilterIconWrapper>
        </SearchContainer>
        </>
    )
}

export default ButtonComponentTest