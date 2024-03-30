import Image from "next/image";

type SectionProps = {
  text: string;
  image: string;
  alt: string;
  reverse?: boolean;
};

const Section = (props: SectionProps) => {
  return (
    <div className="flex gap-4 flex-col md:flex-row">
      {props.reverse ? (
        <>
          <div className="p-8 flex justify-center items-center">
            <Image
              src={props.image}
              alt={props.alt}
              width={500}
              height={500}
              className="rounded-lg"
            />
          </div>
          <div className="flex justify-center items-center p-8 text-lg">
            <p className="text-center md:text-left">{props.text}</p>
          </div>
        </>
      ) : (
        <>
          <div className="flex justify-center items-center p-8 text-lg">
            <p className="text-center md:text-left">{props.text}</p>
          </div>
          <div className="p-8 flex justify-center items-center">
            <Image
              src={props.image}
              alt={props.alt}
              width={500}
              height={500}
              className="rounded-lg"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Section;
