import React from 'react'
import { Search } from '../index.js'
import { Story } from '@storybook/react'
import styled from 'styled-components'

export default {
  title: 'Components/Search',
  component: Search,
}

const DefaultStoryTemplate: Story = (args) => {
  return (
    <SearchHost background={args.color} containerWidth={args.containerWidth}>
      <Search
        placeholder={args.placeholder}
        color={args.color}
        background={args.background}
      />
    </SearchHost>
  )
}
export const Default = DefaultStoryTemplate.bind({})
Default.args = {
  placeholder: 'Hello',
  color: '#216968',
  background: 'white',
  containerWidth: 'min-content',
}

interface SearchHostProps {
  background: string
  containerWidth: string
}
const SearchHost = styled.div<SearchHostProps>`
  display: flex;
  justify-content: center;
  width: ${({ containerWidth }) => containerWidth};
  background: ${({ background }) => background};
`
