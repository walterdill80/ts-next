"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";

import WalterImg from "@/assets/team/Walter.jpg";
import StefanImg from "@/assets/team/Stefan.jpg";
import ViktorImg from "@/assets/team/Viktor.jpg";
import MarcoImg from "@/assets/team/Marco.jpg";
import LucaImg from "@/assets/team/Luca.jpg";
import VeraImg from "@/assets/team/Vera.jpg";
import MarvinImg from "@/assets/team/Marvin.jpg";
import DaveImg from "@/assets/team/Dave.jpg";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: StaticImageData;
}

const team: TeamMember[] = [
  { id: "1", name: "Walter", role: "Entwickler & Coach", image: WalterImg },
  { id: "2", name: "Stefan", role: "Entwickler", image: StefanImg },
  { id: "3", name: "Viktor", role: "Entwickler & Coach", image: ViktorImg },
  { id: "4", name: "Marco", role: "Mindset Experte & Coach", image: MarcoImg },
  { id: "5", name: "Luca", role: "Scalping Experte & Coach", image: LucaImg },
  { id: "6", name: "Vera", role: "Finanz-Coach", image: VeraImg },
  { id: "7", name: "Marvin", role: "Support & Coach", image: MarvinImg },
  { id: "8", name: "Dave", role: "Support & Coach", image: DaveImg },
];

export default function TeamSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Split into 3 columns like original: i%3 === 0, 1, 2
  const col1 = team.filter((_, i) => i % 3 === 0); // Walter, Marco, Marvin
  const col2 = team.filter((_, i) => i % 3 === 1); // Stefan, Luca, Dave
  const col3 = team.filter((_, i) => i % 3 === 2); // Viktor, Vera

  return (
    <section id="team" className="py-32 lg:py-48">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          className="text-center mb-24"
        >
          <span className="text-xs font-medium text-[hsl(43_48%_59%)] tracking-widest uppercase">
            Team
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[hsl(0_0%_90%)] mt-5">
            Das Team hinter der Plattform
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Photo grid — staggered 3 columns */}
          <div className="flex gap-4 w-full lg:w-3/5">
            {/* Column 1 — offset top */}
            <div className="flex flex-col gap-4 flex-1 pt-12">
              {col1.map((member) => (
                <PhotoCard
                  key={member.id}
                  member={member}
                  hoveredId={hoveredId}
                  onHover={setHoveredId}
                />
              ))}
            </div>
            {/* Column 2 — no offset */}
            <div className="flex flex-col gap-4 flex-1">
              {col2.map((member) => (
                <PhotoCard
                  key={member.id}
                  member={member}
                  hoveredId={hoveredId}
                  onHover={setHoveredId}
                />
              ))}
            </div>
            {/* Column 3 — slight offset */}
            <div className="flex flex-col gap-4 flex-1 pt-8">
              {col3.map((member) => (
                <PhotoCard
                  key={member.id}
                  member={member}
                  hoveredId={hoveredId}
                  onHover={setHoveredId}
                />
              ))}
            </div>
          </div>

          {/* Name list */}
          <div className="w-full lg:w-2/5 flex flex-col">
            {team.map((member) => (
              <MemberRow
                key={member.id}
                member={member}
                hoveredId={hoveredId}
                onHover={setHoveredId}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PhotoCard({
  member,
  hoveredId,
  onHover,
}: {
  member: TeamMember;
  hoveredId: string | null;
  onHover: (id: string | null) => void;
}) {
  const isActive = hoveredId === member.id;
  const isDimmed = hoveredId !== null && !isActive;

  return (
    <div
      className={`relative aspect-[3/4] overflow-hidden rounded-xl cursor-pointer transition-all duration-500 ${
        isDimmed ? "opacity-40 scale-[0.98]" : ""
      } ${isActive ? "opacity-100 scale-[1.02] ring-2 ring-[hsl(43_48%_59%/0.4)]" : ""}`}
      onMouseEnter={() => onHover(member.id)}
      onMouseLeave={() => onHover(null)}
    >
      <Image
        src={member.image}
        alt={`${member.name} — ${member.role} bei Trading Strategen`}
        fill
        sizes="(max-width: 1024px) 33vw, 20vw"
        className="object-cover"
      />
    </div>
  );
}

function MemberRow({
  member,
  hoveredId,
  onHover,
}: {
  member: TeamMember;
  hoveredId: string | null;
  onHover: (id: string | null) => void;
}) {
  const isActive = hoveredId === member.id;
  const isDimmed = hoveredId !== null && !isActive;

  return (
    <div
      className={`flex items-center justify-between py-4 border-b border-[hsl(0_0%_10%)] cursor-pointer transition-all duration-300 ${
        isDimmed ? "opacity-30" : "opacity-100"
      }`}
      onMouseEnter={() => onHover(member.id)}
      onMouseLeave={() => onHover(null)}
    >
      <div className="flex items-center gap-3">
        <div
          className={`w-2 h-2 rounded-full transition-all duration-300 ${
            isActive
              ? "bg-[hsl(43_48%_59%)] scale-125"
              : "bg-[hsl(0_0%_28%)]"
          }`}
        />
        <span
          className={`text-lg font-semibold tracking-tight transition-colors duration-300 ${
            isActive ? "text-[hsl(43_48%_65%)]" : "text-[hsl(0_0%_85%)]"
          }`}
        >
          {member.name}
        </span>
      </div>
      <span className="text-xs font-medium text-[hsl(0_0%_38%)] uppercase tracking-widest">
        {member.role}
      </span>
    </div>
  );
}
