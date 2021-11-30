import * as React from 'react';
import PageHeader from './PageHeader';
import ProjectDescription from './ProjectDescription';
import DateAndVerification from './DateAndVerification';
import CssBaseline from '@mui/material/CssBaseline';
import styled from 'styled-components';
import DateAdapter from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import PrintToPDF from './PrintToPDF';
import BMPReview from './BMPReview';
import ImageUpload from './ImageUpload'
import Page5 from './Page5';
import Page2 from './Page2';
import AdminReview from './AdminReview';


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
          <br/><br/>
          <PageHeader pageNumber={2}/>
          <Page2/>
          </Formater>
          <br/><br/>
          <br/><br/>
          <AdminReview />
          <br/><br/>
          <br/><br/>
          <PageHeader pageNumber={4}/>
          <BMPReview/>
          <ImageUpload/>
          <br/>
          <br/>
          <LocalizationProvider dateAdapter={DateAdapter}>{children}</LocalizationProvider>
          <DateAndVerification/>
          <br/>
          <br/>
          <br/>
          <PageHeader pageNumber={5}/>
          <Page5/>
          <br/>
          <br/>
          <PrintToPDF/>
          
        </PageSize>
    </>
  );
}

const PageSize = styled.div`

text-align: left;
margin: 25px 50px ;
padding: 0px;
`;

const Formater = styled.div`
  display: block;
`;

export default App;
