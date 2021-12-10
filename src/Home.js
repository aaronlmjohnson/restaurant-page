import coverVid from './assets/images/coverVideo.mp4';
import beer from './assets/images/beer.jpg';
import wings from './assets/images/wings.jpg';
import potato from './assets/images/potato.jpg';

export const Home = (()=>{
    const content = document.getElementById("content");
    

    const build = ()=>{ 
        content.appendChild(_createHome());
    };

    const _createHome = ()=>{
        const homeContainer = document.createElement("div");
        homeContainer.id = "home";

        homeContainer.appendChild(_createVideoContainer());
        homeContainer.appendChild(_createFoodSection());

        return homeContainer;
    }

    const _createVideoContainer = ()=>{
        const container = document.createElement("div");
        container.id = "video-container";
        const video = _createVideo();
    
        container.appendChild(video);
        return container;
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
        return section;
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
        
        const images = {beer, wings, potato};

        for(const img in images){
            const imgDiv = document.createElement("div");
            const imgElement = document.createElement("img");
            imgElement.id = img;
            imgElement.src = images[img];

            imgDiv.appendChild(imgElement);
            section.appendChild(imgDiv);
        };

        return section;
    };
    const remove = ()=>{
        const home = document.getElementById("home");
        home.remove();
    }

    return {
        build,
        remove
    }

    
})();