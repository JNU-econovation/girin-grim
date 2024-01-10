import InfoBg from "./InfoBg";
import InfoSectoin from "./InfoSectoin";

type Props = {
  memberId: number;
};

export default function MemberInfoSection({ memberId }: Readonly<Props>) {
  return (
    <section className="flex flex-col relative items-center justify-center text-color121">
      <InfoBg />
      <InfoSectoin memberId={memberId} />
    </section>
  );
}
