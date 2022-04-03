import { useState, useRef, useReducer } from "react"
import ReactPaginate from 'react-paginate'
import { FaEnvelope } from "react-icons/fa"

import { useEventContext } from "../../Global/Event/"
import { Socials } from "../../components/Socials"
import { Search } from "../../components/Search"
import { LoginHeader } from "../../components/LoginHeader"
import { Card } from "./Card"
import { searchCriterion } from '../../utils/data.placeholders';

import  { CardContainer, TournamentHome } from "./style"

export const Tournaments = () => {
    const { events, count=events.length } = useEventContext()
    const [searchFilter, setSearchFilter] = useState("title")
    const [pageNumber, setPageNumber] = useState(0)
    const [isSearch, setIsSearch] = useState(false)
    const [searchCount, setIsSearchCount] = useState(0)
    const [filteredEntries, setFilteredEntries] = useState([])

    const actions = {
        FILTER_TEXT: "SET_FILTER"
    } 
    
    const initialState = { text: "" }
    
    function entryReducer(state, action) {
        switch(action.type){
          case actions.FILTER_TEXT: 
            return { ...state, text: action.payload.text }
          default:
            throw new Error("something's not right")
          ;
        }
    }
    
    function setFilter(target){
        dispatch({type: actions.FILTER_TEXT, payload: { text: target }})
    }
      
    const [state, dispatch]  = useReducer(entryReducer, initialState)

    let condition = !(!count) 
    const limit = 1
    const _position = pageNumber * limit
    const pageCount = Math.ceil(events.length / limit)


    function selectEntries(_entries, { text }) {
        const saveCount = _entries.filter(link => link && link[searchFilter.toLowerCase()].toLowerCase().includes(text.toLowerCase()));
        setIsSearchCount(saveCount.length)
        setFilteredEntries(saveCount)
        return saveCount
    }

    function checkEntries() {
        if(count) {
          selectEntries(events, state)
          setIsSearch(true)
          return
        }
    }

    const inputRef = useRef(null)
    const [query, setQuery] = useState([])
    function onTextChange(){
        if(inputRef.current && inputRef.current.value) {
            setFilter(inputRef.current.value)
            if(count){
                const _QUERY = events.filter(link => link && link[searchFilter.toLowerCase()].toLowerCase().includes(state.text.toLowerCase()));
                setQuery(_QUERY)
                return
            }
        
            return
        }
    }
    

    function renderCards(){
        return (
        <>
            <CardContainer>
                {
                    filteredEntries.slice(_position, _position + limit).map((content, key) => <Card
                        {...content}
                        key={key}
                        eventBody={events[key]}
                    />
                    )
                }
            </CardContainer>
            <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={pageChange}
                containerClassName={"currentLink"}
                nextLinkClassName={"nextLink"}
                previousLinkClassName={"previousLink"}
                disabledClassName={"paginateDisabled"}
                activeClassName={"paginateActive"}
            />
        </>
        )
    }

    function pageChange({ selected }){
        setPageNumber(selected)
    }

    return(
        condition ?
            <TournamentHome>
                <LoginHeader />
                <FaEnvelope />
                <Search
                    onTextChange={onTextChange}
                    placeholder={searchCriterion[searchFilter]}
                    inputRef={inputRef} 
                    isSearch={isSearch}
                    setSearchFilter={setSearchFilter}
                    searchFilter={searchFilter}
                    setIsSearch={setIsSearch}
                    searchCount={searchCount}
                    setIsSearchCount={setIsSearchCount}
                    totalCount={count}
                    checkEntries={checkEntries}
                    queryText={query}
                    setFilter={setFilter}
                />
                { renderCards() }
                <Socials />
            </TournamentHome>
        :
            <TournamentHome>
                <h4>sorry no events at the moment ... </h4>
            </TournamentHome>
    )
}