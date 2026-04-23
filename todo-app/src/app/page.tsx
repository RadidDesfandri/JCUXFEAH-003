import Filter from "@/components/filter";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Input from "@/components/input";
import List from "@/components/list";

export default function Home() {
  return (
    <div className="bg-white dark:bg-[#171823] h-screen">
      <div className="relative">
        <img
          src="/banner.jpg"
          alt="Banner"
          className="w-full object-top md:object-center object-cover h-48 md:h-full"
        />

        <form className="absolute left-1/2 -translate-x-1/2 transform top-14 md:top-16 px-5 w-full max-w-2xl">
          <Header />
          <Input />
          <List />
          <Filter />
          <Footer />
        </form>
      </div>
    </div>
  );
}
