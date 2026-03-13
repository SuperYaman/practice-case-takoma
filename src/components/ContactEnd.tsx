import { Laptop, Mail, Microscope, Sparkles } from "lucide-react";

export default function ContactEnd() {
  return (
    <div className="flex flex-col items-center justify-center max-w-6xl mx-auto gap-6 py-10">
      <div className="flex items-center w-full gap-4">
        <div className="flex-1 border-t border-neutral-300"></div>

        <button className="p-4 bg-neutral-900 rounded-full">
          <Microscope className="text-white w-10 h-10" />
        </button>

        <div className="flex-1 border-t border-neutral-300"></div>
      </div>

      <div className="flex flex-col items-center text-center gap-2">
        <p className="text-neutral font-semibold">HALO LAB</p>
        <div className="flex">
        <p className="text-neutral mr-2">
          Design & Tech Agency Helping Brands Become TOP 1%
        </p>
        <Sparkles className="text-neutral" />
        </div>
      </div>

      <div className="flex justify-center gap-4">
        <button className="btn btn-neutral rounded-full">Get in touch</button>

        <button className="btn btn-neutral text-neutral bg-neutral-50 rounded-full">
          Schedule a call
        </button>
      </div>

      <div className="flex items-center justify-center gap-4 text-neutral">
        <div className="flex items-center gap-2">
          <Mail className="w-5 h-5" />
          <p className="font-light">inquiry@halo-lab.com</p>
        </div>

        <div className="flex items-center gap-2">
          <Laptop className="w-5 h-5" />
          <p className="font-light">halo-lab.com</p>
        </div>
      </div>
    </div>
  );
}
