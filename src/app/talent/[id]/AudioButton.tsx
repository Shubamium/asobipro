"use client";
import React, { useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";

type Props = {};

export default function AudioButton({}: Props) {
  const [isPlaying, setIsPLaying] = useState(false);
  return (
    <button
      className="btn hv audi-btn"
      onClick={() => {
        setIsPLaying(!isPlaying);
      }}
    >
      <audio src="/audi.mp3"></audio>
      {isPlaying ? <FaPause /> : <FaPlay />}
    </button>
  );
}
