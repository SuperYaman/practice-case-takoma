import { Bookmark, Calendar, Heart, Laptop, Mail } from "lucide-react";
import { Microscope } from "lucide-react";

export default function ContactInfo() {
    return(
        <>
        <div className="flex pt-50 p-3 justify-center">
        <div className="w-280">
            <text className="text-neutral text-2xl font-normal">
                Skillex Online Education
            </text>
        </div>
        </div>
        <div className="flex justify-center">
            <div className="flex w-280">
                <button className="p-3 bg-violet-600 btn-lg rounded-full">
                    <Microscope className="w-8 h-8 text-white" />
                </button>
                <div className="ml-4">
                    <div className="flex">
                        <p className="text-neutral">Halo Projects for HALO LAB</p><span className="text-green-500 ml-3 mr-3 font-light text-sm">Available for work</span> <span className="text-neutral-400 font-light text-sm">Follow</span>
                    </div>
                    <div className="flex">
                        <Mail className="text-neutral w-5 h-5"/>
                        <p className="text-neutral ml-2 mr-3 font-light">inquiry@halo-lab.com</p>
                        <Laptop className="text-neutral w-5 h-5"/><p className="text-neutral ml-2 font-light">halo-lab.com</p>
                    </div>
                </div>
                <div className="flex items-center ml-auto gap-3">
                    <button className="p-2 border-2 border-neutral-200 btn-lg rounded-full">
                        <Heart className="w-5 text-neutral"/>
                    </button>
                    <button className="p-2 border-2 border-neutral-200 btn-lg rounded-full">
                        <Bookmark className="w-5 text-neutral"/>
                    </button>
                    <button className="p-2 border-2 border-neutral-200 btn-lg rounded-full">
                        <Calendar className="w-5 text-neutral"/>
                    </button>
                    <button className="btn btn-neutral rounded-full">Get in touch</button>
                </div>
            </div>
        </div>
        </>
    )
}