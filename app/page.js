
// import CampusFacility from "@/components/CampusFacility";

import CEO from "@/components/CEO";
import Facility from "@/components/Facility";
import FewWords from "@/components/FewWords";
import HeroCarousal from "@/components/HeroCarousal";
// import LatestNews from "@/components/LatestNews";
import Marquis from "@/components/Marquis";
import Mission from "@/components/Mission";
// import Statistics from "@/components/Statistics";


export default function Home() {
  return (
    <>
    <HeroCarousal/>
    <Marquis/>
    <FewWords/>
    <CEO/>
    <Mission/>
    {/* <Featured/> */}
    {/* <CampusFacility/> */}
    <Facility/>
    {/* <Statistics/>
    <LatestNews/> */}
    </>
  );
}
