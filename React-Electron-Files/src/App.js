import * as React from 'react';
import PageHeader from './PageHeader';
import ProjectDescription from './ProjectDescription';
import DateAndVerification from './DateAndVerification';
import CssBaseline from '@mui/material/CssBaseline';
import styled from 'styled-components';
import DateAdapter from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import PrintToPDF from './PrintToPDF';
import CreateNewBMPReview from './CreateNewBMPReview';
import ImageUpload from './ImageUpload'
import Page5 from './Page5';
import FindingSummary from './FindingSummary';
import Counter from './Counter';
import CounterDos from './CounterDos';
import AdminReview from './AdminReview';
import Table from './Table';
import SiteConditions from './SiteConditions'
import KeyPersonnel from './KeyPersonnel'
import RegulatoryStatus from './RegulatoryStatus';
import ARTitle from './ARTitle'

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
          <Table/>
          <KeyPersonnel/>
          <SiteConditions/>
          <RegulatoryStatus/>
          <br/><br/>
          <br/><br/>
          <PageHeader pageNumber={2}/>
          <FindingSummary/>
          </Formater>
          <br/><br/>
          <br/><br/>
          <PageHeader pageNumber={3}/>
          <ARTitle />
          <AdminReview />
          <br/><br/>
          <br/><br/>
          <PageHeader pageNumber={4}/>
          <CreateNewBMPReview/>
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
