
export const videoBgInit = () => {
    const videoBgElems = document.querySelectorAll('.video-bg');

    const videoSources = `
        <source src="video/video.webm" type="video/webm">
        <source src="video/video.mp4" type="video/mp4">
    `;

    for (const videoElem of videoBgElems) {
        videoElem.innerHTML = videoSources;
    }
}