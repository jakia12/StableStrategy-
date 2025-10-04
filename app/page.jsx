import CollectPanel from "./components/CollectPanel";
import FeatureBlocks from "./components/FeatureBlocks";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Section from "./components/Section";
import SiteFooter from "./components/SiteFooter";
import StatsGrid from "./components/StatsGrid";

export default function Page() {
  return (
    <>
      <Hero />

      <Section>
        <StatsGrid />
      </Section>

      <Section title="Collect Fees" subtitle="Protocol">
        <CollectPanel />
      </Section>

      <Section title="Features" subtitle="Why this design works">
        <FeatureBlocks />
      </Section>

      <Section title="How it works" subtitle="Overview">
        <HowItWorks />
      </Section>

      <SiteFooter />
    </>
  );
}
