import { User } from "./types";

export const USER: User = {
  profile: {
    first_name: "Gavin",
    middle_name: "Edwin",
    last_name: "D'mello",
    job_title: "Full Stack Web Developer, Hybrid Mobile App Developer",
    age: 26,
    email: "gavindmello1997@gmail.com",
    phone_country_code: "+1",
    phone: "7745261065",
    address: "61 Parker St., New Bedford, MA - 02740, USA",
    social_links: {
      github: "https://github.com/GavinDmello97",
      linkedIn: "https://www.linkedin.com/in/gd97",
      facebook: "https://www.facebook.com/gdmello579",
      twitter: "https://twitter.com/d_mello_gavin",
      stack_overflow: "https://stackoverflow.com/users/15767562/gavin-dmello",
    },
    display_picture: "https://i.ibb.co/Lkg40HT/profile-pic.jpg",
  },
  about: `I am a Software Developer able to build scalable Full Stack Web Application 
          and Hybrid Mobile Application for business, e-commerce, e-learning, medical and non-profilt. Utilizing my proficiency in JavaScript and Java, 
          I have designed a number of applications, packages and plugin from ground up - 
          from concepts, planning, developing layouts & components, navigation and programming 
          to UI/UX and SEO. Skilled at writing well-designed testable and effecient code using 
          the best practices in Product Development. Fast learner, hard worker and team player 
          who is proficient in an array of scripting languages and multimedia Web tools.`,
  resume: {
    bio: "Skilled at writing well-designed testable and effecient code using the best practices in Product Development.",
    education: [
      {
        university_name: "University of Massachusetts, Dartmouth",
        start_year: "2021",
        end_year: "2023",
        degree: "Masters degree",
        specialization: "Computer Science",
        subjects: [
          "Web Development",
          "Algorithms and Complexities",
          "Software System Design",
          "User Interface Design",
        ],
        gpa: "4.0",
      },
      {
        university_name: "University of Mumbai",
        start_year: "2015",
        end_year: "2019",
        degree: "Bachelors degree",
        specialization: "Computer Science and Engineering",
        subjects: [
          "Data Structures",
          "Analysis of Algorithms",
          "Distributed Database",
          "Mobile Development",
          "Software Engineering",
        ],
      },
    ],
    employment: [
      {
        position_title:
          "Graduate Mentor for Courseworks - Paradigmatic Software and Data Visualization",
        company_name: "University of Massachusetts, Dartmouth",
        start_month: "Sep",
        start_year: "2022",
        end_month: "Dec",
        end_year: "2022",
        job_description: "",
        tech_stack: [
          "D3.js",
          "Maps.js",
          "JavaScript",
          "Python/PY notebook",
          "CSS3",
          "Graphs & Maps",
          "Code Testing & Evaluation",
        ],
      },
      {
        position_title:
          "Graduate Mentor for Courseworks - Models of Computation and Data Visualization",
        company_name: "University of Massachusetts, Dartmouth",
        start_month: "Feb",
        start_year: "2022",
        end_month: "May",
        end_year: "2022",
        job_description: "",
        tech_stack: [
          "D3.js",
          "Shell Scripting",
          "JavaScript",
          "HTML5",
          "CSS3",
          "GitHub",
        ],
      },
      {
        position_title: "Mobile Engineer",
        company_name: "GetSetUp",
        start_month: "Mar",
        start_year: "2021",
        end_month: "Aug",
        end_year: "2021",
        job_description: "",
        tech_stack: [
          "React",
          "SCSS",
          "MongoDB",
          "GraphQL",
          "React-Native",
          "GitHub",
          "Node.js",
          "AWS SNS",
          "TypeScript",
          "JavaScript",
          "Express.js",
        ],
      },
      {
        position_title: "Software Development Engineer",
        company_name: "Zaya Learning Labs",
        start_month: "Jul",
        start_year: "2019",
        end_month: "Feb",
        end_year: "2021",
        job_description: "",
        tech_stack: [
          "JavaScript",
          "SQL",
          "CSS",
          "Java",
          "React",
          "React Native",
          "GitHub",
          "AWS",
          "Flutter",
          "Native Scripts",
          "G-suite",
          "JIRA",
        ],
      },
    ],
    skills: [
      { skill_name: "HTML", percentage: 100 },
      { skill_name: "CSS", percentage: 70 },
      { skill_name: "JavaScript", percentage: 70 },
      { skill_name: "TypeScript", percentage: 70 },
      { skill_name: "React", percentage: 70 },
      { skill_name: "NodeJS", percentage: 40 },
      { skill_name: "SQLite", percentage: 40 },
      { skill_name: "NoSQL", percentage: 70 },
      { skill_name: "MongoDB", percentage: 70 },
      { skill_name: "GitHub", percentage: 100 },
      { skill_name: "Code Testing & Evaluation", percentage: 70 },
      { skill_name: "CI/CD automation", percentage: 40 },
    ],
  },
  projects: [
    {
      project_name: "My Portfolio",
      project_description:
        "An animated portfolio template to showcase your skills/projects/blogs/talent/others and improve your chances of getting noticed well before other candidates when you apply, next.",
      banner_picture: require(`../assets/images/delete_later/myportfolio.jpeg`),
      tech_stack: [
        "React.js",
        "SASS",
        "GitHub",
        "Motion-Animations",
        "TypeScript",
      ],
      code_link: "https://github.com/GavinDmello97/my-portfolio",
      project_link: "github.io/my-portfolio/",
    },

    {
      project_name: "Blogica",
      project_description:
        "Blogica is a mobile-responsive web application, that acts as a platform where you can interact with and read articles published by article writers. Explore thousands of articles based on Culture and Civilization, Defence and Security, Science and Technology, Stories, Essays and other similar categories today.",
      banner_picture: require(`../assets/images/delete_later/blogica.png`),

      tech_stack: [
        "React.js",
        "SASS",
        "GitHub",
        "Express.js",
        "TypeScript",
        "NoSQL Database",
        "Heroku",
        "Mongo Atlas",
        "Cloud Messaging",
      ],
      code_link:
        "https://github.com/GavinDmello97/Masters_project/implementation",
      project_link: "github.io/blocica/",
    },
  ],
  blogs: null,
};
