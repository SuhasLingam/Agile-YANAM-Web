import UI1 from './src/assets/1UI.png';
import UI2 from './src/assets/2UI.png';
import UI3 from './src/assets/3UI.png';
import web1 from "./src/assets/web1.png";
import Cart from './src/assets/cart.webp';
import vid1 from "./src/assets/vid1.png"
import vid2 from "./src/assets/vid2.png"
import vid3 from "./src/assets/vid3.png"
import vid4 from "./src/assets/vid4.png"
import vid5 from "./src/assets/vid5.png"
import vid6 from "./src/assets/vid6.png"
import vid7 from "./src/assets/vid7.png"




const ProjectsList = [
  {
    type: 'UI/UX',
    title: 'UI/UX Project',
    redirectLink: ["https://www.behance.net/gallery/177500643/UX-UI-PORTFOILO-PET-CARE"],
    images: UI1,
    description:
      "Elevate your digital presence with our expert UI/UX services! From sleek designs to seamless experiences, we're here to redefine user engagement. Ready to transform your digital journey? Let's craft brilliance together.",
  },
  {
    type: 'UI/UX',
    title: 'UI/UX Project',
    redirectLink: ["https://www.behance.net/gallery/177500937/DASHBOARD-PORTFOILO-SQUARE-CODE"],
    images: UI2,
    description:
      "Elevate your digital presence with our expert UI/UX services! From sleek designs to seamless experiences, we're here to redefine user engagement. Ready to transform your digital journey? Let's craft brilliance together.",
  },
  {
    type: 'UI/UX',
    title: 'UI/UX Project',
    redirectLink: ["https://www.behance.net/gallery/177309263/StreetWare-Website-ui-design"],
    images: UI3,
    description:
      "Elevate your digital presence with our expert UI/UX services! From sleek designs to seamless experiences, we're here to redefine user engagement. Ready to transform your digital journey? Let's craft brilliance together.",
  },
  {
    type: 'Graphic Design',
    title: 'Graphic Design Project Example',
    description:
      "Ignite visual brilliance with our Graphic Design services! From striking logos to eye-catching marketing materials, we craft designs that captivate and resonate. Ready to stand out in the visual landscape? Let's create stunning graphics that leave a lasting impression.",
  },
  {
    type: 'Video Editing',
    title: 'Video Editing Project', 
    images: vid1,
    redirectLink: "https://drive.google.com/file/d/1OEys4IWigttG-NOqbbCzpUkr4Dcx0Ql_/view?usp=drive_link",
    description:
      "Unleash the power of storytelling with our Video Editing services! From captivating visuals to seamless transitions, we transform raw footage into compelling narratives. Ready to make your content stand out? Let's edit greatness into every frame.",
  },
  {
    type: 'Video Editing',
    title: 'Video Editing Project', 
    images: vid2,
    redirectLink: "https://drive.google.com/file/d/13NqFqX75mlTF2_gMQn0vfR9cPzRGabz3/view?usp=drive_link",
    description:
      "Unleash the power of storytelling with our Video Editing services! From captivating visuals to seamless transitions, we transform raw footage into compelling narratives. Ready to make your content stand out? Let's edit greatness into every frame.",
  },
  {
    type: 'Video Editing',
    title: 'Video Editing Project', 
    images: vid3,
    redirectLink: "https://drive.google.com/file/d/1-vge_I3RQs8YG_XagmgWbya6Jk65tKCY/view?usp=drive_link",
    description:
      "Unleash the power of storytelling with our Video Editing services! From captivating visuals to seamless transitions, we transform raw footage into compelling narratives. Ready to make your content stand out? Let's edit greatness into every frame.",
  },
  {
    type: 'Video Editing',
    title: 'Video Editing Project', 
    images: vid4,
    redirectLink: "https://drive.google.com/file/d/1Ur677bDKzXrgRs7LG9nmFMaVmIbMel4w/view?usp=drive_link",
    description:
      "Unleash the power of storytelling with our Video Editing services! From captivating visuals to seamless transitions, we transform raw footage into compelling narratives. Ready to make your content stand out? Let's edit greatness into every frame.",
  },
  {
    type: 'Video Editing',
    title: 'Video Editing Project', 
    images: vid5,
    redirectLink: "https://drive.google.com/file/d/11dyXoPKRQ3pnL4CHPTeQfEljayqfKRxH/view?usp=drive_link",
    description:
      "Unleash the power of storytelling with our Video Editing services! From captivating visuals to seamless transitions, we transform raw footage into compelling narratives. Ready to make your content stand out? Let's edit greatness into every frame.",
  },
  {
    type: 'Video Editing',
    title: 'Video Editing Project', 
    images: vid6,
    redirectLink: "https://drive.google.com/file/d/1-stz1-uODuwZvpBsta4Rb0nGN3xzVYr3/view?usp=drive_link",
    description:
      "Unleash the power of storytelling with our Video Editing services! From captivating visuals to seamless transitions, we transform raw footage into compelling narratives. Ready to make your content stand out? Let's edit greatness into every frame.",
  },
  {
    type: 'Video Editing',
    title: 'Video Editing Project', 
    images: vid7,
    redirectLink: "https://drive.google.com/file/d/1-us9onb1ZmEj0XkWOHeBV8yk5npyBxPR/view?usp=drive_link",
    description:
      "Unleash the power of storytelling with our Video Editing services! From captivating visuals to seamless transitions, we transform raw footage into compelling narratives. Ready to make your content stand out? Let's edit greatness into every frame.",
  },

  {
    type: 'Web Dev',
    title: 'Web Development Project Example',
    images: web1,
    redirectLink: ["https://irsbatch2007.in/"],
    description:
      "Empower your online presence with our Web Development expertise! From responsive sites to dynamic web applications, we engineer digital solutions that seamlessly align with your goals. Ready to bring your ideas to life online? Let's code brilliance together.",
  },
  {
    type: 'App Dev',
    title: 'App Development Project Example',
    description:
      "Elevate your digital presence with our App Development expertise! From sleek interfaces to robust functionality, we engineer mobile apps that redefine user experiences. Ready to turn your app vision into reality? Let's innovate together.",
  },
  {
    type: 'Software Dev',
    title: 'Software Development Project Example',
    description:
      "Embrace efficiency with our Software Development solutions! We create scalable, tailored software that streamlines operations and accelerates growth. Ready to optimize your processes? Let's build powerful software solutions.",
  },
  {
    type: 'Blockchain Dev',
    title: 'Blockchain Development Project Example',
    description:
      "Enter the world of decentralized innovation with our Blockchain Development services! From smart contracts to secure networks, we pioneer blockchain solutions that redefine trust. Ready to explore the possibilities of decentralized technology? Let's build the future together.",
  },
  {
    type: 'AI Chatbot',
    title: 'AI Chatbot Project Example',
    description:
      "Transform customer interactions with our AI Chatbots! From personalized conversations to efficient support, our intelligent bots redefine engagement. Ready to enhance your services? Let's chat about the future of AI.",
  },
  {
    type: 'Smart Contracts',
    title: 'Smart Contracts Project Example',
    description:
      "Enter a new era of secure transactions with our Smart Contracts! From blockchain integration to automated agreements, we streamline processes for efficiency. Ready to elevate your operations? Let's code transparency into your contracts.",
  },
  {
    type: 'Digital Marketing',
    title: 'Digital Marketing Project Example',
    description:
      "Catapult your brand to new heights with our Digital Marketing expertise! From targeted campaigns to data-driven strategies, we amplify your online presence and boost audience engagement. Ready to conquer the digital landscape? Let's market your success together.",
  },
  {
    type: 'Social Media Management',
    title: 'Social Media Management Project Example',
    description:
      "Supercharge your brand's social presence with our Social Media Management services! From engaging content to strategic campaigns, we tailor your online voice for maximum impact. Ready to dominate the social scene? Let's manage your success across platforms.",
  },
  {
    type: 'Accounting & Auditing',
    title: 'Accounting & Auditing Project Example',
    description:
      "Elevate financial clarity with our Accounting & Auditing services! From meticulous bookkeeping to comprehensive audits, we ensure precision and compliance. Ready to navigate your financial journey seamlessly? Let's audit and account for your success together.",
  },
  {
    type: 'Housing & Mapping',
    title: 'Housing & Mapping Project Example',
    description:
      "Navigate the path to your dream home with our Housing & Mapping solutions! From detailed property maps to streamlined housing searches, we guide you through a seamless real estate journey. Ready to map out your future home? Let's chart a course to your ideal living space.",
  },
  {
    type: 'Interior Designing',
    title: 'Interior Designing Project Example',
    description:
      "Transform your space into a masterpiece with our Interior Design expertise! From concept to execution, we craft personalized designs that reflect your style and enhance your living or working environment. Ready to redefine your space? Let's design your world together.",
  },
  {
    type: 'Graphic Design',
    title: 'Graphic Design Project Example',
    description:
      "Ignite visual brilliance with our Graphic Design services! From striking logos to eye-catching marketing materials, we craft designs that captivate and resonate. Ready to stand out in the visual landscape? Let's create stunning graphics that leave a lasting impression.",
  },
  {
    type: 'Web Dev',
    title: 'Coming Soon',
    images: Cart,
    description:
      "Coming Soon",
  },
  {
    type: 'App Dev',
    title: 'App Development Project Example',
    description:
      "Elevate your digital presence with our App Development expertise! From sleek interfaces to robust functionality, we engineer mobile apps that redefine user experiences. Ready to turn your app vision into reality? Let's innovate together.",
  },
  {
    type: 'Software Dev',
    title: 'Software Development Project Example',
    description:
      "Embrace efficiency with our Software Development solutions! We create scalable, tailored software that streamlines operations and accelerates growth. Ready to optimize your processes? Let's build powerful software solutions.",
  },
  {
    type: 'Blockchain Dev',
    title: 'Blockchain Development Project Example',
    description:
      "Enter the world of decentralized innovation with our Blockchain Development services! From smart contracts to secure networks, we pioneer blockchain solutions that redefine trust. Ready to explore the possibilities of decentralized technology? Let's build the future together.",
  },
  {
    type: 'AI Chatbot',
    title: 'AI Chatbot Project Example',
    description:
      "Transform customer interactions with our AI Chatbots! From personalized conversations to efficient support, our intelligent bots redefine engagement. Ready to enhance your services? Let's chat about the future of AI.",
  },
  {
    type: 'Smart Contracts',
    title: 'Smart Contracts Project Example',
    description:
      "Enter a new era of secure transactions with our Smart Contracts! From blockchain integration to automated agreements, we streamline processes for efficiency. Ready to elevate your operations? Let's code transparency into your contracts.",
  },
  {
    type: 'Digital Marketing',
    title: 'Digital Marketing Project Example',
    description:
      "Catapult your brand to new heights with our Digital Marketing expertise! From targeted campaigns to data-driven strategies, we amplify your online presence and boost audience engagement. Ready to conquer the digital landscape? Let's market your success together.",
  },
  {
    type: 'Social Media Management',
    title: 'Social Media Management Project Example',
    description:
      "Supercharge your brand's social presence with our Social Media Management services! From engaging content to strategic campaigns, we tailor your online voice for maximum impact. Ready to dominate the social scene? Let's manage your success across platforms.",
  },
  {
    type: 'Accounting & Auditing',
    title: 'Accounting & Auditing Project Example',
    description:
      "Elevate financial clarity with our Accounting & Auditing services! From meticulous bookkeeping to comprehensive audits, we ensure precision and compliance. Ready to navigate your financial journey seamlessly? Let's audit and account for your success together.",
  },
  {
    type: 'Housing & Mapping',
    title: 'Housing & Mapping Project Example',
    description:
      "Navigate the path to your dream home with our Housing & Mapping solutions! From detailed property maps to streamlined housing searches, we guide you through a seamless real estate journey. Ready to map out your future home? Let's chart a course to your ideal living space.",
  },
  {
    type: 'Interior Designing',
    title: 'Interior Designing Project Example',
    description:
      "Transform your space into a masterpiece with our Interior Design expertise! From concept to execution, we craft personalized designs that reflect your style and enhance your living or working environment. Ready to redefine your space? Let's design your world together.",
  },
];

export default ProjectsList;
