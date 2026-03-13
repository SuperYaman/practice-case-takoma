import { Minus, Star } from "lucide-react";

export default function StarIsBornText() {
  return (
    <div className="flex justify-center px-6 py-10">
        <div className="w-full max-w-4xl">
            <span className="flex"><Star className="text-neutral bg-yellow-400 rounded-full"/>
            <p className="text-neutral ml-3">A Star is Born!</p></span>
            <p className="text-neutral mt-15 font-light text-xl">Today we introduce our interactive web design for Skillex. They have facilitated practical learning experiences for students all over the globe. This platform is a place to learn from world-leading experts in their field. It is priceless to become a member of a supportive community. Students can choose between 250 online courses in 10 fields, including data science, art, business, and many others.</p>
            <Minus className="text-neutral mt-6"/>
        </div>
    </div>
  )
}