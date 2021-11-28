import * as React from 'react';
import PageHeader from './PageHeader';
import ProjectDescription from './ProjectDescription';
import DateAndVerification from './DateAndVerification';
import CssBaseline from '@mui/material/CssBaseline';
import styled from 'styled-components';
import DateAdapter from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';


function App({children}) {
  return (
    <>
      
      <CssBaseline/>
        <PageSize>
          <Formater>
          <PageHeader pageNumber={1}/>
          <br/>
          <ProjectDescription/>
          <br/><br/>
          </Formater>
          <Formater>
          <LocalizationProvider dateAdapter={DateAdapter}>{children}</LocalizationProvider>
          <DateAndVerification/>
          </Formater>
        </PageSize>
    </>
  );
}

const PageSize = styled.div`

text-align: left;
margin: 25px 100px ;
padding: 0px;
`;

const Formater = styled.div`
  display: block;
`;

export default App;
