import { NavBar } from "../Navbar";
import { Footer } from "../Footer";

export function Layout({ children }) {
  return (
    <main className="flex flex-col w-screen">
      <section className="w-full bg-[#F4F4F5]">
        <NavBar />
        <section className="px-5 py-5 text-[#434C50] overflow-y-scroll rounded-sm mx-7 my-2">
          {children}
        </section>
        <Footer />
      </section>
    </main>
  );
}
