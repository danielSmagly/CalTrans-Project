import * as React from 'react';
import styled from 'styled-components'
import ImageUploadHelper from './ImageUploadHelper'
import CssBaseline from '@mui/material/CssBaseline';
import { TextField } from '@mui/material';

export default function ImageUpload() {
    return (
        <>
            <CssBaseline />
            <ImageStyle>
                <ImageUploadHelper />
            </ImageStyle>
            <br />
            <TextField
                id="outlined-multiline-static"
                label="Observation:"
                multiline
                rows={5}
                placeholder="Enter Observation"
                fullWidth
            />
            <hr class="solid"></hr><br/>
            <ImageStyle>
                <ImageUploadHelper />
            </ImageStyle>
            <br />
            <TextField
                id="outlined-multiline-static"
                label="Corrective Action:"
                multiline
                rows={5}
                placeholder="Enter Corrective Action"
                fullWidth
            />

        </>
    )
}


const ImageStyle = styled.div`
    align: center;

    .solid {
        border-top: 2px solid #000000;
        display: block;
    }
`
