import "./mainVideo.css";

const MainVideo = () => {
  const videoName =
    "Franziska Hinkelmann: JavaScript engines - how do they even? | JSConf EU";
  const videoViews = "15 000 000 Views";

  return (
    <div className="mainVideo">
      <iframe
        width="700"
        height="380"
        src="https://www.youtube.com/embed/p-iiEDtpy6I"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <h3 id="videoName">{videoName}</h3>
      <h6 id="videoViews">{videoViews}</h6>
    </div>
  );
};

export default MainVideo;
