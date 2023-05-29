import service1 from "../source/images/service1.svg";
import service2 from "../source/images/service2.svg";
import service3 from "../source/images/service3.svg";
import person from "../source/images/person.jpg";

export const nav = [
  {
    path: "",
    name: "Home",
    icon: "home_app_logo",
  },
  {
    path: "/posts",
    name: "Posts",
    icon: "topic",
  },
  {
    path: "/about",
    name: "About",
    icon: "perm_contact_calendar",
  },
];

export const services = [
  {
    path: "/services",
    title: "Communications",
    desc: "Support team with rich experience will bring you surprise and delight.\
      You will be drawn to the group vs the comfort of self-expression.",
    image: service1,
  },
  {
    path: "/services",
    title: "Inspired Design",
    desc: "Endless inspiration comes from the team that brings the most \
      positive energy to and spreads to everyone around.",
    image: service2,
  },
  {
    path: "/services",
    title: "Happy Customers",
    desc: "With the product being launched to give users the most satisfaction, \
      conquering almost all fastidious customers",
    image: service3,
  },
];

export const about = {
  image: person,
  content: `
    <h2 class="text-xl font-semibold flex items-center gap-2">Hi everyone!
    <span class="material-symbols-outlined">waving_hand</span>
    </h2>
    Allow me to introduce myself. My name is Thanh, and I was born in the beautiful province of Nam Dinh.
    Currently, I am living and working in the bustling city of Ho Chi Minh City. 
    I am delighted to have this opportunity to connect with all of you and share a little bit about myself.
    <br />
    From a young age, I have always been curious about the world and eager to learn from every experience. 
    I believe that meeting and communicating with people from different backgrounds is one of the most effective ways to broaden my horizons and gain valuable insights.
    <br />
    Living in Ho Chi Minh City has provided me with a vibrant and diverse environment, full of opportunities to connect with individuals from all walks of life.
    Each encounter I have had so far has enriched my understanding of the world and opened my mind to new perspectives.
    <br />
    Professionally, I have been fortunate to work in a field that aligns with my passion for continuous learning and personal growth. 
    Through my career, I have come to appreciate the importance of collaboration and effective communication in achieving success.
    I firmly believe that by engaging with others, sharing knowledge, and learning from their experiences, we can create positive change and make meaningful contributions to our respective fields.
    <br />
    Thank you for taking the time to get to know me, and I eagerly await the opportunity to get to know each of you as well. <br />
    Best regards,<br /> 
    <i>Dinh Van Thanh</i>
    `,
  socials: [
    {
      name: "Github",
      icon: "",
      link: "https://github.com/conalVN",
    },
    {
      name: "Linkedln",
      icon: "",
      link: "https://www.linkedin.com/in/conalvn/",
    },
    {
      name: "Facbook",
      icon: "",
      link: "https://www.facebook.com/conalvn/",
    },
    {
      name: "Instagram",
      icon: "",
      link: "https://www.instagram.com/conalvn_/",
    },
  ],
  email: "develooper2022@gmail.com",
  phone: "+84 919244172",
};

export const menu = [
  {
    path: "",
    name: "Manager",
    icon: "home",
  },
  {
    path: "create",
    name: "Create Post",
    icon: "edit_document",
  },
];

export const filterPost = [
  {
    value: 0,
    name: "Mới nhất",
  },
  {
    value: 1,
    name: "Cũ nhất",
  },
];
