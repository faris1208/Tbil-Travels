import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function ServiceCard({
  title,
  description,
  image,
  link,
}: ServiceCardProps) {
  return (
    <Link
      href={link}
      className="group relative block h-[420px] rounded-xl overflow-hidden shadow-lg"
    >
      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 p-6 text-white">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-sm leading-relaxed text-gray-200">
          {description}
        </p>
      </div>
    </Link>
  );
}
