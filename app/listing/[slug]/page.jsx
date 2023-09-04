import { client } from "@/app/lib/sanity";
import Detail from "@/app/components/detail/Detail";

async function getListing(slug) {
  const query = `*[_type == "listing" && slug.current == "${slug}"][0]`;

  const data = await client.fetch(query);
  return data;
}

export default async function SlugPage({ params }) {
  const data = await getListing(params.slug);

  return (
    <div>
      <Detail data={data} />
    </div>
  );
}
