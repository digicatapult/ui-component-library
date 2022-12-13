import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'

export interface SearchProps {
  placeholder?: string
  color?: string
  background?: string
  debounce?: number
  onSubmit: (value: string | null) => void
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
  placeholder,
  color = 'black',
  background = 'transparent',
  debounce = 250,
  onSubmit,
}) => {
  const [search, setSearch] = useState<string | null>(null)
  const [hasSubmitted, setHasSubmitted] = useState(true)

  const handleSearchChange: React.ChangeEventHandler<HTMLInputElement> =
    useCallback(
      (event) => {
        const target = event.target as HTMLInputElement
        setSearch(target.value || null)
        setHasSubmitted(false)
      },
      [setSearch, setHasSubmitted]
    )

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement> | null) => {
      event?.preventDefault()
      if (!hasSubmitted) {
        onSubmit(search)
        setHasSubmitted(true)
      }
    },
    [search, hasSubmitted, setHasSubmitted, onSubmit]
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
      <SearchIcon color={color} />
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

  :focus {
    border: 1px solid ${({ color }) => color};
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
  box-sizing: border-box;
  background: transparent;
  border: 0;

  ::before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: calc(80% - 2 * 4em / 16);
    height: calc(80% - 2 * 4em / 16);
    border: calc(4em / 16) solid ${({ color }) => color};
    border-radius: 50%;
  }

  ::after {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    bottom: 0;
    height: calc(4em / 16);
    width calc(1.41 * 100% - 1.41 * 40% - 40%);
    background: ${({ color }) => color};
    transform: rotateZ(40deg);
    transform-origin: bottom right
  }

  :hover {
    cursor: pointer;
  }
`

export default Search
