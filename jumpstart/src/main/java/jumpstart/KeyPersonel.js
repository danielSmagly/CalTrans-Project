const PageHeader = ({pageNumber}) => {
    return (
        <>
        <Styling>
            <p1 className="title1">Key Personnel</p1>
            //<p1 className="title3 alignright">Page {pageNumber} of 5</p1><br/>
            <hr class="solid"></hr>
        </Styling>
        </>
    );
};

const Styling = styled.div`
    .title1 {
      display: block;
      font-size: 1rem;
      line-height: normal;
    }
        .solid {
        border-top: 2px solid #000000;
        display: block;
    }
`;

const Item1 = () => {
  return(
    <>
      <Box sx={{ m1: 1}}>
        <TextField
          style={{ width: "33"}}
          id="outlined-multiline-static"
          label="IQA Reviewer"
          multiline
          rows={1}
          placeholder="Enter IQA Reviewer Name"
        />
         
        <TextField
          style={{ width: "27"}}
          id="outlined-multiline-static"
          label="REVIEW DATE"
          multiline
          rows={1}
          placeholder="ENTER REVIEW DATE"
        />
            
        <TextField
          style={{ width: "33"}}
          id="outlined-multiline-static"
          label="RESIDENT ENGINEER (RE)"
          multiline
          rows={1}
          placeholder="Enter Resident Engineer Name"
        />
            
        <TextField
          style={{ width: "27"}}
          id="outlined-multiline-static"
          label="RE PHONE NUMBER"
          multiline
          rows={1}
          placeholder="Enter Phone Number"
        /> 
        <TextField
          style={{ width: "60"}}
          id="outlined-multiline-static"
          label="REVIEW PARTICIPANTS"
          multiline
          rows={1}
          placeholder="Enter Resident Engineer Name"
        />
           
         <TextField
          style={{ width: "33"}}
          id="outlined-multiline-static"
          label="CONSTRUCTION COMPANY"
          multiline
          rows={1}
          placeholder="Enter Concstruction Company name"
        />
            
        <TextField
          style={{ width: "27"}}
          id="outlined-multiline-static"
          label="WATER POLLUTION CONTROL MANAGER(WPCM)"
          multiline
          rows={1}
          placeholder="Enter WPCM"
        />     
   );
};
  
  
  
  
  
  
  
  
  )
}

export default PageHeader;