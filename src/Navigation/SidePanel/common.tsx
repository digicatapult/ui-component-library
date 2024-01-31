import styled from 'styled-components'

const viewPortW: number = window.visualViewport?.width || 0
const viewPortH: number = window.visualViewport?.height || 0

export const Heading = styled('div')`
  color: #4a4a4a;
  font-family: Roboto;
  margin-bottom: 59px;
  font-size: 30px;
  line-height: 45px;
`

export const Panel = styled('div')`
  position: absolute;
  padding: 20px;
  padding-top: 50px
  width: ${({ width }: any) => width || 300}px; 
  max-width: ${({ width }: any) => width || 300}px;
  height: ${viewPortH}px;
  animation: ${({ orientation }: any) => orientation || 'right'} 1s ease-out infinite;
  box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.1);

  @keyframes right {
    0% { transform: translate(${viewPortW + 300}px, 0px); }
    100% { transform: translate(${viewPortW - 300}px, 0px); position: relative; }
  }

  @keyframes left {
    0% { transform: translate(-300px, 0px); }
    100% { transform: translate(0px, 0px); position: relative; }
  }
`
