import coverVid from './coverVideo.mp4';

export const Home = (()=>{
    const content = document.getElementById("content");
    const _createVideoContainer = ()=>{
        const container = document.createElement("div");
        container.id = "video-container";
        const video = _createVideo();

        container.appendChild(video);
        content.appendChild(container);
    };

    const _createVideo = ()=>{
        const video = document.createElement("video");
        console.log("hi");
        const source = document.createElement("source");
        source.src = coverVid;

        
        video.appendChild(source); 

        return video;
    };

    _createVideoContainer();
})();