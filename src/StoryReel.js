import React from "react";
import "./StoryReel.css";
import Story from "./Story";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQiThOIA1747CjDeXk88esbiWDM7JPDWXNuhw&usqp=CAU"
        profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRghdw3XWxmNvekK_6xGNsBf-mrQ2NZ_I1T-Q&usqp=CAU"
        title="Filter Copy"
      />
      <Story
        image="https://cached.imagescaler.hbpl.co.uk/resize/scaleWidth/815/cached.offlinehbpl.hbpl.co.uk/news/ORP/unilad-20161101071503565.jpg"
        profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQyoL5KU6k906A28b48wl9HVxsGTLDL5QOVtA&usqp=CAU"
        title="UNILAD"
      />
      <Story
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRDlMPbxaMxPtsQSg9hg7_JVGgEPUlhG9BQqA&usqp=CAU"
        profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBAAp_Q8ND6v5RlGkIeCWGm6VMFic0oEJ8hA&usqp=CAU"
        title="The Viral Fever"
      />
      <Story
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSG8f8bnKcEzBm0T-PU7jz3oMrB06ob_sEYvA&usqp=CAU"
        profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQYEyGNPUclT1nmEgNp3klAapJHLVRXlU9Maw&usqp=CAU"
        title="BuzzFeed"
      />
    </div>
  );
}

export default StoryReel;
