import React, { Component } from 'react'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import Button from '@mui/material/Button';

class PrintToPDF extends Component {
  render() {
    return (
      <div>
        <Button variant="contained" endIcon={<PictureAsPdfIcon/>} onClick={() => window.print()}>Save as PDF </Button>
      </div>
    )
  }
}

export default PrintToPDF;

