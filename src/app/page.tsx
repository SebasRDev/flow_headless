import { Crownbar } from "@/components/crownbar/Crownbar";
import { Header, Title, FeatureCta, HalfImageText } from '../components'
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
const halfImageMock = {
  title: "1. Fully-managed, end-to-end network solutions",
  description: "Because your I.T. solutions partner should offer best-of-breed hardware and software running on a secure, state-of-the-art fibre optics network backed by extensive technical expertise, all designed to help you reach your business goals. (Which we absolutely do.)",
  image: {
    url: "/images/halfImage1.jpeg",
    alt: "1. Fully-managed, end-to-end network solutions",
  },
  link: {
    text: "Explore our portfolio",
    url: "https://www.google.com",
  }
};
const halfImage2Mock = {
  ...halfImageMock,
  title: "2. A world-class support team",
  image: {
    url: "/images/halfImage2.jpeg",
    alt: "1. Fully-managed, end-to-end network solutions",
  },
  alignmentImage: "right"
};
const halfImage3Mock = {
  ...halfImageMock,
  title: "3. The region's biggest and best network",
  image: {
    url: "/images/halfImage3.jpeg",
    alt: "1. Fully-managed, end-to-end network solutions",
  }
};

export default function Home() {
  return (
    <>
      <Crownbar businessMenu={businessMenu}/>
      <Header />
      <HeroSlider />
      <FeatureCta {...featureCtaMock} />
      <Title
        title="Why should you choose FLOW Enterprise?"
        subtitle="Three simple reasons:"
      />
      <HalfImageText {...halfImageMock} />
      <HalfImageText {...halfImage2Mock} />
      <HalfImageText {...halfImage3Mock} />
    </>
  )
}
