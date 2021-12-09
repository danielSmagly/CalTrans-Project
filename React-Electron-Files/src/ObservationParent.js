import React, { useState } from 'react'
import ObservationChild from './ObservationChild';

function ObservationParent() {
    const [data, setData] = useState(' ');
    
    const childToParent = (childdata) => {
      setData(childdata);
    }
    
    return (
        <div className="Test">
          {data}
          <div>
            <ObservationChild childToParent={childToParent}/>
          </div>
        </div>
     );
}

export default ObservationParent;
