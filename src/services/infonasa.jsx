"use client";

import { useEffect, useState } from "react";

export default function NasaMedia() {
  const [mediaData, setMediaData] = useState(null);
  const apiUrl = "https://api.nasa.gov/planetary/apod?api_key=NzjCCi3d1oonQJfErcFFIVmg4Qdr55TZol8dFwpZ";

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error("Network response was not ok");

        const data = await response.json();
        setMediaData(data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }

    fetchData();
  }, []);

  if (!mediaData) return <p>Chargement...</p>;

  return (
    <div className="flex flex-col items-center">
      {mediaData.media_type === "video" ? (
        <iframe
          src={mediaData.url}
          title="NASA Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          width="800"
          height="600"
          allowFullScreen
        ></iframe>
      ) : (
        <a href={mediaData.hdurl} target="_blank" rel="noopener noreferrer">
          <img src={mediaData.url} alt={mediaData.title} width="700" />
        </a>
      )}
    </div>
  );
}
