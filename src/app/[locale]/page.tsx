import Achievements from "../components/achievements";
import Brand from "../components/home/brand";
import CreativeMind from "../components/home/creative-mind";
import CustomerStories from "../components/home/customer-stories";
import HeroSection from "../components/home/hero";
import Innovation from "../components/home/innovation";
import NosProjets from "../components/home/online-presence";
import Solutions from "../components/home/solution";
import WebResult from "../components/home/web-result";


import { avatarList, NosProjetsList, brandList, WebResultTagList, innovationList, creativeMindList } from "@/data/page-data";

export default function Home() {
  return (
    <main>
      {/* ---------------------Hero section Starts-----------------  */}
      <HeroSection data={{ avatarList }} />
      {/* ---------------------Hero section Ends-----------------  */}

      {/* ---------------------Brand logo section Starts-----------------  */}
      <Brand data={brandList} />
      {/* ---------------------Brand logo section Ends-----------------  */}

      {/* ---------------------Web result section Starts-----------------  */}
      <WebResult data={WebResultTagList} />
      {/* ---------------------Web result section Ends-----------------  */}

      {/* ---------------------Innovation section Starts-----------------  */}
      <Innovation data={innovationList} />
      {/* ---------------------Innovation section Ends-----------------  */}

      {/* ---------------------Online presence section Starts-----------------  */}
      <NosProjets data={NosProjetsList} />
      {/* ---------------------Online presence section Ends-----------------  */}

      {/* ---------------------Creative mind section Starts-----------------  */}
      <CreativeMind data={creativeMindList} />
      {/* ---------------------Creative mind section Ends-----------------  */}

      {/* ---------------------Customer Stories section Starts-----------------  */}
      <CustomerStories />
      {/* ---------------------Customer Stories section Ends-----------------  */}

      {/* ---------------------Solutions section Starts-----------------  */}
      <Solutions />
      {/* ---------------------Solutions section Ends-----------------  */}
    </main>
  )
}
