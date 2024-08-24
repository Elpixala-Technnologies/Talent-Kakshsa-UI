import React from "react";
import Image from "next/image";

interface MediaModalProps {
  isOpen: boolean;
  mediaSrc: string;
  mediaType: "image" | "video";
  onClose: () => void;
}

const MediaModal: React.FC<MediaModalProps> = ({
  isOpen,
  mediaSrc,
  mediaType,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute -right-6 -top-6 text-2xl text-white"
          onClick={onClose}
        >
          &times;
        </button>
        {mediaType === "image" ? (
          <Image
            src={mediaSrc}
            alt="media"
            width={800}
            height={800}
            className="h-auto max-h-[80vh] w-full rounded-lg object-contain"
          />
        ) : (
          <video
            src={mediaSrc}
            controls
            autoPlay
            loop
            className="max-h-[80vh] w-full rounded-lg"
          />
        )}
      </div>
    </div>
  );
};

export default MediaModal;
