import { client } from "../lib/sanity";
import Sell from "../components/sell/Sell";
async function getSoldListings() {
  const query = `*[_type == "listing" && status == "sold"]`;

  const data = await client.fetch(query);
  return data;
}
export default async function SellPage() {
  const sold = await getSoldListings();

  return (
    <>
      <Sell properties={sold} />
    </>
  );
}
