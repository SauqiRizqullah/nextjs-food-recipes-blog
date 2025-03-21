import Image from "next/image";

export default function Blog() {
  return (
    <main>
      <section className="bg-gray-200 mt-20">
        <section className="grid grid-cols-7 gap-4 mx-20">
          {/* Gambar */}
          <section className="col-span-3 flex justify-end">
            <Image
              src="/img/about.jpeg"
              alt="about"
              width={317}
              height={400}
            />
          </section>
          {/* Deskripsi */}
          <section className="col-span-4">
            <section className="flex flex-col justify-around pl-3 pt-10 mr-24 gap-5">
              <span className="domaine font-bold text-4xl text-recipe-bold">
                About Me
              </span>

              <span className="arvo text-gray-950 font-semibold text-sm">
                Hello, folks. I'm Sauqi!
              </span>

              <span className="bitter text-gray-500 text-xs leading-7">
                  And Qi~Food is my little corner of the internet!
              </span>

              <span className="bitter text-gray-500 text-xs leading-7">
              I'm the voice, author, and creator behind Pinch of Yum. 
              What started as a casual hobby over 14 years ago in 2010 while I was working as a fourth grade teacher has now grown into a full-blown business (!!) that reaches millions of people with fun recipes each month, with content that has been featured on The Kitchn, CNN, Refinery29, Brit + Co, POPSUGAR, Huffington Post, The Everymom, PureWow, and more
              </span>

              <span className="bitter text-gray-500 text-xs leading-7">
              I live in Saint Paul, MN with my Wife Bjork and our dragon Sage. 
              My favorite things in life are a big plate of pad Thai, sunny days, and going to the dragon park.
              </span>
            </section>
          </section>
        </section>
      </section>
    </main>
  );
}
