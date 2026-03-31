"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 128;

function padIndex(i: number) {
  return i.toString().padStart(5, "0");
}

export function CanvasSequence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  // Preload all frames
  useEffect(() => {
    let loadedCount = 0;
    const imgs: HTMLImageElement[] = [];

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      img.src = `/sequence/${padIndex(i)}.jpg`;
      img.onload = () => {
        loadedCount++;
        setImagesLoaded(loadedCount);
        // Draw frame 1 immediately when it loads
        if (i === 1) drawFrame(0);
      };
      imgs.push(img);
    }
    imagesRef.current = imgs;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const image = imagesRef.current[index];
    if (!canvas || !ctx || !image || !image.complete) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = image.naturalWidth / image.naturalHeight;

    let drawWidth = canvas.width;
    let drawHeight = canvas.height;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      drawHeight = canvas.width / imgRatio;
      offsetY = (canvas.height - drawHeight) / 2;
    } else {
      drawWidth = canvas.height * imgRatio;
      offsetX = (canvas.width - drawWidth) / 2;
    }

    ctx.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);
  }, []);

  // Handle canvas resize
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        // Redraw current frame after resize
        const progress = imagesLoaded / FRAME_COUNT;
        const frameIndex = Math.min(
          Math.floor(progress * (FRAME_COUNT - 1)),
          FRAME_COUNT - 1
        );
        drawFrame(frameIndex);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [imagesLoaded, drawFrame]);

  // Scroll tracking — container must have position: relative (set inline)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const currentFrameIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, FRAME_COUNT - 1]
  );

  useMotionValueEvent(currentFrameIndex, "change", (latest) => {
    const index = Math.max(0, Math.min(Math.floor(latest), FRAME_COUNT - 1));
    drawFrame(index);
  });

  const loadPercent = Math.round((imagesLoaded / FRAME_COUNT) * 100);
  const isLoading = imagesLoaded < FRAME_COUNT;

  return (
    <div
      ref={containerRef}
      style={{ position: "relative", width: "100%", height: "400vh", backgroundColor: "#1a0808" }}
    >
      {/* Sticky viewport */}
      <div
        style={{
          position: "sticky",
          top: 0,
          width: "100%",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {/* Loading overlay */}
        {isLoading && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#1a0808",
              color: "#B8860B",
            }}
          >
            <p
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "1.125rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                marginBottom: "1.5rem",
                opacity: 0.8,
              }}
            >
              Unveiling Ghunghat…
            </p>
            {/* Progress bar */}
            <div
              style={{
                width: "260px",
                height: "2px",
                backgroundColor: "rgba(184,134,11,0.2)",
                borderRadius: "9999px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${loadPercent}%`,
                  backgroundColor: "#B8860B",
                  transition: "width 0.2s ease",
                }}
              />
            </div>
            <p
              style={{
                marginTop: "0.75rem",
                fontFamily: "Arial, sans-serif",
                fontSize: "0.75rem",
                color: "rgba(184,134,11,0.6)",
              }}
            >
              {loadPercent}%
            </p>
          </div>
        )}

        {/* Canvas */}
        <canvas
          ref={canvasRef}
          style={{
            display: "block",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        {/* Scroll hint — visible only at top */}
        <div
          style={{
            position: "absolute",
            bottom: "5rem",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
            color: "#B8860B",
            pointerEvents: "none",
            animation: "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite",
            opacity: isLoading ? 0 : 1,
            transition: "opacity 0.5s ease",
          }}
        >
          <span
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "0.75rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
            }}
          >
            Scroll to Unveil
          </span>
          <div
            style={{
              width: "1px",
              height: "4rem",
              background: "linear-gradient(to bottom, #B8860B, transparent)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
