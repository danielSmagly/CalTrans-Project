import { TextField } from '@mui/material'
import React from 'react'

export default function ObservationChild({childToParent}) {
    const data = "This is test data from Child Component to Parent Component."

    return (
        <div>
            <TextField
                label = "Finding Description Summary"
                defaultValue = {() => childToParent(data)}
                multiline
                fullWidth
            >
            </TextField>
        </div>
    )
}
