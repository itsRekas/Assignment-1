// Array of video objects with URL, title, and description
const videos = [
    {
        url: "https://www.youtube.com/embed/9SijUid80tg?si=3Vxo5dqOGxL0oeve",
        title: "Struggle",
        description: "This short clip highlights the basic petty annoying things that happen to us in life. It shows a boy that is having a bad day and how sometimes he tends to get pissed. He is to go to the office with some stuff and then check them in on the office laptop after which he is to sign in that he is done work and return the box back to the office he took it from. In doing this, he tends to have petty problems like fixing the USB into the slot, putting the plug into the socket and even when he was checking in, he hit his toes aside the issue with the door."
    },
    {
        url: "https://www.youtube.com/embed/HUngLgGRJpo?si=QjtJL4kRQPV4Vepq",
        title: "Nuggets",
        description: "Have you heard of the saying, too much of everything is bad? Well, this video just shows us that. It is a short clip that is used to teach students and kids about addiction and the effects of it. It does well to show how addiction becomes a thing with time with the use of animation. In this clip, a chick is walking and happens to find a yellow spot that can represent anything be it substance or habit. With time this chick gets addicted and ends up getting hurt by the very thing that seemed pleasing initially. Amazing Innit?"
    },
    {
        url: "https://www.youtube.com/embed/5hPtU8Jbpg0?si=A3oOi_-wXbrHRgll",
        title: "Stone",
        description: "This is a short story that shows a stone that is there but then no one really wants to pick it up so they don't pick it up and then a blind guy comes and funny enough he is the one that ends up picking the stone from the floor. WOW! What a world we live in. It is one of the videos I used to gain an idea to create my one video the Struggle and it was heart warming."
    },
    {
        url: "https://www.youtube.com/embed/wwrPL2CWg1I?si=zd1zhBnP4xK447Zy",
        title: "A Story",
        description: "This is a short story of a guy trying to tell a story but then ends up not knowing what to tell which in turn becomes the story that he told. With the use of just his keyboard and screen, he is able to tell us a story that is very brilliant and short. One would say that the story is also funny. It was one of the videos that I used to motivate myself to create 'Struggle' and that's why it is here."
    }
];

// Index to track the current video
let currentIndex = 0;

// Time in milliseconds (10 seconds) for interval
const mouseMoveTimeout = 10000; 

// Function to change the video
function changeVideo() {
    // Ensure the function always runs
    if (true){
        const descriptionDiv = document.getElementById("description-div");
        const videoplayDiv = document.getElementById("videodiv");

        // Trigger reflow to restart animation for description div
        descriptionDiv.style.animation = 'none';
        descriptionDiv.offsetHeight; // Trigger reflow
        descriptionDiv.style.animation = '';

        // Trigger reflow to restart animation for video div
        videoplayDiv.style.animation = 'none';
        videoplayDiv.offsetHeight; // Trigger reflow
        videoplayDiv.style.animation = '';

        // Update the index to the next video, looping back to the start if at the end
        currentIndex = (currentIndex + 1) % videos.length;
        
        // Update the video player source, title, and description
        document.getElementById("video-player").src = videos[currentIndex].url;
        document.getElementById("video-title").innerText = videos[currentIndex].title;
        document.getElementById("video-description").innerText = videos[currentIndex].description;
    }
}

// Set interval to change video every 10 seconds
setInterval(changeVideo, 10000);
