import React from 'react'
import Select, { StylesConfig, components } from 'react-select'
import styled from 'styled-components'
import { HX } from '../Heading/index.js'

const { Placeholder } = components

const Value = styled('div')`
  padding: 4px;
  margin: 4px;
  margin-left: 0;
  font-size: 1rem;
  color: ${(props: any) => props.textColor || '#FFFFFF'};
  background-color: ${(props) => props.color || '#99A0A3'};
  user-select: none;
`

const Wrapper = styled('div')`
  min-height: 95px;
  min-width: 275px;
  ${({ width }: { width?: string }) => `
    width: ${width || '100%'}
  `}
`

const ValuesContainer = styled('div')`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
`

const Close = styled('button')`
  all: unset;
  margin-left: 20px;
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

const Title = styled(HX)`
  margin: 0;
  padding: 0;
  margin-bottom: 5px;
`

// TODO create types.d.ts
interface Props {
  options: Array<any>
  styles?: StylesConfig
  variant?: 'hii' | null
  label?: string
  value?: any // for later same with selected?
  selected?: any // due to uniqueness
  placeholder?: string
  onChange?: any
  isMulti?: boolean
  isSearchable?: boolean
  update: (val: string[]) => void
}

interface IDropdown {
  (args: Props): React.ReactElement
}

const HiiMultiSelect: IDropdown = ({ onChange, value = [], ...props }) => {
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
  const styles = {
    multiValue: (provided: any) => ({
      ...provided,
      display: 'none',
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
      padding: '8px 4px',
    }),
    menuList: (provided: any) => ({
      ...provided,
      zIndex: 999,
      color: '#fff',
      backgroundColor: '#27847A',
    }),
  }

  const handleRemoveValue = (e: any) => {
    if (!onChange) return null
    const { name } = e.currentTarget
    const removedValue = value.find((val: any) => val.value === name)

    if (!removedValue) return null

    onChange(
      value.filter((val: any) => val.value !== name)
      // TODO, something to review later in case we want to log events
      // we could pass a second arg as exmpl: { name, action: 'remove-value', removedValue }
    )
  }

  return (
    <>
      <Select
        styles={styles}
        theme={(provided) => ({
          ...provided,
          borderRadius: 0,
        })}
        components={{
          ValueContainer: HiiLabel,
        }}
        {...props}
        closeMenuOnSelect={true}
        controlShouldRenderValue={true}
        onChange={onChange}
        isSearchable={false}
      />
      <ValuesContainer>
        {value.map((val: any) => (
          <Value {...val} key={val.value}>
            <span>{val.label}</span>
            <Close
              color={val.textColor}
              name={val.value}
              onClick={handleRemoveValue}
            >
              x
            </Close>
          </Value>
        ))}
      </ValuesContainer>
    </>
  )
}

const Dropdown: IDropdown = ({
  variant = null,
  options,
  isMulti = false,
  ...props
}) => {
  const [value, setValue] = React.useState(props.selected)

  const update = (val: any) => props.update(val)
  const onChange = (val: any) => {
    update(val)
    setValue(val)
  }

  return (
    <Wrapper>
      {props.label && <Title headingLevel={4}>{props.label}</Title>}
      {variant === 'hii' ? (
        <HiiMultiSelect
          isMulti={true}
          options={options}
          variant={'hii'}
          value={value}
          onChange={onChange}
          {...props}
        />
      ) : (
        <Select
          value={value}
          options={options}
          isMulti={isMulti}
          onChange={onChange}
          closeMenuOnSelect={true}
          {...props}
        />
      )}
    </Wrapper>
  )
}

export default Dropdown
