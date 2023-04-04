import { useEffect, useState } from "react";
const Functiontimer = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const myTimer = setInterval(() => {
        setCount(count+1)
      console.log(count);
    }, 1000);
    return () => {
      clearInterval(myTimer);
    };
  });
  return <div>function interval</div>;
};

export default Functiontimer;
