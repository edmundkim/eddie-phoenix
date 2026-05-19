import {
  HomepageEyebrow,
  HomepageSection,
} from "@/components/homepage/Section";
import HomepageTextReveal from "@/components/homepage/HomepageTextReveal";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="bg-[#EAEDFF]">
      <HomepageSection
        as="div"
        className="py-24"
        contentClassName="grid gap-10 md:grid-cols-[14rem_minmax(0,1fr)] md:gap-12"
      >
        <div>
          <HomepageTextReveal>
            <HomepageEyebrow>How I Work</HomepageEyebrow>
          </HomepageTextReveal>
        </div>

        <div className="max-w-3xl space-y-6">
          <HomepageTextReveal delay="80ms">
            <h2
              id="about-heading"
              className="homepage-type-section-heading"
            >
              I bring calm and clarity to product work when the path is messy.
            </h2>
          </HomepageTextReveal>

          <HomepageTextReveal delay="160ms">
            <p className="homepage-type-subhead text-[color:var(--color-muted)]">
              At AutoScout24, I shape the consumer journey: how people explore
              options, narrow choices, compare results, and understand
              AI-supported experiences. I connect user needs, business
              constraints, and platform limits, then help teams test the pattern
              and carry it into the product.
            </p>
          </HomepageTextReveal>
        </div>
      </HomepageSection>
    </section>
  );
}
