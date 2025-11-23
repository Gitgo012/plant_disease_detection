import React, { useState } from "react";
import ImageUploader from "./components/ImageUploader";
import About from "./About";

function App() {
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);
  const [route, setRoute] = useState(window.location.hash || "#/");
  const resultRef = React.useRef(null);

  React.useEffect(() => {
    const handler = () => setRoute(window.location.hash || "#/");
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);

  const handleResult = (res, imageUrl) => {
    setResult({ ...res, imageUrl });
    setHistory((prev) => [{ ...res, imageUrl }, ...prev.slice(0, 4)]);
  };

  const scrollToResult = () => {
    const uploaderSection = document.getElementById("uploader");
    if (uploaderSection) {
      uploaderSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    // Additional nudge to the exact result once it's rendered
    setTimeout(() => {
      if (resultRef.current) {
        resultRef.current.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }
    }, 250);
  };

  return (
    <div className="min-h-screen flex flex-col text-gray-800 bg-linear-to-br from-emerald-100 via-white to-green-50 relative overflow-hidden font-[Inter]">
      {/* Background gradient blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-300/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-300/30 rounded-full blur-3xl -z-10" />

      {/* HEADER */}
      <header className="backdrop-blur-md bg-white/70 border-b border-green-100 shadow-sm sticky top-0 z-20">
        <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-2xl sm:text-3xl font-semibold text-green-700 flex items-center gap-2">
            🌿{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-green-700 to-emerald-500">
              Plant Disease Detector
            </span>
          </h1>
          <nav className="space-x-4 text-sm sm:text-base text-gray-700">
            <a
              href="#/"
              className={`transition ${
                route === "#/"
                  ? "text-green-700 font-semibold"
                  : "hover:text-green-600"
              }`}
            >
              Home
            </a>
            <a
              href="#/about"
              className={`transition ${
                route === "#/about"
                  ? "text-green-700 font-semibold"
                  : "hover:text-green-600"
              }`}
            >
              About
            </a>
          </nav>
        </div>
      </header>

      {/* MAIN */}
      <main className="grow flex flex-col items-center px-6 py-10">
        {route === "#/about" ? (
          <About />
        ) : (
          <>
            {/* HERO */}
            <section className="w-full max-w-6xl grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100 mb-4">
                  AI-powered diagnosis
                </div>
                <h2 className="text-3xl sm:text-5xl font-semibold text-green-700 leading-tight">
                  Detect plant diseases from leaf images in seconds
                </h2>
                <p className="text-gray-600 mt-4">
                  Upload a photo, get a prediction and a confidence score. Fast,
                  simple, and accurate.
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <a
                    href="#uploader"
                    className="px-5 py-2.5 rounded-xl text-white bg-linear-to-r from-green-600 to-emerald-700 shadow hover:shadow-green-300 hover:scale-[1.02] transition"
                  >
                    Get Started
                  </a>
                  <a
                    href="#/about"
                    className="px-5 py-2.5 rounded-xl border border-green-200 text-green-700 bg-white/80 hover:bg-emerald-50 transition"
                  >
                    Learn More
                  </a>
                </div>
                <div className="mt-6 flex items-center gap-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <span>🔒</span>
                    <span>No images stored</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>⚡</span>
                    <span>FastAPI backend</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>🎯</span>
                    <span>High confidence</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-emerald-200/30 blur-3xl rounded-full -z-10" />
                <div className="bg-white/60 backdrop-blur-md rounded-3xl border border-green-100 shadow-lg p-6">
                  <ImageUploader
                    onResult={handleResult}
                    onAfterPredict={scrollToResult}
                  />
                </div>
              </div>
            </section>

            {/* FEATURES */}
            <section className="w-full max-w-6xl mt-14">
              <h3 className="text-xl font-semibold text-green-700 text-center">
                Why use this tool?
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
                <div className="bg-white/70 backdrop-blur-md rounded-2xl border border-green-100 p-5">
                  <div className="text-2xl">🤖</div>
                  <h4 className="font-semibold text-green-700 mt-2">
                    AI-powered
                  </h4>
                  <p className="text-gray-600 mt-1">
                    Trained model to recognize common plant diseases from leaf
                    images.
                  </p>
                </div>
                <div className="bg-white/70 backdrop-blur-md rounded-2xl border border-green-100 p-5">
                  <div className="text-2xl">⚡</div>
                  <h4 className="font-semibold text-green-700 mt-2">
                    Fast & simple
                  </h4>
                  <p className="text-gray-600 mt-1">
                    Just upload a photo and receive instant results with a
                    confidence score.
                  </p>
                </div>
                <div className="bg-white/70 backdrop-blur-md rounded-2xl border border-green-100 p-5">
                  <div className="text-2xl">🛡️</div>
                  <h4 className="font-semibold text-green-700 mt-2">
                    Privacy first
                  </h4>
                  <p className="text-gray-600 mt-1">
                    Images are not stored on the server after prediction.
                  </p>
                </div>
              </div>
            </section>

            {/* MODEL PERFORMANCE METRICS */}
            <section className="w-full max-w-6xl mt-14">
              <h3 className="text-xl font-semibold text-green-700 text-center mb-6">
                Model Performance
              </h3>
              <div className="bg-white/70 backdrop-blur-md rounded-2xl border border-green-100 p-6 shadow-lg">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-emerald-50/50 rounded-xl border border-emerald-100">
                    <div className="text-3xl font-bold text-green-700">
                      {Math.round(0.9311 * 100)}%
                    </div>
                    <div className="text-sm text-gray-600 mt-1 font-medium">
                      Accuracy
                    </div>
                  </div>
                  <div className="text-center p-4 bg-emerald-50/50 rounded-xl border border-emerald-100">
                    <div className="text-3xl font-bold text-green-700">
                      {Math.round(0.939 * 100)}%
                    </div>
                    <div className="text-sm text-gray-600 mt-1 font-medium">
                      Precision
                    </div>
                  </div>
                  <div className="text-center p-4 bg-emerald-50/50 rounded-xl border border-emerald-100">
                    <div className="text-3xl font-bold text-green-700">
                      {Math.round(0.9269 * 100)}%
                    </div>
                    <div className="text-sm text-gray-600 mt-1 font-medium">
                      Recall
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 text-center mt-4">
                  Our CNN model has been trained and tested on a comprehensive
                  dataset, achieving high accuracy in plant disease detection.
                </p>
              </div>
            </section>

            {/* SUPPORTED CLASSES */}
            <section className="w-full max-w-6xl mt-14">
              <h3 className="text-xl font-semibold text-green-700 text-center mb-6">
                Supported Plant Classes
              </h3>
              <div className="bg-white/70 backdrop-blur-md rounded-2xl border border-green-100 p-6 shadow-lg">
                <p className="text-gray-700 text-center mb-4">
                  Our model can identify diseases and healthy states across <strong>11 different plant classes</strong>, covering multiple crops:
                </p>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
                  {[
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
                  ].map((className, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-3 bg-emerald-50/50 rounded-lg border border-emerald-100 hover:bg-emerald-100/50 transition"
                    >
                      <span className="text-green-600">🌿</span>
                      <span className="text-sm text-gray-700 font-medium">
                        {className}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* UPLOADER SECTION (ANCHOR) */}
            <section id="uploader" className="w-full max-w-6xl mt-16">
              <div className="max-w-2xl mx-auto bg-white/60 backdrop-blur-md rounded-3xl border border-green-100 shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center">
                <h3 className="text-2xl font-semibold text-green-700 mb-2">
                  Try it now
                </h3>
                <p className="text-gray-600 mb-6">
                  Upload a plant leaf image to detect possible diseases
                </p>
                <ImageUploader
                  onResult={handleResult}
                  onAfterPredict={() => {
                    // If user uploads in the lower section, still ensure result scrolls into view
                    setTimeout(() => {
                      if (resultRef.current) {
                        resultRef.current.scrollIntoView({
                          behavior: "smooth",
                          block: "nearest",
                        });
                      }
                    }, 80);
                  }}
                />
                {/* RESULT */}
                {result && (
                  <div
                    ref={resultRef}
                    className="mt-8 bg-white/80 rounded-2xl p-5 shadow-inner border border-green-100 text-left"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="sm:col-span-2">
                        <img
                          src={result.imageUrl}
                          alt="Uploaded Leaf"
                          className="w-full h-56 object-cover rounded-lg border border-green-50"
                        />
                      </div>
                      <div className="flex flex-col justify-center">
                        <span className="text-xs uppercase tracking-wider text-emerald-700/80">
                          Prediction
                        </span>
                        <h3 className="text-2xl font-semibold text-green-700 mt-1">
                          {result.prediction}
                        </h3>
                        <div className="mt-3">
                          <div className="w-full bg-emerald-100 rounded-full h-2.5 overflow-hidden">
                            <div
                              className="bg-linear-to-r from-emerald-500 to-green-600 h-2.5 rounded-full transition-all"
                              style={{
                                width: `${Math.min(
                                  Number(result.confidence) || 0,
                                  100
                                )}%`,
                              }}
                            />
                          </div>
                          <p className="text-gray-600 mt-2">
                            Confidence: <b>{result.confidence}%</b>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </section>

            {/* HISTORY */}
            {history.length > 0 && (
              <div className="mt-12 w-full max-w-6xl">
                <h3 className="text-lg font-semibold text-green-700 mb-3 text-center">
                  Recent Predictions
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                  {history.map((item, i) => (
                    <div
                      key={i}
                      className="bg-white/70 backdrop-blur-md border border-green-100 rounded-xl p-2 hover:scale-105 hover:shadow-md transition"
                    >
                      <img
                        src={item.imageUrl}
                        alt="preview"
                        className="h-20 w-full object-cover rounded-md"
                      />
                      <p className="text-sm text-green-700 font-medium mt-1 truncate">
                        {item.prediction}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </main>

      {/* FOOTER */}
      <footer className="bg-white/70 border-t border-green-100 py-4 text-sm text-gray-600 text-center backdrop-blur-md">
        <p>
          © {new Date().getFullYear()} <b>Plant Disease Detector</b> • Built
          using{" "}
          <span className="text-green-600 font-medium">FastAPI + React</span>
        </p>
      </footer>
    </div>
  );
}

export default App;
