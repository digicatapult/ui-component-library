import styled from 'styled-components'
import { Props } from './types.js'

// TODO props per dom element as well as all for appbar
// TODO abstract into small component for reusing?
const Wrapper = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;
  transition: box-shadow 1s cubic-bezier(0.8, 1, 0.2, 1) 3s;
  ${({ shadow, width, color, theme }: Props) => `
    width: ${width || '100%'};
    box-shadow: ${
      shadow || false
        ? '0px 3px 5px -2px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);'
        : 'none'
    };
    background-color: ${color || theme?.primary || '#FFFE'};
    color: ${theme?.accent || '#000'};
  `}
`

const ToolBar = styled('ul')`
  ${({ fixed, direction }: Props) => `
    position: ${fixed ? 'fixed' : 'relative'};
    flex-direction: ${direction || 'row'};
  `}
  padding: 0px 25px;
  margin: 0;
  list-style-type: none;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  min-height: 74px;
  gap: 10px;
  padding-left: 54px;
`

const Link = styled('a')`
  display: inline-block;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  color: inherit;
  font-family: Roboto;
  font-weight: 700;
  padding: 0 15px;
  font-size: 1em;
  line-height: 74px;

  ${({ active, theme }: Props) =>
    active
      ? `
      margin-top: 4px;
      background: linear-gradient(360deg, #DFE667 -408.97%, rgba(223, 230, 103, 0) 78.21%);
      border-bottom: 4px solid ${theme?.accent || '#000'}
    `
      : ``}
`

const Li = styled('li')`
  display: block;
  height: 100%;
  margin: 0;
  padding: 0;
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    background-color: rgba(40, 30, 30, 0.1);
  }
`

export { Li, ToolBar, Wrapper, Link }
