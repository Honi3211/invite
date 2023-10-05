import picture from "@/public/inviteTeacher.jpg";
import YouTube from "react-youtube";

export default function Home() {
  const options = {
    width: "full",
    height: "300",
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <div className="h-screen">
      <div className="w-full h-full flex justify-center items-center">
        <YouTube videoId="czYhq9eFLHQ" opts={options} />
      </div>
    </div>
  );
}
