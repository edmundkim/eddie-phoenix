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
              I help teams turn ambiguous product systems into clearer user
              decisions, then carry that work into what ships.
            </h2>
          </HomepageTextReveal>

          <HomepageTextReveal delay="160ms">
            <p className="homepage-type-subhead text-[color:var(--color-muted)]">
              I frame product direction where user needs, business constraints,
              and technical limits meet. At AutoScout24, that has meant
              restructuring search taxonomy, testing filter and list-card
              patterns, aligning platform tradeoffs, and setting standards for
              AI behavior before teams scale the work.
            </p>
          </HomepageTextReveal>
        </div>
      </HomepageSection>
    </section>
  );
}
