import Card from "../Card";
import Loader from "/static/loader.gif";
import Image from "next/image";
const Loading = () => {
  return (
    <Card>
      <Image src={Loader} alt="Loading..." />
      loading...
    </Card>
  );
};

export default Loading;
