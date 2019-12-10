import React, { useEffect, useState } from 'react';
import { HackerGallery } from "../../components/HackerGallery/HackerGallery";
import axios from 'axios';

export const HackerControl = () => {
    const [camerasData, setCamerasData] = useState([]);

    const urlCams = 'https://api.oceandrivers.com:443/v1.0/getWebCams/';

    useEffect(() => {
        axios.get(urlCams)
            .then((response) => {
                console.log('##ABEL## >>  >>  ', response);
                setCamerasData(response.data);
            });
    }, []);


    return (
        <HackerGallery cameras={camerasData}/>
    )
};

