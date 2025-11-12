import React, { useState, useCallback } from "react";

const ImageUploader = ({ onResult, onAfterPredict }) => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const previewFile = (file) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setPreview(reader.result);
    reader.readAsDataURL(file);
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    setImage(file || null);
    previewFile(file);
  };

  const onDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const onDragLeave = () => setIsDragging(false);

  const onDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    setImage(file || null);
    previewFile(file);
  };

  const resetSelection = useCallback(() => {
    setImage(null);
    setPreview(null);
  }, []);

  const handleUpload = async () => {
    if (!image) return alert("Please select an image first.");
    setLoading(true);

    const formData = new FormData();
    formData.append("file", image);

    try {
      const apiBase =
        import.meta.env.VITE_API_BASE_URL;
      const apiBaseSanitized = apiBase.replace(/\/+$/, "");
      const res = await fetch(`${apiBaseSanitized}/predict`, {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      onResult(data, preview);
      if (typeof onAfterPredict === "function") {
        // Slight delay to ensure result renders before scrolling
        setTimeout(() => onAfterPredict(), 50);
      }
    } catch {
      alert("Error connecting to backend.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div
        role="region"
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        className={`relative w-full rounded-2xl border-2 border-dashed p-5 mb-4 transition-all
					${
            isDragging
              ? "border-emerald-500 bg-emerald-50/60"
              : "border-green-200 bg-white/70 backdrop-blur-sm"
          }`}
      >
        <div className="flex flex-col items-center text-center">
          {preview ? (
            <img
              src={preview}
              alt="preview"
              className="w-56 h-56 object-cover rounded-2xl shadow-lg border border-green-100 mb-3 transition hover:shadow-green-200"
            />
          ) : (
            <div className="w-56 h-40 rounded-xl border border-green-100 bg-linear-to-br from-emerald-50 to-white flex items-center justify-center text-emerald-700 mb-3">
              <span className="text-sm">
                Drop an image here or choose a file
              </span>
            </div>
          )}

          <div className="flex items-center gap-3">
            <label
              htmlFor="fileInput"
              className="cursor-pointer bg-linear-to-r from-green-500 to-emerald-600 text-white px-5 py-2.5 rounded-xl shadow hover:shadow-green-300 hover:scale-105 transition-all inline-flex items-center gap-2"
            >
              <span>📁</span>
              <span>Select Image</span>
            </label>
            {preview && (
              <button
                type="button"
                onClick={resetSelection}
                className="px-4 py-2 rounded-xl border border-green-200 text-green-700 bg-white/80 hover:bg-emerald-50 transition"
              >
                Reset
              </button>
            )}
          </div>

          <input
            id="fileInput"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
        </div>

        {loading && (
          <div className="absolute inset-0 bg-white/70 backdrop-blur-sm rounded-2xl grid place-content-center">
            <div className="flex items-center gap-3 text-emerald-700">
              <svg
                className="h-6 w-6 animate-spin"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
              <span className="font-medium">Analyzing image…</span>
            </div>
          </div>
        )}
      </div>

      <button
        onClick={handleUpload}
        disabled={loading}
        className={`mt-1 px-6 py-2.5 rounded-xl font-medium shadow transition-all text-white inline-flex items-center gap-2
					${
            loading
              ? "bg-green-400 cursor-not-allowed"
              : "bg-linear-to-r from-green-600 to-emerald-700 hover:scale-105 hover:shadow-green-300"
          }`}
      >
        {loading ? (
          <>
            <svg
              className="h-4 w-4 animate-spin"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              ></path>
            </svg>
            <span>Analyzing...</span>
          </>
        ) : (
          <>
            <span>🚀</span>
            <span>Upload & Predict</span>
          </>
        )}
      </button>
    </div>
  );
};

export default ImageUploader;
