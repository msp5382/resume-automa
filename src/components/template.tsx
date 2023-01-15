import Image from "next/image";
import Link from "next/link";

interface ITemplateProps {
  title: string;
  image: string;
  slug: string;
}

export const Template = ({ image, slug, title }: ITemplateProps) => {
  return (
    <div>
      <div className="bg-blue-900 rounded-t-xl p-5 relative">
        <Image src={image} alt={slug} width={300} height={300 * 1.414}></Image>
      </div>
      <div className="bg-white border border-t-0 flex flex-col rounded-b-xl p-5 martian-mono">
        <Link className="hover:underline" href={`/create?template=${slug}`}>
          {title}
        </Link>
      </div>
    </div>
  );
};
