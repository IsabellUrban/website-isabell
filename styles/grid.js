import styled from "styled-components";

export const gridVariables = {
  mobile: {
    columns: "repeat(4, 1fr)",
    rows: "auto",
    gap: "2rem",
  },
  desktop: {
    columns: "repeat(10, 1fr)",
    rows: "auto auto",
    gap: "2rem",
  },
};

export const GridMain = styled.main`
  margin: 0 auto;
  width: 100%;
  margin-top: 7rem;
  margin-bottom: 7rem;
  position: relative;
  display: grid;
  grid-template-rows: ${gridVariables.mobile.rows};
  grid-template-columns: ${gridVariables.mobile.columns};
  gap: ${gridVariables.mobile.gap};
  z-index: 2;
  padding: 0 1rem;

  @media (min-width: 768px) {
    grid-template-columns: ${gridVariables.desktop.columns};
    gap: ${gridVariables.desktop.gap};
    padding: 0;
  }
`;

export const GridItem = styled.div`
  grid-column: ${({ $colSpan = "1 / span 4" }) => $colSpan};
  grid-row: ${({ $rowSpan = "auto" }) => $rowSpan};

  @media (min-width: 768px) {
    grid-column: ${({ $colSpanMd }) => $colSpanMd};
    grid-row: ${({ $rowSpanMd }) => $rowSpanMd};
  }
`;
