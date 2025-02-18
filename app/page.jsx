import Image from "next/image";
import { Button } from "@/components/ui/button";
import {FiDownload} from "react-icons/fi";
import Social from "@/components/ui/Socials";
import Photo from "@/components/ui/Photo";
import Stats from "@/components/ui/Stats";
import Link from "next/link";


const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
       {/* text */}
       <div className="text-center xl:text-left order-2 xl:order-none">
        <span className="text-xl">Software Developer</span>
        <h1 className="h1 mb-6">
          Hello Im <br /> <span className="text-accent">Adefemi Adekunle</span>
        </h1>
        <p className="max-w-[500px] mb-9 text-white/80">
        I excel in crafting elegant digital experiences and I am proficient in various programing languages and technologies.
        </p>
        {/* btn and socials */}
        <div className="flex flex-col xl:flex-row items-center gap-8">
          <Button variant="outline"
          size="lg"
          className="uppercase flex items-center gap-2"
          >
            <Link href="https://docs.google.com/document/d/1tkanpVAu0jTSE-Fz1l5gcEe3kWgoi_vRxzC_pyUiepU/edit?tab=t.gwkrgjrhzjvz" className="flex flex-col-2">
            <span className="text-accent hover:text-primary">Download CV</span>
            <FiDownload className="text-xl" />
            </Link>
            
          </Button>
          <div className="mb-8 xl:mb-0"> 
            <Social containerStyles="flex gap-6"
          iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
          /></div>
        </div>
       </div>
       {/* pohto */}
       <div className="order-1 xl:order-none mb-8 xl:mb-0"
       >
        <Photo />
        </div>
        </div>
      </div>
      <Stats />

    </section>
  )
}
export default Home;