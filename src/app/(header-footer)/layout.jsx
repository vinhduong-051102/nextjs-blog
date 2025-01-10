import Header from "@/app/(header-footer)/components/Header";
import Footer from "@/app/(header-footer)/components/Footer";
import Body from "@/app/(header-footer)/components/Body";

export default function Layout({ children }) {
  return (
    <div className="h-screen w-screen overflow-x-hidden">
      <Header />
      <Body>{children}</Body>
      <Footer />
    </div>
  );
}
