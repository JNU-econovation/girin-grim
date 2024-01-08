"use client";
import InfoSection from "./InfoSection";
import OptinsSection from "./OptinsSection";

export default function Pledge({ fundingId }: Readonly<{ fundingId: number }>) {
  return (
    <>
      <InfoSection fundingId={fundingId} />
      <div className="w-full bg-colorede pb-4">
        <section className="w-full max-w-7xl mx-auto grid grid-cols-[3fr_2fr] gap-3">
          <OptinsSection />
          <div className="w-full bg-white"></div>
        </section>
      </div>
    </>
  );
}
