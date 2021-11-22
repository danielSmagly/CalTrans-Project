import React from 'react';
import styled from 'styled-components';

const PageHeader = ({pageNumber}) => {
    return (
        <>
        <Styling>
            <p1 className="title1">STATE OF CALIFORNIA - DEPARTMENT OF TRANSPORTATION</p1>
            <p1 className="title2">PROJECT CONSTRUCTION STORMWATER REVIEW REPORT</p1>
            <p1 className="title3 alignleft">ENV-WQP-0003 REV 10/2015</p1>
            <p1 className="title3 alignright">Page {pageNumber} of 5</p1><br/>
            <hr class="solid"></hr>
        </Styling>
        </>
    );
};

const Styling = styled.div`
    .title1 {
        display: block;
        font-size: 0.75rem;
        line-height: normal;
    }

    .title2 {
        display: block;
        font-size: 1.25rem;
        line-height: normal;
        font-weight: bold;
    }

    .title3 {
        display: block;
        font-size: 0.75rem;
        line-height: normal;
    }

    .alignleft {
        float: left;
    }
    
    .alignright {
        float: right;
    }
    .solid {
        border-top: 2px solid #000000;
        display: block;
    }
`;

export default PageHeader;
