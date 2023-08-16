import { Crownbar } from "@/components/crownbar/Crownbar";
import { Header, Title } from '../components'
import { HeroSlider } from "@/components/hero-slider/HeroSlider";

const businessMenu = [
  { label: "residential", link: "https://www.google.com" },
  { label: "business", link: "https://www.google.com" },
  { label: "enterprise", link: "https://www.google.com" },
  { label: "networks", link: "https://www.google.com" },
];

export default function Home() {
  return (
    <>
      <Crownbar businessMenu={businessMenu}/>
      <Header />
      <HeroSlider />
      <Title
        title="Why should you choose FLOW Enterprise?"
        subtitle="Three simple reasons:"
      />
    </>
  )
}
