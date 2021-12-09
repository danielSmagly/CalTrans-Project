import React, { Suspense } from 'react'
import Button from '@mui/material/Button';
import loadable from '@loadable/component'

const AdminReviewLoad = loadable(() => import('./AdminReview'))

export default function NewAR() {

    const [loadAR, setAR] = React.useState(() => {
        return 0
    })
    
    return (
        <div>
            <Button variant="text" onClick={() => setAR(prevAR => prevAR + 1)}>
                ADD ADMINISTRATIVE FINDING
            </Button>

            {loadAR ? (
                <Suspense fallback={<div>Loading Component...</div>}>
                    <AdminReviewLoad />
                </Suspense>
            ) : null}
        </div>
    )
}
