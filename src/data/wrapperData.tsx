import { footerLogo, headerLogo } from "@/assets";

export const header = {
  logo: headerLogo,
  href: "/",
  navItems: [
    {
      id: 1,
      label: "Home",
      href: "/",
    },
    {
      id: 2,
      label: "Courses",
      href: "/courses",
      subNav: [
        {
          id: 21,
          label: "courses1",
          href: "/courses1",
        },
        {
          id: 22,
          label: "courses2",
          href: "#",
        },
        {
          id: 23,
          label: "courses3",
          href: "#",
        },
      ],
    },
    {
      id: 3,
      label: "Blogs",
      href: "/blogs",
      subNav: [],
    },
    {
      id: 4,
      label: "News",
      href: "/news",
      subNav: [],
    },
    {
      id: 5,
      label: "Contact",
      href: "/contact-us",
      subNav: [],
    },
  ],
};
export const footer = {
  logo: footerLogo,
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, \\n sed do eiusmod tempor incididunt",
  contactDetails: {
    contactNo: "+1 (999) 888-77-66",
    email: "info@TalentKaksha.com",
    location:
      "#1701, B Tower, World \\nTrade Tower, Sector - 16, \\nNoida, U.P - 201301",
  },
  socials: {
    facebook: "https://www.facebook.com/TalentKaksha",
    twitter: "https://twitter.com/TalentKaksha",
    instagram: "https://www.instagram.com/TalentKaksha/",
    linkedin: "https://www.linkedin.com/school/TalentKaksha/",
    youtube: "https://www.youtube.com/c/TalentKaksha",
  },
  copyrightText: "Copyrights © 2024 TalentKaksha. All rights reserved.",
  list1: {
    title: "Products",
    links: [
      {
        id: 1,
        label: "Feature",
        href: "/",
      },
      {
        id: 2,
        label: "Pricing",
        href: "/pricing",
      },
      {
        id: 3,
        label: "Case Studies",
        href: "/case-studies",
      },
      {
        id: 4,
        label: "Reviews",
        href: "/reviews",
      },
      {
        id: 5,
        label: "Updates",
        href: "/updates",
      },
    ],
  },
  list2: {
    title: "Company",
    links: [
      {
        id: 1,
        label: "About",
        href: "/about",
      },
      {
        id: 2,
        label: "Contact us",
        href: "/contact-us",
      },
      {
        id: 3,
        label: "Careers",
        href: "/careers",
      },

      {
        id: 4,
        label: "Culture",
        href: "/culture",
      },
      {
        id: 5,
        label: "Blog",
        href: "/blog",
      },
    ],
  },
  list3: {
    title: "Support",
    links: [
      {
        id: 1,
        label: "Getting started",
        href: "/getting-started",
      },
      {
        id: 2,
        label: "Help center",
        href: "/help-center",
      },
      {
        id: 3,
        label: "Server status",
        href: "/server-status",
      },
      {
        id: 4,
        label: "Report a bug",
        href: "/report-a-bug",
      },
      {
        id: 5,
        label: "Chat support",
        href: "/chat-support",
      },
    ],
  },
  list4: {
    title: "Downloads",
    links: [
      {
        id: 1,
        label: "iOS",
        href: "/",
      },
      {
        id: 2,
        label: "Android",
        href: "/",
      },
      {
        id: 3,
        label: "Mac",
        href: "/",
      },
      {
        id: 4,
        label: "Window",
        href: "/",
      },
      {
        id: 5,
        label: "Chrome",
        href: "/",
      },
    ],
  },
  newLetter: {
    title: "Subscribe to our newsletter",
    description: "Subscribe to our newsletter to get latest news and updates.",
  },
};

export const faqs = [
  {
    id: 1,
    question: "When was the University Established?",
    answer:
      "The Indian Institute of Technology, Madras was established in 1961. The institute was founded by the erstwhile Prime Minister, Shri. Venkatesh Iyengar.",
  },
  {
    id: 2,
    question: "Is the University a Private or Government University",
    answer:
      "The Indian Institute of Technology, Madras is a private university. The institute is governed by the Government of India. The institute has a status of Government.",
  },
  {
    id: 3,
    question: "What is the University Affiliation?",
    answer:
      "The Indian Institute of Technology, Madras is affiliated to the University of Madras. The institute is governed by the Government of India. The institute has a status of Government.",
  },
  {
    id: 4,
    question: "How good is the University",
    answer:
      "The Indian Institute of Technology, Madras is a private university. The institute is governed by the Government of India. The institute has a status of Government.",
  },
  {
    id: 5,
    question: "What courses does the University Offer?",
    answer:
      "The Indian Institute of Technology, Madras is a private university. The institute is governed by the Government of India. The institute has a status of Government.",
  },
];
