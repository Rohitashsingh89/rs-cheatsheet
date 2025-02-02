import { useState } from "react";
import { ProfileForm } from "@/components/ResumeForm/ProfileForm";
import { WorkExperiencesForm } from "@/components/ResumeForm/WorkExperiencesForm";
import { EducationsForm } from "@/components/ResumeForm/EducationsForm";
import { ProjectsForm } from "@/components/ResumeForm/ProjectsForm";
import { SkillsForm } from "@/components/ResumeForm/SkillsForm";
import { ThemeForm } from "@/components/ResumeForm/ThemeForm";
import { cx } from "@/lib/cx";

// Mapping forms to their components
const formTypeToComponent: { [key: string]: () => JSX.Element } = {
  profile: ProfileForm,
  workExperiences: WorkExperiencesForm,
  educations: EducationsForm,
  projects: ProjectsForm,
  skills: SkillsForm,
  theme: ThemeForm,
};

const forms = [
  { id: "profile", label: "Profile" },
  { id: "workExperiences", label: "Work Experiences" },
  { id: "educations", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "theme", label: "Theme" },
];

export const ResumeForm = () => {
  const [expandedForms, setExpandedForms] = useState<{
    [key: string]: boolean;
  }>(
    forms.reduce((acc, form) => ({ ...acc, [form.id]: false }), {}) // Default: all expanded
  );

  const toggleForm = (formId: string) => {
    setExpandedForms((prev) => ({ ...prev, [formId]: !prev[formId] }));
  };

  return (
    <div className="flex flex-col border border-stroke dark:border-strokedark">
      <p
        className={cx(
          "flex justify-center items-center w-full p-2 text-lg font-semibold"
        )}
      >
        Resume Details
      </p>
      {forms.map((form) => {
        const FormComponent = formTypeToComponent[form.id];
        const isExpanded = expandedForms[form.id];
        return (
          <div
            key={form.id}
            className="border-none border-stroke dark:border-strokedark"
          >
            {/* Header */}
            <button
              onClick={() => toggleForm(form.id)}
              className={cx(
                "flex justify-between items-center w-full p-2 text-lg font-semibold bg-white dark:bg-neutral-800 border border-stroke dark:border-strokedark px-6 pt-2 transition-opacity duration-200 undefined",
                isExpanded ? "bg-white" : "bg-ten"
              )}
            >
              {form.label}
              <span className="text-xs">{isExpanded ? "▲" : "▼"}</span>
            </button>

            {/* Content */}
            {isExpanded && (
              <div className="">
                <FormComponent />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

// "use client";
// import { useState } from "react";
// import {
//   useAppSelector,
//   useSaveStateToLocalStorageOnChange,
//   useSetInitialStore,
// } from "@/lib/redux/hooks";
// import { ShowForm, selectFormsOrder } from "@/lib/redux/settingsSlice";
// import { ProfileForm } from "@/components/ResumeForm/ProfileForm";
// import { WorkExperiencesForm } from "@/components/ResumeForm/WorkExperiencesForm";
// import { EducationsForm } from "@/components/ResumeForm/EducationsForm";
// import { ProjectsForm } from "@/components/ResumeForm/ProjectsForm";
// import { SkillsForm } from "@/components/ResumeForm/SkillsForm";
// import { ThemeForm } from "@/components/ResumeForm/ThemeForm";
// import { CustomForm } from "@/components/ResumeForm/CustomForm";
// import { FlexboxSpacer } from "@/components/FlexboxSpacer";
// import { cx } from "@/lib/cx";

// const formTypeToComponent: { [type in ShowForm]: () => JSX.Element } = {
//   workExperiences: WorkExperiencesForm,
//   educations: EducationsForm,
//   projects: ProjectsForm,
//   skills: SkillsForm,
//   custom: CustomForm,
// };

// export const ResumeForm = () => {
//   useSetInitialStore();
//   useSaveStateToLocalStorageOnChange();

//   const formsOrder = useAppSelector(selectFormsOrder);
//   const [isHover, setIsHover] = useState(false);

//   return (
//     <div
//       className={cx(
//         "flex justify-center scrollbar scrollbar-track-gray-100 scrollbar-w-3 md:h-[calc(100vh-var(--top-nav-bar-height))] md:justify-end md:overflow-y-scroll pt-6",
//         isHover && "scrollbar-thumb-gray-200"
//       )}
//       onMouseOver={() => setIsHover(true)}
//       onMouseLeave={() => setIsHover(false)}
//     >
//       <section className="flex max-w-2xl flex-col gap-8 p-[var(--resume-padding)]">
//         <ProfileForm />
//         {formsOrder.map((form) => {
//           const Component = formTypeToComponent[form];
//           return <Component key={form} />;
//         })}
//         <ThemeForm />
//         <br />
//       </section>
//       <FlexboxSpacer maxWidth={50} className="hidden md:block" />
//     </div>
//   );
// };
