import styled from 'styled-components'

export const Line = () => {
   return (
      <>
         <LineStyle>
            <div className="start" />
            <div className="middle" />
            <div className="end" />
         </LineStyle>
      </>
   )
}

const LineStyle = styled.div`
   display: flex;
   position: absolute;
   width: 100%;
   .start {
      height: 5px;
      width: 40px;
      background-color: ${({ theme }) =>
         theme.palette.primary.light};
   }
   .middle {
      height: 50px;
      width: 50%;
      border-top: 2px solid
         ${({ theme }) => theme.palette.primary.light};
   }
   .end {
      height: 100px;
      width: 50%;
      border-top: 2px solid
         ${({ theme }) => theme.palette.primary.light};
      border-right: 2px solid
         ${({ theme }) => theme.palette.primary.light};
      -moz-transform: skew(45deg);
      -webkit-transform: skew(45deg);
      transform: skew(45deg);
   }
`
