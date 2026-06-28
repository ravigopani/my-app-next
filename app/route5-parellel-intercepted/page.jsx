import { photosData } from './photos-data';
import Link from 'next/link';

export default function Route5ParellelInterceptedPage() {
	return (
		<div style={{ border: '1px solid red', padding: '10px', margin: '10px' }}>
			<p style={{ fontSize: '20px', fontWeight: 'bold' }}>Page</p>
			<div className="grid grid-cols-4 gap-4">
				{photosData.map((photo) => (
					<Link key={photo.id} href={`/route5-parellel-intercepted/${photo.id}`}>
						<div
							className="rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
						>
							<img
								src={photo.url}
								alt={photo.title}
								className="w-full h-40 object-cover"
							/>
							<div className="p-4">
								<h2 className="text-lg font-semibold">{photo.title}</h2>
								<p className="text-sm text-gray-600 mt-1">{photo.description}</p>
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}
