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
        const topSection = _topFoodSection();
        const bottomSection = _bottomFoodSection();
        
        section.appendChild(topSection);
        section.appendChild(bottomSection);
        content.appendChild(section);
    };

    const _topFoodSection = ()=>{
        const section = document.createElement("div");
        section.classList.add("top-section");
        const header = document.createElement("h1");
        header.innerText = "Beer, wings, and all you can eat potato salad only at Crunchy's";
        
        section.appendChild(header);
        return section;
    };

    const _bottomFoodSection = ()=>{
        const section = document.createElement("div");
        section.classList.add("bottom-section");

        const images = ["beer", "wings", "potato"];

        images.forEach((img)=>{
            const imgElement = document.createElement("div");
            imgElement.id = img;
            imgElement.innerText = img;
            section.appendChild(imgElement);
        });
        
        // const beerImg = document.createElement("div");
        // beerImg.id = "beer";
        // const wingsImg = document.createElement("div");
        // wingsImg.id = "wings";
        // const potatoImg = document.createElement("div");
        // potatoImg.id = "potato";

        return section;
    };
    _createVideoContainer();
    _createFoodSection();
})();