import { Heart, Bookmark } from "lucide-react";

type ShotCardProps = {
  image: string;
  title: string;
};

export default function CardGrid({ image, title }: ShotCardProps) {
  return (
    <div className="relative group w-1/4 p-2">
      <div className="relative overflow-hidden rounded-xl cursor-pointer">

        <img
          src={image}
          alt={title}
          className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-3">

          <p className="text-white text-sm font-semibold truncate">
            {title}
          </p>

          <div className="flex gap-2 mt-2">
            <button className="bg-white/90 p-2 rounded-full">
              <Heart className="text-neutral" size={16} />
            </button>

            <button className="bg-white/90 p-2 rounded-full">
              <Bookmark className="text-neutral" size={16} />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}