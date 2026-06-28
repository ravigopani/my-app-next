'use client';

import { useRouter } from 'next/navigation';

export default function ModalBack({ children, style, ariaLabel }) {
    const router = useRouter();

    return (
        <button
            type="button"
            aria-label={ariaLabel}
            onClick={() => router.back()}
            style={{
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                font: 'inherit',
                background: 'none',
                ...style,
            }}
        >
            {children}
        </button>
    );
}
