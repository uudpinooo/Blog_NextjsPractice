import styled from 'styled-components'

export const Layout = ({ children }) => {
  return (
    <StyledWrapper>
      <StyledHeader>Next Practice Blog</StyledHeader>
      <StyledMain>{children}</StyledMain>
      <StyledFooter>&copy; Sample Inc.</StyledFooter>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const StyledHeader = styled.header`
  font-size: 2rem;
  font-weight: bold;
  margin: 1.5rem 0;
`;

const StyledMain = styled.main`
  flex: 1;
`;

const StyledFooter = styled.footer`
  background-color: #ddd;
`;