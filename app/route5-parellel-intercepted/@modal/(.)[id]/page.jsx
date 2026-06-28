import ModalBack from '../modal-back';
import { photosData } from '../../photos-data';

export default async function Route5ParellelInterceptedModalPage({ params }) {
    const { id } = await params;
    const photo = photosData.find((photo) => photo.id === parseInt(id));

    return (
        <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: 50,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '16px',
            }}
        >
            <ModalBack
                ariaLabel="Close modal"
                style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    backdropFilter: 'blur(2px)',
                }}
            />

            <div
                style={{
                    position: 'relative',
                    zIndex: 1,
                    width: '100%',
                    maxWidth: '480px',
                    backgroundColor: '#fff',
                    borderRadius: '12px',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.35)',
                    overflow: 'hidden',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '16px 20px',
                        borderBottom: '1px solid #e5e7eb',
                    }}
                >
                    <h2
                        id="modal-title"
                        style={{
                            margin: 0,
                            fontSize: '18px',
                            fontWeight: 600,
                            color: '#111827',
                        }}
                    >
                        {photo?.title ?? `Photo ${id}`}
                    </h2>

                    <ModalBack
                        ariaLabel="Close modal"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '32px',
                            height: '32px',
                            borderRadius: '9999px',
                            backgroundColor: '#f3f4f6',
                            color: '#374151',
                            fontSize: '20px',
                            lineHeight: 1,
                        }}
                    >
                        ×
                    </ModalBack>
                </div>

                {photo && (
                    <img
                        src={photo.url}
                        alt={photo.title}
                        style={{
                            display: 'block',
                            width: '100%',
                            height: '280px',
                            objectFit: 'cover',
                        }}
                    />
                )}

                <div style={{ padding: '20px' }}>
                    <p
                        style={{
                            margin: 0,
                            fontSize: '14px',
                            color: '#6b7280',
                            lineHeight: 1.6,
                        }}
                    >
                        {photo?.description ?? `Modal content for photo ${id}.`}
                    </p>
                </div>
            </div>
        </div>
    );
}
