import styled, { createGlobalStyle } from 'styled-components';

import AppProvider from './AppContext';
import Header from './components/Header';
import Main from './components/Main';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Spartan', sans-serif;
  }
  button {
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    @media (max-width: 750px) {
        min-height: 100vh;
    }
`;

function App() {
    return (
        <AppProvider>
            <Wrapper>
                <GlobalStyle />
                <Header />
                <Main />
            </Wrapper>
        </AppProvider>
    );
}

export default App;
