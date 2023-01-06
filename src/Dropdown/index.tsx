import React from 'react'
import Select, { StylesConfig, components } from 'react-select'
import styled from 'styled-components'

const { Placeholder } = components

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 250px;
  ${({ width }: { width?: string }) => `
    width: ${width || '100%'}
  `}
`

const ValuesContainer = styled('div')`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
`

const Value = styled('div')`
  padding: 0.5rem;
  padding-left: 0.75rem;
  margin: 0.5rem;
  margin-left: 0;
  font-size: 1rem;
  color: ${(props: any) => props.textColor || '#FFFFFF'};
  background-color: ${(props) => props.color || '#99A0A3'};
  user-select: none;
`

const X = styled('button')`
  all: unset;
  margin-left: 1.3rem;
  color: ${(props: any) => props.textColor || '#FFFFFF'};
  transition: fill 0.5s ease-in-out;
  cursor: pointer;
  &:hover {
    color: #bb392d;
  }
  &:focus {
    color: #c82f21;
  }
`

const Title2 = styled('p')`
  padding: 0;
  margin: 0;
  display: inline;
`

// TODO create types.d.ts
interface Props {
  options?: Array<any>
  styles?: StylesConfig
  theme: 'hii' | 'default'
  selected?: string
  value?: string & string[]
  placeholder?: string
  onChange?: any
  isMulti: boolean
  update: (val: string[]) => void
}

interface IDropdown {
  (args: Props): React.ReactElement
}

// HII props TODO extract to theme and etc... when we will review theming
// this mainsly sets placehgolder and renders badges outside as custom styled element, i think we should have
// encaurage antonio to use badges inside as react-select was designed, anyway this is just a note


const HiiMultiSelect: IDropdown = ({ theme, ...props }) => {
  const { value = [], onChange } = props
  // From here up un til ..... ==> and this just all that in one place
  const Label = (labelProps: any) => {
    return (
      <>
        <Placeholder {...labelProps} isFocused={labelProps.isFocused}>
          {labelProps.selectProps.placeholder}
        </Placeholder>
        {React.Children.map(labelProps.children, (child: any) =>
          child && child.type !== Placeholder ? child : null
        )}
      </>
    )
  }
  const styles = {
    multiValue: () => ({
      display: 'none',
    }),
    option: (styles: any) => ({
      ...styles,
      ':hover': {
        ...styles[':hover'],
        backgroundColor: '#B6EFA0',
        color: '#27847A',
      },
    }),
    placeholder: (provided: any, state: any) => ({
      ...provided,
      position: 'absolute',
    }),
    menuList: (styles: any) => ({
      ...styles,
      color: '#fff',
      backgroundColor: '#27847A',
    }),
  }
  // up until here could have been avoided if not tweaking react-select. theming might be a nightmare due to uniqness

  const handleRemoveValue = (e: any) => {
    if (!onChange) return null
    const { name: buttonName } = e.currentTarget
    const removedValue = value.find((val: any) => val.value === buttonName)

    if (!removedValue) return null
    props.update(value)

    onChange(
      value.filter((val: any) => val.value !== buttonName),
      { name, action: 'remove-value', removedValue }
    )
  }

  return (
    <Wrapper>
      <Select
        styles={styles}
        theme={(theme) => ({
          ...theme,
          borderRadius: 0,
        })}
        {...props}
        components={{
          ValueContainer: Label,
        }}
        closeMenuOnSelect={true}
        controlShouldRenderValue={true}
      />
      <ValuesContainer>
        {value.map((val: any) => (
          <Value {...val} key={val.value}>
            <Title2>{val.label}</Title2>
            <X {...val} name={val.value} onClick={handleRemoveValue} value='x' />
          </Value>
        ))}
      </ValuesContainer>
    </Wrapper>
  )
}

const Dropdown: IDropdown = ({ theme = 'default', options, isMulti = false, ...props }) => {
  const [value, setValue] = React.useState(props.selected)

  const update = (val: any) => props.update(val)
  const onChange = (val: any) => {
    update(val)
    setValue(val)
  }

  return (
    <Wrapper width={'100%'}>
      {theme === 'hii' ?
       <HiiMultiSelect 
        isMulti={true}
        options={options}
        theme={'hii'}
        {...props}
      /> :
      <Select
        value={value}
        options={options}
        onChange={onChange}
        closeMenuOnSelect={true}
        {...props}
      />}
    </Wrapper>
  )
}

export default Dropdown
