import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      {/* Induk  */}
      <section className="flex flex-col items-center pt-8 gap-5 mb-10">
        <section className="bitter text-xl">
          <span>CONTACT</span>
        </section>
        <section className="flex justify-around gap-8">
          <Link href="">
            <Image
              width={20}
              height={20}
              src="/img/youtube.png"
              alt="linkedin"
            />
          </Link>
          <Link href="">
            <Image
              width={20}
              height={20}
              src="/img/tik-tok.png"
              alt="linkedin"
            />
          </Link>
          <Link href="">
            <Image
              width={20}
              height={20}
              src="/img/instagram.png"
              alt="linkedin"
            />
          </Link>
          <Link href="">
            <Image
              width={20}
              height={20}
              src="/img/facebook-app-symbol.png"
              alt="linkedin"
            />
          </Link>
        </section>
      </section>
    </footer>
  );
}
