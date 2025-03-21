import Image from "next/image";
import fs from "fs";
import path from "path";

export default function Home() {

  const filePath = path.join(process.cwd(), "data", "home.json")
  const jsonData = fs.readFileSync(filePath, "utf-8")
  const data = JSON.parse(jsonData)

  return (
    <main>
      <section className="bg-gray-200 mt-20">
        <section className="grid grid-cols-7 gap-4 mx-20">
          {/* Gambar */}
          <section className="col-span-3 flex justify-end">
            <Image
              src="/img/home-food.jpeg"
              alt="home-food"
              width={374}
              height={560}
            />
          </section>
          {/* Deskripsi */}
          <section className="col-span-4">
            <section className="flex flex-col justify-around pl-3 pt-10 mr-24 gap-5">
              <span className="domaine font-bold text-4xl text-recipe-bold">
                {data.greetings}
              </span>

              <span className="arvo text-gray-950 font-semibold text-sm">
                {data.persuade}
              </span>

              <span className="bitter text-gray-500 text-sm">
                {data.firstLine}
              </span>

              <span className="bitter text-gray-500 text-sm">
                {data.secondLine}
              </span>

              <span className="bitter text-gray-500 text-sm">
                {data.thirdLine}
              </span>
            </section>
          </section>
        </section>
      </section>
    </main>
  );
}
