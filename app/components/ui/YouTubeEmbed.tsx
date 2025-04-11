// src/components/ui/YouTubeEmbed.tsx
"use client";

interface YouTubeEmbedProps {
  videoId: string;
  title: string;
}

export const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({
  videoId,
  title,
}) => {
  return (
    <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      ></iframe>
    </div>
  );
};
