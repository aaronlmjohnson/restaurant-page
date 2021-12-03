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
        //video.autoplay = true;
        video.loop = true;
        video.muted = true;
        video.id = "cover-video"
        const source = document.createElement("source");
        source.src = coverVid;

        
        video.appendChild(source); 

        return video;
    };

    const _createFoodSection = ()=>{
        const section = document.createElement("div");
        section.id = "food-section";
        const topSection = document.createElement("div");
        topSection.classList.add("top-section");
        const header = document.createElement("h1");
        header.innerText = "Beer, wings, and all you can eat potato salad only at Crunchy's"
        topSection.appendChild(header)
        section.appendChild(topSection);
        content.appendChild(section);
    };

    _createVideoContainer();
    _createFoodSection();
})();