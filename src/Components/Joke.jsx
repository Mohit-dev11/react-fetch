import './Joke.css'
import { Button } from "./Button";
import { useState } from "react";

export const Jokes = () => {
  const [joke, setjokes] = useState("");

  const fetchapi = async () => {
     await fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
      .then((res) => res.json())
      .then((data) => setjokes(data.joke));
  };

  return (
    <div className="joke">
      <Button callApi={fetchapi} /> 
      <p>{joke}</p>
    </div>
  );
};
