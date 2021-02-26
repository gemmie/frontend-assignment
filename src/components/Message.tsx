import styled from "styled-components";

export const Message = styled.div`
  font-size: 20px;
  margin: 0 4rem;

  @media (max-width: 800px) {
    min-width: 0;
    margin: 2rem 4rem;
    flex: 2 0 0;
    flex-basis: 70%;
    order: 3;
  }
`;
