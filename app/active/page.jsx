import { client } from "../lib/sanity";
import Listings from "../components/listings/Listings";
import Title from "../components/reuseable/Title";
import Footer from "../components/footer/Footer";
import BuyFromUs from "../components/reuseable/BuyFromUs";

async function getActiveListings() {
  const query = `*[_type == "listing" && status == "available"]`;

  const data = await client.fetch(query);
  return data;
}
export default async function PropertiesPage() {
  const active = await getActiveListings();

  return (
    <div className="flex flex-col items-center gap-[4rem]">
      <div className="pt-[5rem]">
        <Title one="Keanu Reeve's" two="Current Listings" />
      </div>
      <Listings listings={active} sold={false} />
      <BuyFromUs />
      <Footer />
    </div>
  );
}
