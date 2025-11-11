import React from "react";

function About() {
	return (
		<div className="min-h-[60vh] w-full">
			<section className="max-w-5xl mx-auto px-6 py-12">
				<h1 className="text-3xl sm:text-4xl font-semibold text-green-700 text-center">
					About Plant Disease Detector
				</h1>
				<p className="mt-4 text-gray-700 text-center max-w-3xl mx-auto">
					This project helps farmers, gardeners, and researchers quickly identify potential
					plant diseases from leaf images using an AI model. Upload a leaf photo to get an
					instant prediction and confidence score.
				</p>

				<div className="grid md:grid-cols-3 gap-5 mt-10">
					<div className="bg-white/70 backdrop-blur-md rounded-2xl border border-green-100 p-5">
						<h3 className="text-lg font-semibold text-green-700">Model</h3>
						<p className="text-gray-700 mt-2">
							Backed by a trained CNN model served via a FastAPI backend. Predictions
							are returned with a confidence score for transparency.
						</p>
					</div>
					<div className="bg-white/70 backdrop-blur-md rounded-2xl border border-green-100 p-5">
						<h3 className="text-lg font-semibold text-green-700">Tech Stack</h3>
						<p className="text-gray-700 mt-2">
							FastAPI + Python for inference, React + Vite + Tailwind for a responsive,
							modern UI.
						</p>
					</div>
					<div className="bg-white/70 backdrop-blur-md rounded-2xl border border-green-100 p-5">
						<h3 className="text-lg font-semibold text-green-700">Usage Tips</h3>
						<ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
							<li>Use clear, well-lit images of the leaf.</li>
							<li>Avoid busy backgrounds when possible.</li>
							<li>Try multiple angles if unsure.</li>
						</ul>
					</div>
				</div>
			</section>
		</div>
	);
}

export default About;


