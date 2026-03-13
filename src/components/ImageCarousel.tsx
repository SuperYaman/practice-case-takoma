type ImageItem = {
  image: string;
  title?: string;
};

type ImageMarqueeProps = {
  items: ImageItem[];
  speed?: number;
};

export default function ImageMarquee({ items, speed = 50 }: ImageMarqueeProps) {
  return (
    <div className="overflow-hidden w-full py-6 mt-35">
      <div
        className="flex animate-marquee gap-6"
        style={{
          animationDuration: `${items.length * 100 / speed}s`
        }}
      >
        {[...items, ...items].map((item, idx) => (
          <div key={idx} className="flex-shrink-0 w-64 relative">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-cover rounded-lg"
            />
            {item.title && (
              <p className="text-sm text-neutral mt-1 truncate">
                {item.title}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}