import React, { ChangeEvent, useEffect, useState } from "react";

import { secondFormatter } from "../../utils";

type Time = { timer: Number; task: string };

function App() {
  const [play, setPlay] = useState(true);
  const [timer, setTimer] = useState(0);
  const [task, setTask] = useState("");
  const [timersList, setTimersList] = useState<Time[]>([]);

  const playPauseToggleHandle = () => setPlay(!play);
  const showWarning = () => alert("empty input");
  const taskChange = (e: ChangeEvent<HTMLInputElement>) =>
    setTask(e.target.value);

  const nextTrackHandle = () => {
    if (!task) return showWarning();
    setPlay(false);
    setTimersList([...timersList, { timer, task }]);
    setTimer(0);
    setTask("");
  };

  useEffect(() => {
    if (play) return;
    const intervalId = setTimeout(() => setTimer(timer + 1), 1000);
    return () => clearTimeout(intervalId);
  });

  return (
    <div className="App">
      <h3>{secondFormatter(timer)}</h3>
      <button onClick={playPauseToggleHandle}>play/pause</button>
      <button onClick={nextTrackHandle}>next track</button>
      <input type="text" onChange={taskChange} value={task} />
      {timersList.map((item) => (
        <h5>
          {secondFormatter(Number(item.timer))} {item.task}
        </h5>
      ))}
    </div>
  );
}

export default App;
