import React from 'react'
import Select, { StylesConfig } from 'react-select'
import styled from 'styled-components'

const Wrapper = styled('div')`
  ${({ width }: { width?: string }) => `
    width: ${width || '50%'}
  `}
`

const ValuesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`

const Value = styled('div')`
  padding: 0.5rem;
  padding-left: 0.75rem;
  margin: 0.5rem;
  font-size: 1rem;
  border-radius: 10px 0px 0px 10px;
  color: ${(props: any) => props.textColor || '#216968'};
  background-color: ${(props) => props.color || 'rgba(247, 173, 46, 0.6)'};
  user-select: none;
`

const X = styled('button')`
  all: unset;
  margin-left: 1.3rem;
  color: black;
  transition: fill 0.15s ease-in-out;
  cursor: pointer;
  &:hover {
    color: #bb392d;
  }
  &:focus {
    color: #c82f21;
  }
`

interface Props {
  options?: Array<any>
  styles?: StylesConfig
  selected?: any
  isMulti: boolean
  update: (val: any[]) => void
}

interface IDropdown {
  (args: Props): React.ReactElement
}

const MultiSelect = (props: any) => {
  const { value, onChange } = props

  const handleRemoveValue = (e: any) => {
    if (!onChange) return
    const { name: buttonName } = e.currentTarget
    const removedValue = value.find((val: any) => val.value === buttonName)
    if (!removedValue) return
    props.update(value)
    onChange(
      value.filter((val: any) => val.value !== buttonName),
      { name, action: 'remove-value', removedValue }
    )
  }

  return (
    <Wrapper>
      <Select
        isMulti
        theme={(theme) => ({
          ...theme,
          borderRadius: 0,
        })}
        {...props}
        closeMenuOnSelect={false}
        controlShouldRenderValue={true}
      />
      <ValuesContainer>
        {' '}
        {value.map((val: any) => (
          <Value {...val} key={val.value}>
            {val.label}
            <X name={val.value} onClick={handleRemoveValue}>
              ✕
            </X>
          </Value>
        ))}
      </ValuesContainer>
    </Wrapper>
  )
}

const Dropdown: IDropdown = ({
  options,
  isMulti = false,
  styles = {
    multiValue: () => ({
      display: 'none',
    }),
    option: (styles) => ({
      ...styles,
      ':hover': {
        ...styles[':hover'],
        backgroundColor: '#B6EFA0',
        color: '#27847A',
      },
    }),
    menuList: (styles) => ({
      ...styles,
      color: '#fff',
      backgroundColor: '#27847A',
    }),
  },
  ...props
}) => {
  const [value, setValue] = React.useState(props.selected)

  const update = (val: any) => props.update(val)
  const onChange = (val: any) => {
    update(val)
    setValue(val)
  }

  // TODO show selected in drop down as well.
  if (isMulti)
    return (
      <MultiSelect
        {...{
          options,
          styles,
          ...props,
          onChange,
          value,
        }}
      />
    )
  return (
    <Wrapper width={'50%'}>
      <Select
        value={props.selected}
        options={options}
        theme={(theme) => ({
          ...theme,
          borderRadius: 0,
        })}
        onChange={onChange}
        isMulti={isMulti}
        closeMenuOnSelect={true}
        styles={styles}
      />
    </Wrapper>
  )
}

export default Dropdown
