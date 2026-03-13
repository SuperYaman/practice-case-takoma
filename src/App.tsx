import './App.css'
import ContactEnd from './components/ContactEnd'
import ContactInfo from './components/ContactInfo'
import DemoVideo from './components/DemoVideo'
import Navbar from './components/Navbar'
import StarIsBornText from './components/StarIsBornText'
import ImageGrid from './components/ImageGrid'
import ImageCarousel from './components/ImageCarousel'
import Footer from './components/Footer'
import img1 from "./assets/images/didgeman-glass-sphere-1746506_1280.jpg";
import img2 from "./assets/images/dimitrisvetsikas1969-cyprus-3184019_1280.jpg";
import img3 from "./assets/images/ernesta10-dunes-5568253_1280.jpg";
import img4 from "./assets/images/fdsfe67854-road-5990128_1920.jpg";
import img5 from "./assets/images/geralt-never-stop-learning-3653430_1920.jpg";
import img6 from "./assets/images/guojinliang4104-zhangye-9788010_1280.jpg";
import img7 from "./assets/images/makalu-kyrgyzstan-4765706_1280.jpg";
import img8 from "./assets/images/guojinliang4104-zhangye-9788010_1280.jpg";


  export default function App() {
    const images = [
    { image: img1, title: "Online Education Platform Design" },
    { image: img2, title: "Student Dashboard Interface Concept" },
    { image: img3, title: "Mobile Learning Application UI" },
    { image: img4, title: "Course Discovery Platform" },
    { image: img5, title: "Online Education Platform Design" },
    { image: img6, title: "Student Dashboard Interface Concept" },
    { image: img7, title: "Mobile Learning Application UI" },
    { image: img8, title: "Course Discovery Platform" }
  ];

  return (
    <div className='bg-white h-full'>
      <Navbar/>
      <ContactInfo/>
      <DemoVideo/>
      <StarIsBornText/>
      <ContactEnd/>
      <ImageGrid/>
      <div className="py-10">
        <ImageCarousel items={images} speed={40} />
      </div>
      <Footer/>
    </div>
  )
}