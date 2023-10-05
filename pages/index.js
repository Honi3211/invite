import picture from "@/public/inviteTeacher.jpg";
import YouTube from "react-youtube";

export default function Home() {
  const options = {
    width: "80%",
    height: "350",
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <div className="h-screen">
      <div className="w-full h-full flex justify-center items-center">
        <YouTube
          videoId="JZfjpoLrDd4"
          opts={options}
          className="w-full max-w-[700px] flex justify-center"
        />
      </div>
    </div>
  );
}
