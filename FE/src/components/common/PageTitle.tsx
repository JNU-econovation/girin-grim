type Props = {
  title: string;
};

export default function PageTitle({ title }: Props) {
  return (
    <div className="flex items-center text-color121 text-3xl font-bold mt-11">
      <h1 className="shrink-0 mr-[2.375rem]">{title}</h1>
      <hr className="w-full bg-colorede h-[1.5px] border-none" />
    </div>
  );
}
