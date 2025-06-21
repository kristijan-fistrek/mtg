
import { useEffect } from 'react';

const Homepage = () => {

    useEffect(() => { 
        //fetchData(); 
        console.log('Homepage component mounted');
    }, [])

    return (
        <>
            <div>
                <p>Homepage</p>
            </div>
        </>
    )
}

export default Homepage;