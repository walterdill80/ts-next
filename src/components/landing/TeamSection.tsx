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
  const col1 = team.filter((_, i) => i % 3 === 0);
  const col2 = team.filter((_, i) => i % 3 === 1);
  const col3 = team.filter((_, i) => i % 3 === 2);

  return (
    <section id="team" className="py-32 lg:py-48">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-24">
          <span className="text-xs font-medium text-[var(--gold)] tracking-widest uppercase">
            Team
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[var(--ts-heading)] mt-5">
            Das Team hinter der Plattform
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Photo grid — staggered 3 columns */}
          <div className="flex gap-4 w-full lg:w-3/5">
            <div className="flex flex-col gap-4 flex-1 pt-12">
              {col1.map((member) => (
                <PhotoCard key={member.id} member={member} />
              ))}
            </div>
            <div className="flex flex-col gap-4 flex-1">
              {col2.map((member) => (
                <PhotoCard key={member.id} member={member} />
              ))}
            </div>
            <div className="flex flex-col gap-4 flex-1 pt-8">
              {col3.map((member) => (
                <PhotoCard key={member.id} member={member} />
              ))}
            </div>
          </div>

          {/* Name list */}
          <div className="w-full lg:w-2/5 flex flex-col">
            {team.map((member) => (
              <MemberRow key={member.id} member={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PhotoCard({
  member,
}: {
  member: TeamMember;
}) {
  return (
    <div className="relative aspect-[3/4] overflow-hidden rounded-xl transition-transform duration-300 lg:hover:scale-[1.02]">
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
}: {
  member: TeamMember;
}) {
  return (
    <div className="flex items-center justify-between border-b border-[var(--ts-border-faint)] py-4">
      <div className="flex items-center gap-3">
        <div className="h-2 w-2 rounded-full bg-[var(--ts-text-ghost)]" />
        <span className="text-lg font-semibold tracking-tight text-[var(--ts-text-strong)]">
          {member.name}
        </span>
      </div>
      <span className="text-xs font-medium text-[var(--ts-text-dim)] uppercase tracking-widest">
        {member.role}
      </span>
    </div>
  );
}
