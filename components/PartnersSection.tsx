import Image from "next/image";
import Link from "next/link";

const partners = [
  {
    name: "Amazon Web Services",
    logo: "/images/1.png",
    url: "https://aws.amazon.com",
  },
  {
    name: "EPAM",
    logo: "/images/2.png",
    url: "https://www.epam.com",
  },
  {
    name: "Hortonworks",
    logo: "/images/3.png",
    url: "https://hortonworks.com",
  },
  {
    name: "IBM PartnerWorld",
    logo: "/images/1.png",
    url: "https://www.ibm.com/partnerworld",
  },
  {
    name: "Inc",
    logo: "/images/2.png",
    url: "https://www.inc.com",
  },
  {
    name: "Kentico Bronze Partner",
    logo: "/images/3.png",
    url: "https://www.kentico.com",
  },
];

export default function PartnersSection() {
  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="mx-auto container">
        <div
          className="
            grid
            grid-cols-3
            gap-8
            items-center
            justify-items-center
            md:grid-cols-6
          "
        >
          {partners.map((partner) => (
            <Link
              key={partner.name}
              href={partner.url}
              target="_blank"
              className="
                transition-transform
                duration-300
                ease-out
                md:hover:scale-105
              "
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={140}
                height={60}
                priority={false}
                sizes="(max-width: 768px) 33vw, 140px"
                className="object-contain"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
