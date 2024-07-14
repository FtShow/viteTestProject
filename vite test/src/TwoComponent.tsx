import React, {useEffect} from 'react';

export const TwoComponent = () => {
    useEffect(()=>{
        console.log('TWO')
    }, [])
    return (
        <div>

        </div>
    );
};
