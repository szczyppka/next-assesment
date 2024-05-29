import Link from "next/link";
import Card from "../Card";
import DOMPurify from "isomorphic-dompurify";

const Miniature = ({ name, summary, id }) => {
  return (
    <Card>
      <h3>{name}</h3>
      <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(summary) }} />
      <Link href={`/show/${id}`}>read more</Link>
    </Card>
  );
};
export default Miniature;
