import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 244px;
  height: 424px;
  background: ${({ theme }) => theme.backgroundCard};
  padding: 3rem 3rem;
  border-radius: 0.5rem;
`;

const CardTitle = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.colorText};
  font: ${({ theme }) => theme.typographyTitle};
`;

const CardButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: ${({ theme, disabled }) =>
    disabled ? theme.colorDisabled : theme.colorText};
  font: ${({ theme }) => theme.typographyButton};
  background: ${({ theme, disabled }) =>
    disabled ? theme.backgroundButtonDisabled : theme.backgroundButton};

  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  &:hover {
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  }
  &:active {
    transform: scale(0.96);
  }
`;

const Progress = styled(CircularProgressbar)`
  .CircularProgressbar-path {
    stroke: ${({ theme, isBreak }) =>
      isBreak ? theme.pathColorBreak : theme.pathColor};
  }
  .CircularProgressbar-trail {
    stroke: ${({ theme, isBreak }) =>
      isBreak ? theme.trailColorBreak : theme.trailColor};
  }
  .CircularProgressbar-text {
    fill: ${({ theme }) => theme.colorText};
  }
  .CircularProgressbar-background {
    fill: green;
  }
`;

const Card = () => {
  const MINUTES_POMODORO = 25;
  const MINUTES_BREAK = 5;

  const TIME_IN_SECONDS_POMODORO = MINUTES_POMODORO * 60;
  const TIME_IN_SECONDS_BREAK = MINUTES_BREAK * 60;

  const [time, setTime] = useState(TIME_IN_SECONDS_POMODORO);
  const [currentTime, setcurrentTime] = useState(0);

  const [isStart, setStart] = useState(false);
  const [isPaused, setPaused] = useState(true);
  const [isBreak, setBreak] = useState(false);

  const [reanudar, setReanudar] = useState(false);
  const timerRef = useRef(0);

  useEffect(() => {
    if (currentTime === time) {
      window.clearInterval(timerRef.current);
      setcurrentTime(0);
      setStart(!isStart);
      setPaused(!isPaused);
      setReanudar(false);
      setBreak(!isBreak);

      const newIsBreak = !isBreak;
      setTime(newIsBreak ? TIME_IN_SECONDS_BREAK : TIME_IN_SECONDS_POMODORO);
    }
  });

  // useEffect(() => {
  //   setTime(isBreak ? TIME_IN_SECONDS_BREAK : TIME_IN_SECONDS_POMODORO);
  // }, [isBreak]);

  const initTimer = () => {
    timerRef.current = setInterval(() => {
      setcurrentTime((c) => c + 1);
    }, 1000);
  };

  const startPomodoro = () => {
    setStart(!isStart);
    setPaused(!isPaused);
    initTimer();
  };

  const pausePomodoro = () => {
    setPaused(!isPaused);
    setStart(!isStart);
    setReanudar(true);

    window.clearInterval(timerRef.current);
  };

  const convertToMinutes = () => {
    const minutes = Math.floor((time - currentTime) / 60);
    const seconds = (time - currentTime) % 60;

    const minutesString = minutes.toString();
    const secondsString = seconds.toString();

    const minutesWithZero = minutesString.padStart(2, "0");
    const secondsWithZero = secondsString.padStart(2, "0");
    const minutesAndSeconds = `${minutesWithZero}:${secondsWithZero}`;

    return minutesAndSeconds;
  };

  return (
    <CardContent>
      <CardTitle>Pomodoro Tracker</CardTitle>
      <Progress
        minValue={0}
        maxValue={time}
        value={currentTime}
        text={convertToMinutes()}
        isBreak={isBreak}
      />
      <>
        <CardButton onClick={startPomodoro} disabled={isStart}>
          {reanudar ? "Reanudar" : "Start"} {isBreak ? "Break" : "Pomodoro"}
        </CardButton>

        <CardButton onClick={pausePomodoro} disabled={isPaused}>
          Pause {isBreak ? "Break" : "Pomodoro"}
        </CardButton>
      </>
    </CardContent>
  );
};

export default Card;
