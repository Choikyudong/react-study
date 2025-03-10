import {useRef, useState} from "react";

export default function RefHooks() {
  const [isPlaying, setIsPlaying] = useState(false);

  const ref = useRef(null);

  function handleClick() {
    if (isPlaying) {
      ref.current.pause();
    } else {
      ref.current.play();
    }

    setIsPlaying(!isPlaying);
  }

  return (
      <>
        <video
            width="240"
            ref={ref}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
        >
          <source src={"/test.mp4"} type={"video/mp4"} />
        </video>
        <br />
        <button onClick={handleClick}>{isPlaying ? "Pause" : "Play"}</button>
      </>
  )
}