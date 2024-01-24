import React from 'react'
import styled from 'styled-components'

const Ul = styled('ul')`
  list-style: none;
  margin: 0px;
  padding: 0px;
`

const Title = styled('h2')`
  display: flex;
  margin-top: 0px;
  flex-direction: row;
  justify-content: space-between;
  font-size: 16px;
  font-weight: normal;
  color: #bdc3c7;
  align-items: center;
  padding: 5px 5px;
  border-radius: 60px;
  color: ${(props: React.CSSProperties) => props.color || 'black'};
  border: ${(props: React.CSSProperties) => props.border || 'none'};
  opacity: 0.3;
`

const Status = styled('header')`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  text-transform: uppercase;
  color: ${(props: React.CSSProperties) => props.color || 'black'};
  text-align: right;
  font-size: 12px;
`

const Label = styled('label')`
  min-height: 100px;
  width: 100%;
  display: block;
  color: ${(props: React.CSSProperties) => props.color || '#a7a7a7'};
  font-size: 11px;
  font-weight: 300;
  cursor: pointer;
  position: relative;
  padding: 0px 10px 0px 50px;
  box-sizing: border-box;
  overflow: hidden;

  &:hover {
    background: rgba(255, 125, 125, 0.2);
  }

  &::before {
    content: '';
    width: 12px;
    height: 12px;
    opacity: 0.3;
    display: block;
    position: absolute;
    left: 20px;
    top: 10px;
    background: ${(props: React.CSSProperties) => props.color || 'black'};
    transition: border 0.7s ease;
    border-radius: 100%;
    z-index: 99999;
  }

  &::after {
    content: '';
    width: 2px;
    opacity: 0.3;
    height: 100px;
    background: ${(props: React.CSSProperties) => props.color || 'black'};
    position: absolute;
    left: 25px;
    top: 0px;
  }
`

const Input = styled('input')`
  display: none;
`

const Container = styled('div')`
  overflow: hidden;
  left: 0px;
  padding: 5px;
  background: ${(props: React.CSSProperties) => props.background || 'none'};

  ${Input}:checked + ${Label} ${Title} {
    opacity: 1;
  }

  ${Input}:checked + ${Label} {
    &:hover {
      background: rgba(125, 255, 125, 0.2);
    }
    max-height: 300px;
  }

  ${Input}:checked + ${Label}:before {
    opacity: 1;
  }

  ${Input}:checked + ${Label}:after {
    opacity: 1;
  }
`
const Li = styled('li')`
  &:first-child ${Label}:before {
    top: 10px;
  }
  &:first-child ${Label}:after {
    top: 20px;
    height: 200px;
  }

  &:last-child ${Label}:before {
    top: 30%;
  }
  &:last-child ${Label}:after {
    top: -70px;
  }
`

const Heading = styled('h1')`
  padding: 0px 10px;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  color: ${(props: React.CSSProperties) => props.color || 'black'};

  display: flex;
  flex-direction: row;
  gap: 10px;
  align-item: center;
  text-transform: uppercase;
`
const BlankText = styled('div')`
  width: 100%;
  height: 8px;
  background: rgba(0, 0, 0, 0.1);
`

const IconWrapper = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25px;
  width: 25px;
  border: ${(props: React.CSSProperties) => props.border || 'none'};
  border-radius: 60px;
`

export {
  Heading,
  Li,
  Ul,
  Title,
  Label,
  Container,
  Input,
  BlankText,
  Status,
  IconWrapper,
}
