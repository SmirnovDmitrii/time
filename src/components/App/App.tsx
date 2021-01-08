import React, { useEffect, useState } from "react";

type Time = { time: Number };

function App() {
  const [play, setPlay] = useState(false);
  const [timer, setTimer] = useState(0);
  const [paused, setPaused] = useState(false);
  const [timersList, setTimersList] = useState<Time[]>([]);

  const playPauseToggleHandle = () => {
    setPlay(!play);
    setPaused(!play);
  };
  const nextTrackHandle = () => {
    setPlay(false);
    setTimersList([...timersList, { time: timer }]);
    setTimer(0);
  };
  useEffect(() => {
    if (paused) return;
    const intervalId = setTimeout(() => setTimer(timer + 1), 1000);
    return () => clearTimeout(intervalId);
  });
  const formatSecond = (second: number): string => {
    let sec = String(Math.abs(Math.floor(second) % 60));
    let min = String(Math.abs(Math.floor(second / 60) % 60));
    let hours = String(Math.abs(Math.floor(second / 60 / 60) % 24));
    if (sec.toString().length === 1) sec = "0" + sec;
    if (min.toString().length === 1) min = "0" + min;
    if (hours.toString().length === 1) hours = "0" + hours;
    return `${hours}:${min}:${sec}`;
  };

  return (
    <div className="App">
      <h3>{formatSecond(timer)}</h3>
      <button onClick={playPauseToggleHandle}>play/pause</button>
      <button onClick={nextTrackHandle}>next track</button>
      {timersList.map((item) => (
        <h6>{formatSecond(Number(item.time))}</h6>
      ))}
    </div>
  );
}

export default App;
