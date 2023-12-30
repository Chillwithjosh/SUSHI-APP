import React from "react";

type Props = {
  title: string;
  src: string;
};

const VideoModal = ({ title, src }: Props) => {
  return (
    <div>
      <iframe
        title={title}
        allowFullScreen
        height="215px"
        src={src}
        width="330px"
        className="rounded-[15px]"
      />
    </div>
  );
};

export default VideoModal;
