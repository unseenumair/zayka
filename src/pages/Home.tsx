import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Truck, Clock, Banknote } from "lucide-react";
import FoodCard from "@/components/FoodCard";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { featuredItems } from "@/data/menuData";
import heroBg from "@/assets/hero-bg.webp";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero + Trust Badges = 100vh minus header (64px) */}
      <div className="flex min-h-[calc(100vh-64px)] flex-col">
        {/* Hero Section */}
        <section className="relative flex flex-1 items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroBg})` }}
          />
          {/* Off-white Overlay */}
          <div className="absolute inset-0 bg-zayka-offwhite/85" />
          
          <div className="container relative z-10">
            <div className="mx-auto max-w-3xl text-center">
            {/* Urdu Heading */}
            <AnimatedSection animation="fade-up">
              <h1 className="font-urdu text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
                آج کیا کھائیں؟
              </h1>
            </AnimatedSection>

            {/* English Supporting Text */}
            <AnimatedSection animation="fade-up" delay={100}>
              <p className="mt-4 text-md text-muted-foreground md:text-lg">
                A modern restaurant website demo with bilingual design.
                <br className="hidden sm:block" />
                Explore our Pakistani cuisine ordering experience!
              </p>
            </AnimatedSection>

            {/* CTA Button */}
            <AnimatedSection animation="scale" delay={200}>
              <Link
                to="/foods"
                className="zayka-btn-primary mt-8 inline-flex text-lg"
              >
                <span className="font-urdu">مینو دیکھیں</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </AnimatedSection>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-accent/10 blur-3xl" />
      </section>

        {/* Trust Badges */}
        <section className="shrink-0 border-b border-border bg-card py-6">
          <div className="container">
            <div id="trustBadgesCont" className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
            <AnimatedSection animation="fade-up" delay={0}>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    30 Min Delivery
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Fast & reliable
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={100}>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <Truck className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Free Delivery</p>
                  <p className="text-sm text-muted-foreground">
                    On orders above Rs. 500
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Banknote className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    Cash on Delivery
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Pay when you receive
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
        </section>
      </div>

      {/* Featured Items */}
      <section className="py-12 md:py-16">
        <div className="container">
          <AnimatedSection animation="fade-up" className="mb-8 text-center">
            <h2 className="font-urdu text-3xl font-semibold text-foreground md:text-4xl">
              مقبول پکوان
            </h2>
            <p className="mt-2 text-muted-foreground">Our most loved dishes</p>
          </AnimatedSection>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredItems.map((item, index) => (
              <AnimatedSection
                key={item.id}
                animation="fade-up"
                delay={index * 100}
              >
                <FoodCard item={item} featured />
              </AnimatedSection>
            ))}
          </div>

          {/* View All CTA */}
          <AnimatedSection
            animation="scale"
            delay={400}
            className="mt-10 text-center"
          >
            <Link
              to="/foods"
              className="zayka-btn-primary inline-flex text-base"
            >
              <span className="font-urdu">پورا مینو دیکھیں</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
