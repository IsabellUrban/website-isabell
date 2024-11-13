import styled from "styled-components";


export default function HomePage() {
  return (
    <StyledMain>
      <h1>Hello from Next.js</h1>
    </StyledMain>
  );
}


const StyledMain = styled.main`
margin: 0 auto;
  left: 0;
  right: 0;
  width: 92vw;
  margin-top: 7rem;
  margin-bottom: 7rem;
  position: static;
  display: grid;
  grid-template-rows: auto auto auto;
  grid-gap: 1.2rem;
  align-items: center;
  justify-items: center;
`;