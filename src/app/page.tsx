import React from "react";
import SectionHero from "@/app/(server-components)/SectionHero";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import { TaxonomyType } from "@/data/types";
import SectionSliderNewCategories from "@/components/SectionSliderNewCategories";
import SectionOurFeatures from "@/components/SectionOurFeatures";
import BackgroundSection from "@/components/BackgroundSection";
import SectionGridFeaturePlaces from "@/components/SectionGridFeaturePlaces";
import SectionHowItWork from "@/components/SectionHowItWork";
import SectionSubscribe2 from "@/components/SectionSubscribe2";
import SectionGridAuthorBox from "@/components/SectionGridAuthorBox";
import SectionGridCategoryBox from "@/components/SectionGridCategoryBox";
import SectionBecomeAnAuthor from "@/components/SectionBecomeAnAuthor";
import SectionVideos from "@/components/SectionVideos";
import SectionClientSay from "@/components/SectionClientSay";
import Resume1 from "@/images/resume/resume-template-01.svg";
import Resume2 from "@/images/resume/resume-template-02.svg";
import Resume3 from "@/images/resume/resume-template-03.svg";
import Resume4 from "@/images/resume/resume-template-04.svg";
import Resume5 from "@/images/resume/resume-template-05.svg";
import Resume6 from "@/images/resume/resume-template-06.svg";
import Resume7 from "@/images/resume/resume-template-07.svg";
import Faq from "@/components/Home/Faq";
import ToolsTab from "@/components/Home/ToolsTab";
import ImpressionMenu from "@/components/Home/ImpressionMenu";
import HomeLayout from "@/components/Layouts/HomeLayout";
import CheatSheets from "./cheatsheet/page";

const DEMO_CATS: TaxonomyType[] = [
  {
    id: "1",
    href: "/",
    name: "Simple",
    taxonomy: "category",
    count: 5,
    thumbnail: Resume1,
  },
  {
    id: "2",
    href: "/",
    name: "Professional",
    taxonomy: "category",
    count: 2,
    thumbnail: Resume2,
  },
  {
    id: "3",
    href: "/",
    name: "Modern",
    taxonomy: "category",
    count: 8,
    thumbnail: Resume3,
  },
  {
    id: "4",
    href: "/",
    name: "Creative",
    taxonomy: "category",
    count: 1,
    thumbnail: Resume4,
  },
  {
    id: "5",
    href: "/",
    name: "Teacher",
    taxonomy: "category",
    count: 3,
    thumbnail: Resume5,
  },
  {
    id: "6",
    href: "/",
    name: "Accountant",
    taxonomy: "category",
    count: 3,
    thumbnail: Resume6,
  },
  {
    id: "7",
    href: "/",
    name: "Nurse",
    taxonomy: "category",
    count: 2,
    thumbnail: Resume7,
  },
];

const DEMO_CATS_2: TaxonomyType[] = [
  {
    id: "1",
    href: "/",
    name: "Senior Developer Templates",
    taxonomy: "category",
    count: 9,
    thumbnail: Resume4,
  },
  {
    id: "2",
    href: "/",
    name: "Teachers Templates",
    taxonomy: "category",
    count: 1,
    thumbnail: Resume3,
  },
  {
    id: "3",
    href: "/",
    name: "Professional Templates",
    taxonomy: "category",
    count: 4,
    thumbnail: Resume2,
  },
  {
    id: "4",
    href: "/",
    name: "Phanthon Template",
    taxonomy: "category",
    count: 7,
    thumbnail: Resume6,
  },
  {
    id: "5",
    href: "/",
    name: "Ghost Template",
    taxonomy: "category",
    count: 2,
    thumbnail: Resume7,
  },
  {
    id: "6",
    href: "/",
    name: "Rich Set Templates",
    taxonomy: "category",
    count: 4,
    thumbnail: Resume5,
  },
  {
    id: "7",
    href: "/",
    name: "Coolest Templates",
    taxonomy: "category",
    count: 5,
    thumbnail: Resume2,
  },
];

function PageHome() {
  return (
    <HomeLayout>
      <main className="nc-PageHome relative overflow-hidden">
        <CheatSheets />
        {/* GLASSMOPHIN */}
        {/* <BgGlassmorphism /> */}

        {/* <div className="bg-[#f7f9fc] dark:bg-neutral-900">
          <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
            <SectionHero className="pt-10 lg:pt-16 lg:pb-16" />
          </div>
        </div>
        <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28"> */}
        {/* SECTION 1 */}
        {/* <SectionSliderNewCategories categories={DEMO_CATS} />

          <SectionOurFeatures /> */}

        {/* <SectionGridFeaturePlaces cardType="card2" /> */}

        {/* <SectionHowItWork />

          <div className="relative py-16">
            <BackgroundSection className="bg-orange-50 dark:bg-black/20" />
            <SectionSliderNewCategories
              categories={DEMO_CATS_2}
              categoryCardType="card4"
              itemPerRow={4}
              heading="Suggestions for discovery"
              subHeading="Popular templates to land best job recommends for you"
              sliderStyle="style2"
            />
          </div> */}

        {/* <SectionSubscribe2 /> */}

        {/* <div className="relative py-16">
          <BackgroundSection className="bg-orange-50 dark:bg-black dark:bg-opacity-20 " />
          <SectionGridAuthorBox />
        </div> */}

        {/* <SectionGridCategoryBox /> */}

        {/* <div className="relative py-16">
            <BackgroundSection />
            <SectionBecomeAnAuthor />
          </div>

          <SectionSliderNewCategories
            heading="Explore by types of resumes"
            subHeading="Explore resumes based on 10 types of templates"
            categoryCardType="card5"
            itemPerRow={5}
          /> */}

        {/* <SectionVideos /> */}

        {/* <div className="relative py-16">
            <BackgroundSection />
            <SectionClientSay />
          </div>
          <div>
            <Faq />
          </div>
          <div>
            <ToolsTab />
          </div>
          <div>
            <ImpressionMenu />
          </div> */}
        {/* </div> */}
      </main>
    </HomeLayout>
  );
}

export default PageHome;
