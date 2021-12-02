import React, { Suspense } from "react";
import loadable from '@loadable/component'
import BMPReview from './BMPReview';
import ImageUpload from './ImageUpload';
import Button from '@mui/material/Button';

const BPMReview = loadable(() => import('./BMPReview'))

export default function InitBmpReview() {

    const [loadPBMPR, setLPBMPR] = React.useState(0);
    return (
        <div>
            
            <p>Click button to load dynamic component</p>
            
            <Button variant="text" onClick={() => setLPBMPR(1)}>
                ADD BMP FINDING
            </Button>
            {loadPBMPR ? (
                <Suspense fallback={<div>Loading Component...</div>}>
                    <BPMReview />
                    <ImageUpload/>
                </Suspense>
            ) : null}
            <BMPReview/>
        </div>
        
    )
}