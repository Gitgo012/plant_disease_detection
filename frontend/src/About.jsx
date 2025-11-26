import React from "react";

function About() {
  const classes = [
    "Apple Scab",
    "Apple Black Rot",
    "Apple Cedar Rust",
    "Apple Healthy",
    "Blueberry Healthy",
    "Cherry Powdery Mildew",
    "Cherry Healthy",
    "Corn Gray Leaf Spot",
    "Corn Common Rust",
    "Corn Northern Leaf Blight",
    "Corn Healthy",
  ];

  return (
    <div className="min-h-[60vh] w-full">
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-3xl sm:text-4xl font-semibold text-green-700 text-center">
          About Plant Disease Detector
        </h1>
        <p className="mt-4 text-gray-700 text-center max-w-3xl mx-auto">
          This project helps farmers, gardeners, and researchers quickly
          identify potential plant diseases from leaf images using an AI model.
          Upload a leaf photo to get an instant prediction and confidence score.
        </p>

        <div className="grid md:grid-cols-3 gap-5 mt-10">
          <div className="bg-white/70 backdrop-blur-md rounded-2xl border border-green-100 p-5">
            <h3 className="text-lg font-semibold text-green-700">Model</h3>
            <p className="text-gray-700 mt-2">
              Backed by a trained CNN model served via a FastAPI backend.
              Predictions are returned with a confidence score for transparency.
            </p>
          </div>
          <div className="bg-white/70 backdrop-blur-md rounded-2xl border border-green-100 p-5">
            <h3 className="text-lg font-semibold text-green-700">Tech Stack</h3>
            <p className="text-gray-700 mt-2">
              FastAPI + Python for inference, React + Vite + Tailwind for a
              responsive, modern UI.
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

        {/* MODEL PERFORMANCE METRICS */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-green-700 text-center mb-6">
            Model Performance Metrics
          </h2>
          <div className="bg-white/70 backdrop-blur-md rounded-2xl border border-green-100 p-6 shadow-lg">
            <p className="text-gray-700 text-center mb-6">
              Our CNN model has been rigorously trained and tested, achieving
              excellent performance metrics on the test dataset:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <div className="text-center p-5 bg-emerald-50/50 rounded-xl border border-emerald-100 hover:shadow-md transition">
                <div className="text-4xl font-bold text-green-700 mb-2">
                  {Math.round(0.9311 * 100)}%
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  Accuracy
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Overall correctness
                </div>
              </div>
              <div className="text-center p-5 bg-emerald-50/50 rounded-xl border border-emerald-100 hover:shadow-md transition">
                <div className="text-4xl font-bold text-green-700 mb-2">
                  {Math.round(0.9390 * 100)}%
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  Precision
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  True positive rate
                </div>
              </div>
              <div className="text-center p-5 bg-emerald-50/50 rounded-xl border border-emerald-100 hover:shadow-md transition">
                <div className="text-4xl font-bold text-green-700 mb-2">
                  {Math.round(0.9269 * 100)}%
                </div>
                <div className="text-sm text-gray-600 font-medium">Recall</div>
                <div className="text-xs text-gray-500 mt-1">
                  Detection coverage
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SUPPORTED CLASSES */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-green-700 text-center mb-6">
            Supported Plant Classes
          </h2>
          <div className="bg-white/70 backdrop-blur-md rounded-2xl border border-green-100 p-6 shadow-lg">
            <p className="text-gray-700 text-center mb-6">
              Our model can identify diseases and healthy states across{" "}
              <strong>{classes.length} different plant classes</strong>,
              covering multiple crops:
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {classes.map((className, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-3 bg-emerald-50/50 rounded-lg border border-emerald-100 hover:bg-emerald-100/50 hover:shadow-sm transition"
                >
                  <span className="text-green-600 text-lg">🌿</span>
                  <span className="text-sm text-gray-700 font-medium">
                    {className}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-green-100">
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-700">3</div>
                  <div className="text-gray-600">Apple Varieties</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-700">2</div>
                  <div className="text-gray-600">Cherry Varieties</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-700">4</div>
                  <div className="text-gray-600">Corn Varieties</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
