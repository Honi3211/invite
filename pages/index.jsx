import picture from "@/public/inviteTeacher.png";

export default function Home() {
  return (
    <div className="h-screen">
      <div className="w-full h-full flex justify-center items-center">
        <img src={picture.src} alt="" className="w-full max-w-[650px]" />
      </div>
    </div>
  );
}
