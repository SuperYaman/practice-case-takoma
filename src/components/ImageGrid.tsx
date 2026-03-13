import CardGrid from "../utils/cardGrid";
import img1 from "../../public/assets/images/didgeman-glass-sphere-1746506_1280.jpg";
import img2 from "../../public/assets/images/dimitrisvetsikas1969-cyprus-3184019_1280.jpg";
import img3 from "../../public/assets/images/ernesta10-dunes-5568253_1280.jpg";
import img4 from "../../public/assets/images/fdsfe67854-road-5990128_1920.jpg";


type Shot = {
  image: string;
  title: string;
};

export default function ImageGrid() {
  const shots: Shot[] = [
    {
      image: img1,
      title: "Discovery land"
    },
    {
      image: img2,
      title: "Travel"
    },
    {
      image: img3,
      title: "Learn culture"
    },
    {
      image: img4,
      title: "Learn languages"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto mt-20">
    <div className="flex p-2 justify-between items-center">
        <p className="text-neutral font-semibold">
          More by HALO LAB
        </p>
        <button className="text-neutral hover:text-neutral-500 transition">
          View Profile
        </button>
      </div>
    <div className="flex">
      {shots.map((shot, index) => (
        <CardGrid
          key={index}
          image={shot.image}
          title={shot.title}
        />
      ))}
    </div>
    </div>
  );
}