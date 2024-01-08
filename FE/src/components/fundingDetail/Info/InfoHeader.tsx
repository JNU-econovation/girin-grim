type Props = {
  title: string;
  shortDescription: string;
};

export default function InfoHeader({ title, shortDescription }: Props) {
  return (
    <>
      <h1 className="text-[2.5rem] font-black text-color121">{title}</h1>
      <p className=" text-color9f9">{shortDescription}</p>
    </>
  );
}
