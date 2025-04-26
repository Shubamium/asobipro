"use client";
import React, { useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";

type Props = {};

export default function AudioButton({ file }: { file: string }) {
  const [isPlaying, setIsPLaying] = useState(false);

  const audiRef = useRef<HTMLVideoElement>(null);
  return (
    <button
      className="btn hv audi-btn"
      onClick={() => {
        setIsPLaying(!isPlaying);
        if (audiRef.current) {
          if (!isPlaying) {
            audiRef.current.play();
            audiRef.current.currentTime = 0;
          } else {
            audiRef.current.pause();
          }
        }
      }}
    >
      <video src={file} controls ref={audiRef}></video>
      {isPlaying ? <FaPause /> : <FaPlay />}
    </button>
  );
}
