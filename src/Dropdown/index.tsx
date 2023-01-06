import React from 'react'
import Select, { StylesConfig, components } from 'react-select'
import styled from 'styled-components'

const { Placeholder } = components

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

// from here ->> 
// again this is when it comes to theming
// we can see same across the board pretty much 
const Wrapper = styled('div')`
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

const Button_X = styled('button')`
  all: unset;
  margin-left: 1.3rem;
  color: ${({ color }) => color || '#FFFFFF'};
  transition: fill 0.5s ease-in-out;
  cursor: pointer;
  &:hover {
    color: #bb392d;
  }
  &:focus {
    color: #c82f21;
  }
`
// <<- to here 

// TODO create types.d.ts
interface Props {
  options?: Array<any>
  styles?: StylesConfig
  theme: 'hii' | 'default'
  value?: any 
  selected?: any
  placeholder?: string
  onChange?: any
  isMulti?: boolean
  update: (val: string[]) => void
}

interface IDropdown {
  (args: Props): React.ReactElement
}

// HII props TODO extract to theme and etc... when we will review theming
// this mainsly sets placehgolder and renders badges outside as custom styled element, i think we should have
// encaurage antonio to use badges inside as react-select was designed, anyway this is just a note

  // from here ->> 
  // could have been avoided if not tweaking react-select
  // theming might be a nightmare due to uniqness of projects - from UI perpective
  const HiiLabel = (labelProps: any) => {
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
const HiiMultiSelect: IDropdown = ({ onChange, value = [], theme, ...props }) => {

  const styles = {
    multiValue: () => ({
      display: 'none'
    }),
    option: (provided: any) => ({
      ...provided,
      ':hover': {
        ...provided[':hover'],
        backgroundColor: '#B6EFA0',
        color: '#27847A',
      },
    }),
    placeholder: (provided: any) => ({
      ...provided,
      position: 'absolute',
    }),
    menuList: (provided: any) => ({
      ...provided,
      color: '#fff',
      backgroundColor: '#27847A',
    }),
  }
  // <<- to here
  const handleRemoveValue = (e: any) => {
    if (!onChange) return null
    const { name } = e.currentTarget
    const removedValue = value.find((val: any) => val.value === name)

    if (!removedValue) return null
    props.update(value)

    onChange(
      value.filter((val: any) => val.value !== name),
      { name, action: 'remove-value', removedValue }
    )
  }

  return (
    <Wrapper>
      <Select
        styles={styles}
        theme={(provided) => ({
          ...provided,
          borderRadius: 0,
        })}
        components={{
          ValueContainer: HiiLabel,
        }}
        closeMenuOnSelect={true}
        controlShouldRenderValue={true}
        {...props}
        onChange={onChange}
      />
      <ValuesContainer>
        {value.map((val: any) => (
          <Value {...val} key={val.value}> 
            <span>{val.label}</span>
            <Button_X color={val.textColor} name={val.value} onClick={handleRemoveValue}>
              x
            </Button_X>
          </Value>
        ))}
      </ValuesContainer>
    </Wrapper>
  )
}

const Dropdown: IDropdown = ({ theme = 'default', options, isMulti = false, ...props }) => {
  const [value, setValue] = React.useState(props.selected)

  // <<- from here, as well due to tweaking react-select
  // i'm just trying to highlight how much time we could save
  // if there would be less uniqness in UI
  const update = (val: any) => props.update(val)
  const onChange = (val: any) => {
    update(val)
    setValue(val)
  }
  // <<- to here check .stories.tsx there is a default multi as well now

  return (
    <Wrapper width={'100%'}>
      {theme === 'hii' ?
       <HiiMultiSelect 
        isMulti={true}
        options={options}
        theme={'hii'}
        value={value}
        onChange={onChange}
        {...props}
      /> :
      <Select
        value={value}
        options={options}
        isMulti={isMulti}
        onChange={onChange}
        closeMenuOnSelect={true}
        {...props}
      />}
    </Wrapper>
  )
}

export default Dropdown
