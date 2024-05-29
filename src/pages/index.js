import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import SearchContainer from "@/components/SearchContainer";

const Home = () => {
  return (
    <Layout>
      <Hero
        title="Welcome to Movie Guide"
        summary="To get started, edit <code>pages/index.js</code> and save to reload."
      >
        <SearchContainer />
      </Hero>
    </Layout>
  );
};

export default Home;
