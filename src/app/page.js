import Image from "next/image";

export default function Home() {
  return (
  <main>
    <section className="grid grid-cols-6 bg-gray-200 mt-20">
      {/* Gambar */}
      <section className="col-span-2 flex justify-items-end">
        <Image src="/img/home-food.jpeg" alt="home-food" width={374} height={560}/>
      </section>
      {/* Deskripsi */}
      <section className="col-span-4">
        <section className="flex flex-col justify-around pt-10 mr-48 gap-5">
        
        <span className="domaine font-bold text-5xl text-recipe-bold">
           
            Welcome to QI~FOOD
        
        </span>
        
        <span className="arvo text-gray-950 font-semibold">
          Let's Talk Food
        
        </span>
        
        <span className="bitter text-gray-500">
        
          Well, we hope that’s why you’re here. Our recipes are designed for real, actual, every day life, and we try to focus on real foods and healthy recipes
          (which honestly means a lot of different things to us, including the perfect chocolate chip cookie and cheese on cheese on cheese, because health is all about balance, right?).
        
        </span>
        
        <span className="bitter text-gray-500">
        This is the place to find those recipes — everything from our most popular, to meal prep, to Instant Pot recipes, or if you just, like, have some sad greens in your fridge to use up and you need some inspiration.
        
        </span>
        
        <span className="bitter text-gray-500">
        You’re here! Have fun. We hope you find something (many things) you love.
        
        </span>
        </section>
        
      </section>
    </section>
  </main>
  )
}
