import React from 'react';
import Banner from '../Banner/Banner';
import CataList from '../Catagorylist/CataList';
import FuturetedJobs from '../FuturedJobs/FuturetedJobs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CataList></CataList>
            <FuturetedJobs></FuturetedJobs>


        </div>
    );
};

export default Home;