import React from 'react';
import './HackerGallery.scss';

export const HackerGallery = (props) => {
    const camerasToRender = paintCameras(props.cameras);

    return (
        <div className="b-gallery">
            <div className="row"> {camerasToRender}</div>
        </div>
    )
};

const paintCameras = (cameras) => {
    const camerasToRender = [];
    for (let i = 0; i < cameras.length; i++) {
        const camera = cameras[i];

        camerasToRender.push(
            <div className="col-4" key={i}>
                <h4>{camera.name}</h4>
                {createImgOrIframe(camera)}
            </div>
        );
    }
    console.log('##ABEL## >> paintCameras >>  paintCameras', camerasToRender);
    return camerasToRender;
};

const createImgOrIframe = (camera) => {
    let typeToInsert;

    if (camera.url.indexOf('.png') === -1 && camera.url.indexOf('.jpg') === -1) {
        typeToInsert = <iframe className="b-gallery__item" title={camera.title} src={camera.url}/>
    } else {
        typeToInsert = <img className="b-gallery__item" src={camera.url} alt=""/>
    }

    return typeToInsert;
};
