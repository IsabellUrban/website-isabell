import styled from "styled-components";

export const gridVariables = {
  mobile: {
    columns: "repeat(3, 1fr)",
    rows: "auto auto",
    gap: "2rem",
  },
  desktop: {
    columns: "repeat(7, 1fr)",
    rows: "auto auto",
    gap: "2rem",
  },
};

export const GridMain = styled.main`
  margin: 0 auto;
  width: 92vw;
  margin-top: 7rem;
  margin-bottom: 7rem;
  position: relative;
  display: grid;
  grid-template-rows: ${gridVariables.mobile.rows};
  grid-template-columns: ${gridVariables.mobile.columns};
  gap: ${gridVariables.mobile.gap};
  z-index: 2;

  @media (min-width: 768px) {
    grid-template-columns: ${gridVariables.desktop.columns};
  }
`;

export const GridItem = styled.div`
  grid-column: ${({ $colSpan = "1 / span 4" }) => $colSpan};
  grid-row: ${({ $rowSpan = "auto" }) => $rowSpan};

  @media (min-width: 768px) {
    grid-column: ${({ $colSpanMd = "3 / span 3" }) => $colSpanMd};
    grid-row: ${({ $rowSpanMd = "2 / span 2" }) => $rowSpanMd};
  }
`;
