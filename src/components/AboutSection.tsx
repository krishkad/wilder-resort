import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-cream-50">
      <div className="max-w-[1444px] mx-auto px-8 max-md:px-6 overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="overflow-hidden rounded-xl shadow-luxury">
              <img
                src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800&h=600&fit=crop&crop=center"
                alt="Sunlight filtering through forest canopy"
                className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gold-400 rounded-full opacity-20 animate-float" />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="border-l-4 border-gold-400 pl-6 bg-cream-100 py-6 rounded-r-xl">
              <h2 className="text-4xl md:text-5xl font-bold text-forest-900 mb-4">
                Where Heritage Meets Harmony
              </h2>
              <p className="text-lg text-forest-700 leading-relaxed mb-6">
                Nestled within 500 acres of pristine forest, our resort has been
                a sanctuary of luxury for over three decades. We believe that
                true sophistication lies in our connection to nature, offering
                guests an unparalleled experience where every detail is crafted
                with care.
              </p>
              <p className="text-lg text-forest-700 leading-relaxed mb-6">
                Our commitment to sustainable luxury ensures that future
                generations can enjoy this natural wonder. From our
                locally-sourced cuisine to our eco-friendly spa treatments,
                every aspect of your stay contributes to the preservation of
                this magical ecosystem.
              </p>
              <p className="text-lg text-forest-700 leading-relaxed mb-8">
                Experience curated moments of tranquility, from sunrise forest
                walks to candlelit dinners under the stars. This is more than
                accommodation—it&apos;s a journey back to what matters most.
              </p>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-forest-600 text-forest-600 hover:bg-forest-600 hover:text-white px-8 py-3 transition-all duration-300 hover:scale-105"
              >
                Watch Our Story
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
