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
`

const Label = styled('label')`
  min-height: 88px;
  max-height: 92px;
  width: 100%;
  display: block;
  color: #a7a7a7;
  font-size: 11px;
  font-weight: 300;
  cursor: pointer;
  position: relative;
  padding: 25px 5px 0px 50px;
  box-sizing:  border-box;
  overflow: hidden;
  

  &:hover {
    background: rgba(255,125,125, 0.2);
  }

  &::before {
    content:"";
    width: 19px;
    height: 19px;
    border: 2px solid #000;
    display: block;
    position: absolute;
    left: 20px;
    top: 20px;
    background: red;
    transition: border .7s ease;
    border-radius: 100%; 
    z-index: 99999;
  } 


  &::after {
    content:"";
    width: 2px;
    height: 97px;
    background-color: red;
    position: absolute;
    left: 30px;
    top: -5px;
  }
`
/**
  ${({ fixed, direction }: Props) => `
    position: ${fixed ? 'fixed' : 'relative'};
    flex-direction: ${direction || 'row'};
  `}
 */

const Input = styled('input')`
  display: none;
`

const Container = styled('div')`
  box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  left: 0px;
  padding-top: 5px;
  padding-bottom: 5px;

  ${Input}:checked + ${Label} ${Title} {
    color: #000;
    border-bottom: 2px solid #a7a7a7;
  }

  ${Input}:checked + ${Label} {
    &:hover {
     background: rgba(125,255,125, 0.2);
    }
    max-height: 300px;
  }
  
  ${Input}:checked + ${Label}:before {
    background-color: green;
    border: 2px solid #a7a7a7;
  }

  ${Input}:checked + ${Label}:after {
    background: green;
  }
`

/**
  &:first-child ${Label} {
    border-right: 8px solid orange;
  }

  &:last-child ${Label} {
    border-right: 8px solid navy;
  }
 */
const Li = styled('li')`
  &:first-child ${Label}:before {
    top: 20px;
  }
  &:first-child ${Label}:after {
    top: 20px;
    height: 200px;
  }

  &:last-child ${Label}:before {
    top: 60%;
  }
  &:last-child ${Label}:after {
    top: -22px;
  } 
`

const Heading = styled('h1')`
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 0px; /* 0% */
`

const TextBlock = styled('div')`
  width: 100%;
  height: 11px;
  flex-shrink: 0;
  background: linear-gradient(94deg, #D7D7D7 2.29%, rgba(233, 233, 233, 0.52) 25.76%, rgba(204, 204, 204, 0.69) 48.75%, rgba(230, 230, 230, 0.87) 74.56%, #DBDBDB 92.39%);
`

export { Heading, Li, Ul, Title, Label, Container,Input, TextBlock } 
