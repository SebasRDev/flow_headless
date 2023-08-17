import { Crownbar } from "@/components/crownbar/Crownbar";
import { Header, Title, FeatureCta } from '../components'
import { HeroSlider } from "@/components/hero-slider/HeroSlider";
import ImageCtaTest from "../assets/featureCta.jpeg";

const businessMenu = [
  { label: "residential", link: "https://www.google.com" },
  { label: "business", link: "https://www.google.com" },
  { label: "enterprise", link: "https://www.google.com" },
  { label: "networks", link: "https://www.google.com" },
];
const featureCtaMock = {
  title: "Cutting-edge solutions designed to meet your needs",
  description: "Ready to begin building the perfect solution? We'll walk you through the process, step-by-step. Get in touch with us today to get started with your personalized I.T. transformation roadmap.",
  link: {
    text: "Contact us",
    url: "https://www.google.com"
  },
  images: {
    desktop: ImageCtaTest.src,
    mobile: ImageCtaTest.src,
  }
};

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
      <FeatureCta {...featureCtaMock} />
    </>
  )
}
