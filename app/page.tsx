import ListCarPost from "@/components/carpost/ListCarPost";
import SearchFilters from "@/components/search/SearchFilters";
import SearchType from "@/components/search/SearchType";
import Hero from "@/components/pages/home/Hero";

export default async function Home() {
  return (
    <main className="first_pagesection">
      <Hero />
      <SearchFilters />
      <SearchType />
      <ListCarPost />
    </main>
  );
}
