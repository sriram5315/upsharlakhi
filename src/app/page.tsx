import { ImagesSliderDemo } from "@/components/HeroSection";
import { FocusCards } from "@/components/ui/focus-cards";
import { Section } from "@/components/ui/section";
import { Carousel } from "@/components/ui/sliderCarousal";
import Image from 'next/image';

interface Card {
  title: string;
  src: string;
}

interface EcaContent {
  heading: string;
  subHeading: string;
  cards: Card[];
}

export default function HomePage() {
  const ecaContent: EcaContent = {
    heading: "Extra Curricular Activites Beyond Academics",
    subHeading: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, aperiam.",
    cards: [
      {
        title: "Forest Adventure",
        src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "Valley of life",
        src: "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "Sala behta hi jayega",
        src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      }
    ],
  };

  const missionVissionContent = {
    heading: "School Divisions",
    subHeading: "Nurturing Young Minds, Building Strong Foundations",
    cards: [
      {
        title: "Forest Adventure",
        src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "Valley of life",
        src: "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "Behta hi jayega",
        src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "Behta hi jayega",
        src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],    
  }

  return (
    <main className="page-top-p">
      <ImagesSliderDemo />
      <SchoolDivisions content={missionVissionContent} />
      <EcaSection content={ecaContent} />
    </main>
  );
}

function EcaSection({ content }: { content: EcaContent }) {
  return (
    <Section
      className="text-gray-900 dark:text-white"
      heading={content.heading}
      subHeading={content.subHeading}
    >
      <FocusCards cards={content.cards} />
    </Section>
  );
}

function SchoolDivisions({ content }: { content: EcaContent }) {
  const divisions = content.cards.map((division) => (
    <div 
      key={division.title} 
      className="relative group w-[280px] h-[400px] rounded-2xl overflow-hidden 
                 bg-card dark:bg-card shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-[250px] w-full">
        <Image
          src={division.src}
          alt={division.title}
          fill
          className="object-cover"
          sizes="(max-width: 300px) 100vw"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-card-foreground mb-2">
          {division.title}
        </h3>
        <p className="text-sm text-card-foreground">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, voluptas?</p>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"/>
      </div>
    </div>
  ));

  return (
    <Section
      className="text-foreground"
      heading={content.heading}
      subHeading={content.subHeading}
    >
      <Carousel items={divisions} isButtonVisible={true}/>
    </Section>
  );
}
