import ResumeHeader from "@/app/(client-components)/(Header)/ResumeHeader";
import ClientCommons from "@/app/ClientCommons";
import FooterNav from "../FooterNav";
import UserHeader from "@/app/(client-components)/(Header)/UserHeader";

export default function UserDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ClientCommons />
      <UserHeader />
      {children}
      <FooterNav />
    </>
  );
}
