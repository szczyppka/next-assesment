import React from "react";
import Head from "next/head";
import Image from "next/image";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";

const Show = ({ image, summary, name, genres }) => {
  const title = `Show "${name ? name : "missing name"}"`;

  return (
    <>
      <Head>
        <title>Show - {name}</title>
      </Head>

      <Nav />
      <Hero title={title} summary={summary}>
        <Image
          src={image.original}
          alt={name || "show cover"}
          width={640}
          height={941}
          priority
          placeholder="blur"
          blurDataURL={image.medium}
        />

        <ul>
          {genres && genres.map((element) => <li key={element}>{element}</li>)}
        </ul>
      </Hero>
    </>
  );
};

export async function getServerSideProps(context) {
  const { showid } = context.query;
  const response = await fetch(`https://api.tvmaze.com/shows/${showid}`);

  const show = await response.json();
  if (!show.image) {
    return {
      props: {
        image: {
          medium: "/static/favicon.ico",
          original: "/static/favicon.ico",
        },
        name: show.name,
        summary: show.summary,
        genres: show.genres,
      },
    };
  }

  return {
    props: {
      name: show.name,
      summary: show.summary,
      image: show.image,
      genres: show.genres,
    },
  };
}

export default Show;
