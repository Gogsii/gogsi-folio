import styled from "styled-components"

export const BackTop = styled.div`
    position: fixed;
    bottom: 15px;
    right: 15px;
    -webkit-transition: 0.5s;
    transition: 0.5s;
	
`

export const Icon = styled.a`
    &:hover {
        color: lightblue;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        display: none;
      }
`