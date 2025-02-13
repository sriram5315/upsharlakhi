import { ImagesSliderDemo } from "@/components/HeroSection";
import { FocusCards } from "@/components/ui/focus-cards";
import { Section } from "@/components/ui/section";
import { SliderCarousel } from "@/components/ui/sliderCarousal";
import Image from 'next/image';
import {GridItem} from '@/components/GridItem'
import {NoticeCard} from "@/components/NoticeCard"
import {EnquiryModal} from "@/components/EnquiryModal"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface SectionProps{
  heading: string;
  subHeading: string;
}

interface BasicCard {
  title: string;
  src: string;
  description?: string
}

interface EcaContent extends SectionProps {
  cards: BasicCard[];
}

interface SchoolDivisionsContent extends SectionProps {
  cards: BasicCard[]
}

interface MissionVisionContent extends SectionProps {
  misionVisionCards: BasicCard[];
}

interface MessageCard extends BasicCard {
  name: string;
  education: string;
  designation: string
}

interface UpperManMessageContent extends SectionProps{
  messages: MessageCard[]
}
interface NoticeCard extends BasicCard {
  href: string;
}
interface NoticeContent extends SectionProps {
  notices: NoticeCard[];
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
      },
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
      },
    ],
  };

  const schoolDivisionsContent: SchoolDivisionsContent = {
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

  const missionVisionContent: MissionVisionContent = {
    heading: "Mission/Vision",
    subHeading: "Nurturing Young Minds, Building Strong Foundations",
    misionVisionCards: [
      {
        title: "Our Mission",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, aperiam.",
        src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        title: "Our Vision",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, aperiam.",
        src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
    ],
  }

  const upperManMessageContent: UpperManMessageContent = {
    heading: "What our Founders Say",
    subHeading: "Nurturing Young Minds, Building Strong Foundations",
    messages: [
      {
        title: "Our Mission",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, aperiam.",
        src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Lorem Ipsum",
        designation: "Lorem Ipsum, lorem ipsum",
        education: "Master in Architecture"
      },
      {
        title: "Our Vision",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, aperiam.",
        src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Lorem Ipsum",
        designation: "Lorem Ipsum, lorem ipsum",
        education: "Master in Architecture"
      },
    ],
  }

  const noticeContent: NoticeContent = {
    heading: "Notice Content",
    subHeading: "Nurturing Young Minds, Building Strong Foundations",
    notices: [
      {
        title: "Lorem Ipsum  Lorem Hello this is this guy",
        description: "Lorem Ipsum  Lorem Hello this is this guy, Lorem Ipsum  Lorem Hello this is this guy,",
        src: 'https://www.svgrepo.com/show/450458/link.svg',
        href: 'https://www.svgrepo.com/show/450458/link.svg'
      },
      {
        title: "Lorem Ipsum  Lorem Hello",
        description: "Lorem Ipsum  Lorem Hello this is this guy, Lorem Ipsum  Lorem Hello this is this guy,",
        src: 'https://www.svgrepo.com/show/450458/link.svg',
        href: 'https://www.svgrepo.com/show/450458/link.svg'
      },
      {
        title: "Lorem Ipsum  Lorem Hello this is this guy",
        description: "Lorem Ipsum  Lorem Hello this is this guy, Lorem Ipsum  Lorem Hello this is this guy,",
        src: 'https://www.svgrepo.com/show/450458/link.svg',
        href: 'https://www.svgrepo.com/show/450458/link.svg'
      },
      {
        title: "Lorem Ipsum  Lorem Hello this is this guy",
        description: "Lorem Ipsum  Lorem Hello this is this guy, Lorem Ipsum  Lorem Hello this is this guy,",
        src: 'https://www.svgrepo.com/show/450458/link.svg',
        href: 'https://www.svgrepo.com/show/450458/link.svg'
      },
    ]
  };
  
  return (
    <main className="page-top-p relative">
      <ImagesSliderDemo />
      <SchoolDivisions content={schoolDivisionsContent} />
      <MissionVisionSection content={missionVisionContent} />
      <UpperManMessageSection content={upperManMessageContent} />
      <EcaSection content={ecaContent} />
      <NoticeSection content={noticeContent} />
      <EnquiryModal />
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

function SchoolDivisions({ content }: { content: SchoolDivisionsContent }) {
  const divisions = content.cards.map((division, index) => (
    <div 
      key={index} 
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
      <SliderCarousel items={divisions} isButtonVisible={true}/>
    </Section>
  );
}

function MissionVisionSection({ content }: { content: MissionVisionContent }) {
  return (
    <Section
      className="text-gray-900 dark:text-white"
      heading={content.heading}
      subHeading={content.subHeading}
    >
      <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-2 lg:gap-4 xl:max-h-[34rem]">
        {content.misionVisionCards.map((misionVisionCard, index) => (
          <GridItem
            key={index}
            area=""
            title={misionVisionCard.title}
            description={misionVisionCard.description}
          />
        ))}
      </ul>
    </Section>
  );
}

function UpperManMessageSection({ content }: { content: UpperManMessageContent }) {
  return (
    <Section
      className="text-gray-900 dark:text-white"
      heading={content.heading}
      subHeading={content.subHeading}
    >
      <ul className="grid grid-cols-1 grid-rows-none gap-4 sm:gap-8">
        {content.messages.map((message, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row w-full min-h-[200px]"
          >
            {/* Image Section */}
            <div className={`w-full md:w-1/2 relative h-[150px] md:h-[300px] ${index % 2 === 1 ? 'md:order-2' : ''}`}>
              <img
                src={message.src}
                alt={message.name}
                className={`w-full h-full object-cover rounded-t-xl ${index === 1 ? ' md:rounded-r-2xl' : 'md:rounded-l-2xl'}`}
              />
            </div>

            {/* Message Section */}
            <div className={`w-full md:w-1/2 flex items-center justify-center p-6 bg-gray-50 dark:bg-gray-800 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
              <div className="max-w-lg">
                <div className="mb-4">
                  <svg className="w-8 h-8 text-gray-400 dark:text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <blockquote className="text-md md:text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">
                  {message.description}
                </blockquote>
                <div className="sc-text-body font-semibold text-gray-900 dark:text-gray-100">
                  {message.name}
                </div>
                <div className="text-[14px] text-gray-600 dark:text-gray-400">
                  {message.designation}
                </div>
                <div className="text-[14px] text-gray-600 dark:text-gray-400">
                  {message.education}
                </div>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </Section>
  );
}

function NoticeSection({ content }: { content: NoticeContent }) {
  return (
    <Section
      className="text-gray-900 dark:text-white"
      heading={content.heading}
      subHeading={content.subHeading}
    >
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-[80%] md:w-full mx-auto"
        >
          <CarouselContent>
              {content.notices.map((notice, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <NoticeCard
                    key={index}
                    title={notice.title}
                    description={notice.description}
                    src={notice.src}
                    href={notice.href}
                  />
                </CarouselItem>
              ))}
          </CarouselContent>
          <CarouselPrevious className="bg-primary text-white"/>
          <CarouselNext className="bg-primary text-white"/>
        </Carousel>
    </Section>
  );
}