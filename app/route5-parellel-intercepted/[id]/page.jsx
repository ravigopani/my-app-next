import { photosData } from '../photos-data';

export default async function Route5ParellelInterceptedIdPage({ params }) {
    const { id } = await params;
    const photo = photosData.find((photo) => photo.id === parseInt(id));
    return <div style={{ border: '1px solid red', padding: '10px', margin: '10px' }}>
        Detail Page - {id}
        <br />
        <img src={photo.url} alt={photo.title} />
        <h2>{photo.title}</h2>
        <p>{photo.description}</p>
    </div>;
}