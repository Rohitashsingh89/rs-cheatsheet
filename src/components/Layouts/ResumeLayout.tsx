import ResumeHeader from "@/app/(client-components)/(Header)/ResumeHeader";
import ClientCommons from "@/app/ClientCommons";

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ClientCommons />
      <ResumeHeader />
      {children}
    </>
  );
}
