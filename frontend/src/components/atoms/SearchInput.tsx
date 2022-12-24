import styled from 'styled-components'

export const SearchInput = styled.input`
   border: none;
   font-weight: bold;
   font-size: 1.2rem;
   outline: none;
   box-shadow: none;
   ::placeholder {
      color: ${({ theme }) => theme.text.main};
   }
`
