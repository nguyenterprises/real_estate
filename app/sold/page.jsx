import { client } from "../lib/sanity";
import Listings from "../components/listings/Listings";
import Title from "../components/reuseable/Title";
import Footer from "../components/footer/Footer";
import SellWithUs from "../components/reuseable/SellWithUs";

async function getSoldListings() {
  const query = `*[_type == "listing" && status == "sold"]`;

  const data = await client.fetch(query);
  return data;
}
export default async function SoldPage() {
  const sold = await getSoldListings();

  return (
    <div className="flex flex-col items-center gap-[4rem]">
      <div className="pt-[5rem]">
        <Title one="Keanu Reeve's" two="Sold Listings" />
      </div>
      <Listings listings={sold} sold={true} />
      <SellWithUs />
      <Footer />
    </div>
  );
}
