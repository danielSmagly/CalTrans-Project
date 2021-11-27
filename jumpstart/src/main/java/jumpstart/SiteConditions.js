const PageHeader = ({pageNumber}) => {
    return (
        <>
        <Styling>
            <p1 className="title1">SITE CONDITIONS</p1>
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
          label="WEATHER CONDITIONS"
          multiline
          rows={1}
          placeholder="Enter CONDITIONS"
        />
         
        <TextField
          style={{ width: "27"}}
          id="outlined-multiline-static"
          label="PROJECT RISK LEVEL/TAHOE CGP"
          multiline
          rows={1}
          placeholder="ENTER RISK"
        />
            
        <TextField
          style={{ width: "33"}}
          id="outlined-multiline-static"
          label="RECEIVING WATER BODY(S)"
          multiline
          rows={1}
          placeholder="Enter WATER BODY(S)"
        />
            
        <TextField
          style={{ width: "27"}}
          id="outlined-multiline-static"
          label="PERCENT COMPLETE BY TIME"
          multiline
          rows={1}
          placeholder="Enter PERCENT"
        /> 
        <TextField
          style={{ width: "20"}}
          id="outlined-multiline-static"
          label="TOTAL DISTRIBUTED SOIL AREA (DSA)(ACRES)"
          multiline
          rows={1}
          placeholder="Enter Distributed area"
        />
           
         <TextField
          style={{ width: "20"}}
          id="outlined-multiline-static"
          label="ACTIVE DSA (ACRES)"
          multiline
          rows={1}
          placeholder="Enter Active dsa"
        />
            
        <TextField
          style={{ width: "20"}}
          id="outlined-multiline-static"
          label="INACTIVE DSA (ACRES)"
          multiline
          rows={1}
          placeholder="Enter Inactive dsa"
        />     
   );
};
  
  
  
  
  
  
  
  
  )
}

export default PageHeader;