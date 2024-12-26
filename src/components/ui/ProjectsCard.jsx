import React from "react";
import image from "../../assets/withBg/Writopia.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ProjectsCard({ data = {} }) {
  // const { image, title, description, timeline, link } = data;

  return (
    <motion.a
      href="/"
      whileHover={{
        y: -8,
        transition: { duration: 0.2, ease: "easeInOut" },
      }}
      className="flex gap-6 rounded-3xl border border-b-2 border-overlay-bg border-b-zinc-500/40 bg-gradient-to-b from-card-bg-color-1 to-card-bg-color-2 p-6 hover:to-zinc-800/60"
    >
      <div className="h-full w-full">
        <img src={image} alt="" className="h-full max-w-[210px] rounded-xl" />
      </div>

      <div className="flex flex-col justify-between gap-2">
        <h2>Writopia</h2>
        <p className="line-clamp-3">
          Writopia is a platform for writers to share their work, get feedback,
          and connect with other writers. It’s a place where writers can grow
          and learn from each other.
        </p>
        <p className="text-color-placeholder">Timeline: 2 months</p>
      </div>
    </motion.a>
  );
}
