import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import styled from 'styled-components'

import { buildLexer, parseSearch } from './lexer.js'

export interface SearchFields {
  [fieldName: string]: {
    // allows us to implement correct input elements for search input helper box
    fieldType: 'text' | 'number' | 'currency' | 'date'
  }
}

interface SearchTermLit {
  type: 'term'
  value: string
  modifier: 'positive' | 'negative' | null
  isQuoted: boolean
}

interface SearchFieldMatch {
  type: 'fieldMatch'
  field: string
  value: string
  modifier: 'positive' | 'negative' | null
  isQuoted: boolean
}

export type SearchTerm = SearchTermLit | SearchFieldMatch
export type SubmitValue = SearchTerm[]

export interface SearchProps {
  fields?: SearchFields
  placeholder?: string
  color?: string
  background?: string
  debounce?: number
  onSubmit: (value: SubmitValue) => void
}

interface SearchWrapperProps extends React.DOMAttributes<HTMLFormElement> {
  color: string
}

interface SearchInputProps extends React.DOMAttributes<HTMLInputElement> {
  color: string
}

interface SearchIconProps extends React.DOMAttributes<HTMLButtonElement> {
  color: string
}

const Search: React.FC<SearchProps> = ({
  fields = {},
  placeholder,
  color = 'black',
  background = 'transparent',
  debounce = 250,
  onSubmit,
}) => {
  const [search, setSearch] = useState<SubmitValue>([])
  const [hasSubmitted, setHasSubmitted] = useState(true)
  const buttonRef = useRef<HTMLButtonElement | null>(null)

  const lexer = useMemo(() => buildLexer(fields), [fields])

  const handleSearchChange: React.ChangeEventHandler<HTMLInputElement> =
    useCallback(
      (event) => {
        const target = event.target as HTMLInputElement
        const terms = parseSearch(lexer, target.value)
        setSearch(terms)
        setHasSubmitted(false)
      },
      [setSearch, setHasSubmitted, lexer],
    )

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement> | null) => {
      if (event !== null) {
        event.preventDefault()
        buttonRef.current?.blur()
      }
      if (!hasSubmitted) {
        onSubmit(search)
        setHasSubmitted(true)
      }
    },
    [search, hasSubmitted, setHasSubmitted, onSubmit],
  )

  useEffect(() => {
    const timeoutHandler = setTimeout(() => {
      handleSubmit(null)
    }, debounce)

    return () => clearTimeout(timeoutHandler)
  }, [debounce, search, handleSubmit])

  return (
    <SearchWrapper color={background} onSubmit={handleSubmit}>
      <SearchInput
        placeholder={placeholder}
        type="search"
        name="search"
        color={color}
        onChange={handleSearchChange}
      ></SearchInput>
      <SearchIcon color={color} ref={buttonRef} />
    </SearchWrapper>
  )
}

const SearchWrapper = styled.form<SearchWrapperProps>`
  display: flex;
  width: 100%;
  min-width: 250px;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
  border-radius: 10px;
  margin: 1em;
  background: ${({ color }) => color};
  > * {
    margin: 0.5em;
    padding: 0.5em;
  }
`

const SearchInput = styled.input<SearchInputProps>`
  flex-grow: 1;
  flex-shrink: 1;
  border: 0;
  font: inherit;

  &:focus {
    box-shadow: inset 0 0 0 1px ${({ color }) => color};
    border-radius: 7px;
    outline: 0;
  }
`

const SearchIcon = styled.button<SearchIconProps>`
  position: relative;
  font: inherit;
  flex-grow: 0;
  flex-shrink: 0;
  width: 2em;
  height: 2em;
  background: transparent;
  border: 0;

  &, &:before, &:after {
    box-sizing: border-box;
  }

  &:focus {
    &:before, &:after {
      box-shadow: 0 0 5px 1px ${({ color }) => color};
    }
    outline: 0;
  }

  &:before, &:after {
    content: '';
    display: block;
    position: absolute;
  }

  &:before {
    left: 0;
    top: 0;
    width: 80%;
    height: 80%;
    border: calc(4em / 16) solid ${({ color }) => color};
    border-radius: 50%;
  }

  &:after {
    right: 0;
    bottom: 0;
    height: calc(4em / 16);
    width calc(1.41 * 100% - 1.41 * 40% - 40%);
    background: ${({ color }) => color};
    transform: rotateZ(40deg);
    transform-origin: bottom right
  }

  &:hover {
    cursor: pointer;
  }
`

export default Search
