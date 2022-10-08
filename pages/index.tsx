import type { NextPage } from "next";
import { Button } from "../components/Button";
import { Tab } from "../components/Tab";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Home: NextPage = () => {
  const { data, error } = useSWR("/api/todo", fetcher);
  if (error) return <div>An error occured.</div>;
  if (!data) return <div>Loading ...</div>;
  return (
    <div>
      <div className="text-9xl">Cool </div>
      <Button label="Klick mich!" onClick={() => console.log("hi")} />
      <Tab />
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
