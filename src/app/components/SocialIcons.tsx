import Image from "next/image";

export default function SocialMediaIcons() {
  return (
    <>
      <li>
        <a href="https://www.linkedin.com/in/julien-lucas-jl/" target="_blank">
          <Image
            src="/linkedin.svg"
            alt="Développeur front-end React / Node freelance / Formateur clean architecture"
            width={15}
            height={15}
            priority
            draggable="false"
          />
        </a>
      </li>
      <li>
        <a href="https://youtube.com/c/julienlucas" target="_blank">
          <Image
            src="/instagram.svg"
            alt="Développeur front-end React / Node freelance / Formateur clean architecture"
            width={15}
            height={15}
            priority
            draggable="false"
          />
        </a>
      </li>
      <li>
        <a href="https://youtube.com/c/julienlucas" target="_blank">
          <Image
            src="/linkedin.svg"
            alt="Développeur front-end React / Node freelance / Formateur clean architecture"
            width={15}
            height={15}
            priority
            draggable="false"
          />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/julienlucasjl" target="_blank">
          <Image
            className=""
            src="/twitter.svg"
            alt="Développeur front-end React / Node freelance / Formateur clean architecture"
            width={15}
            height={15}
            priority
            draggable="false"
          />
        </a>
      </li>
    </>
  );
}