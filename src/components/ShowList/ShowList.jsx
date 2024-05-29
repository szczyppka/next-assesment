import React from "react";
import Card from "@/components/Card";
import Miniature from "@/components/Miniature";

const ShowList = ({ shows }) => {
  if (!shows || shows.length === 0) {
    return (
      <Card error="true">
        <p>No shows found</p>
      </Card>
    );
  }

  return shows.map((show) => <Miniature key={show.id} {...show} />);
};

export default ShowList;
