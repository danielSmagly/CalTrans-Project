const PageHeader = ({pageNumber}) => {
    return (
        <>
        <Styling>
            <p1 className="title1">REGULATORY STATUS/p1>
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
          style={{ width: "10"}}
          id="outlined-multiline-static"
          label="SWPPP OR WPCP"
          multiline
          rows={1}
          placeholder="Enter SWPPP OR WPCP"
        />
         
        <TextField
          style={{ width: "50"}}
          id="outlined-multiline-static"
          label="RWQCB(S)"
          multiline
          rows={1}
          placeholder="ENTER RWQCB(S)"
        />
            
        <TextField
          style={{ width: "60"}}
          id="outlined-multiline-static"
          label="PLACS (PERMITS,LICENSES,AGREEMENTS,CERTIFICATIONS) SPECIFYING TEMPORARY BMP REQUIREMENTS"
          multiline
          rows={1}
          placeholder="Enter WATER BODY(S)"
        />
   );
};
  
  
  
  
  )
}

export default PageHeader;