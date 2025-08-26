import SearchBar from "../../components/SeachBar";
import StartupCard from "../../components/StartupCard";
import { STARTUP_QUERY } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const params = { search: query || null };
  //const posts = await client.fetch(STARTUP_QUERY);
  const { data: posts } = await sanityFetch({ query: STARTUP_QUERY, params });

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch your startup <br />
          Connect with experts
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit ideas,Vote on pitches, and get noticed in virtual competitions
        </p>
        <SearchBar query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post, index) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No Startups found</p>
          )}
        </ul>
      </section>
      <SanityLive />
    </>
  );
}
