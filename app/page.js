import { client } from "./lib/sanity";
import HomePage from "./components/home/HomePage";

async function getProperties() {
  const query = `*[_type == "listing"]`;

  const data = await client.fetch(query);
  return data;
}

export default async function Home() {
  const properties = await getProperties();

  return (
    <main className="absolute top-0 flex w-[100%] flex-col">
      <HomePage properties={properties} />
    </main>
  );
}
