import "./suggestionList.css";

const SuggestionList = () => {
  const urlList = [
    {
      src: "https://www.youtube.com/embed/ufPCITfUQnQ?list=PLMY9nrA_sDPrVDt46wA15QuAIoAcfBI-N",
      title: "CSS-in-JS — Max Stoiber",
    },
    {
      src: "https://www.youtube.com/embed/cCOL7MC4Pl0",
      title: "Jake Archibald: In The Loop - JSConf.Asia",
    },
    {
      src: "https://www.youtube.com/embed/8aGhZQkoFbQ",
      title: "What the heck is the event loop anyway?",
    },
    {
      src: "https://www.youtube.com/embed/-QgJgZCJvo4",
      title: "I Challenged The CSS King To A CSS Battle",
    },
  ];
  return (
    <div className="suggestionList">
      {urlList.map((video, index) => {
        return (
          <div className="suggestionItem">
            {/*eslint-disable-next-line*/}
            <iframe
              key={index}
              width="180"
              height="120"
              src={video.src}
              frameborder="0"
            ></iframe>
            <h6 id="title">{video.title}</h6>
          </div>
        );
      })}
    </div>
  );
};

export default SuggestionList;
