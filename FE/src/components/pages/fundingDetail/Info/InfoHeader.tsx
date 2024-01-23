type Props = {
  title: string;
  shortDescription: string;
};

export default function InfoHeader({
  title,
  shortDescription,
}: Readonly<Props>) {
  return (
    <>
      <h1 className="text-[2.5rem] font-black text-color121 leading-[3.125rem] mt-1">
        {title}
      </h1>
      <p className=" text-color9f9 grow mt-2">{shortDescription}</p>
    </>
  );
}
