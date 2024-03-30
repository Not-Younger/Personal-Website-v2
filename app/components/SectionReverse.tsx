import Image from "next/image";

type SectionReverseProps = {
  text: string;
  image: string;
  alt: string;
};

const SectionReverse = (props: SectionReverseProps) => {
  return (
    <div className="flex flex-col-reverse md:flex-row">
      <div className="flex justify-center items-center p-8 text-lg">
        <p className="text-center md:text-left">{props.text}</p>
      </div>
      <div className="p-8 md:pt-8 md:px-8 flex justify-center items-center">
        <Image
          src={props.image}
          alt={props.alt}
          width={500}
          height={500}
          className="rounded-lg h-auto"
        />
      </div>
    </div>
  );
};

export default SectionReverse;
