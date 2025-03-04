import { getMainPage } from "@/lib/actions";
import { Hero } from "@/sections/hero";
import { OurVision } from "@/sections/our-vision";

export default async function Home() {
  const mainPage = await getMainPage();
  return (
    <>
      <Hero data={mainPage} />
      <OurVision data={mainPage} />
    </>
  );
}
