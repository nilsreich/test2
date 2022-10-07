import type { NextPage } from "next";
import { Button } from "../components/Button";

const Home: NextPage = () => {
  return (
    <div>
      <div className="text-9xl">Cool </div>
      <Button label="Klick mich!" onClick={() => console.log("check")} />
    </div>
  );
};

export default Home;
