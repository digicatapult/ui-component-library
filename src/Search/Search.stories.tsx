import React, { useState } from 'react'
import { Story } from '@storybook/react'
import styled from 'styled-components'
import { action } from '@storybook/addon-actions'

import Search from './index.js'

export default {
  title: 'Components/Search',
  component: Search,
}

const DefaultStoryTemplate: Story = (args) => {
  const [value, setValue] = useState(args.value)

  return (
    <SearchHost
      background={args.color}
      containerWidth={args.containerWidth}
      fontSize={args.fontSize}
    >
      <Search
        fields={{
          project: { fieldType: 'text' },
          startDate: { fieldType: 'date' },
          endDate: { fieldType: 'date' },
          funding: { fieldType: 'currency' },
          publicationCount: { fieldType: 'number' },
        }}
        placeholder={args.placeholder}
        value={value}
        setValue={setValue}
        color={args.color}
        background={args.background}
        onSubmit={action('submit')}
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
  fontSize: '1rem',
}

export const PresetValue = DefaultStoryTemplate.bind({})
PresetValue.args = {
  placeholder: 'Hello',
  value: 'A previous search',
  color: '#216968',
  background: 'white',
  containerWidth: 'min-content',
}

interface SearchHostProps {
  background: string
  containerWidth: string
  fontSize: string
}
const SearchHost = styled.div<SearchHostProps>`
  display: flex;
  justify-content: center;
  width: ${({ containerWidth }) => containerWidth};
  background: ${({ background }) => background};
  font-size: ${({ fontSize }) => fontSize};
`
