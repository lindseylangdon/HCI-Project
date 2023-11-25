import React from 'react';
import { XSquare } from 'lucide-react';

function CloseButton({onClick}) {
  return (
    <div className='ml-3 mt-4'>
        <button variant="surface" onClick={onClick} className='transition duration-300 ease-in-out transform hover:scale-110 active:scale-95'>
            <XSquare 
            strokeWidth={2.5} 
            size={26} 
            style={{ stroke: 'white' }}/>
        </button>
    </div> 
  )
}

export default CloseButton;