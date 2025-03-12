import React from "react";
import ReactPlayer from "react-player/vimeo";

export const VimeoEmbed = () => {
  return (
    <div className="video-container">
      <ReactPlayer
        url="https://vimeo.com/199638534"
        width="100%"
        height="100%"
        controls={true}
      />
    </div>
  );
};

export default VideoEmbed;