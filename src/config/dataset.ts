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
        degree: "Masters",
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
        degree: "Bachelors",
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
      { skill_name: "JavaScript", percentage: 100 },
      { skill_name: "TypeScript", percentage: 68 },
      { skill_name: "HTML", percentage: 100 },
      { skill_name: "CSS", percentage: 68 },
      { skill_name: "Java", percentage: 68 },
      { skill_name: "React", percentage: 100 },
      { skill_name: "NodeJS", percentage: 68 },
      { skill_name: "SQLite", percentage: 36 },
      { skill_name: "NoSQL", percentage: 68 },
      { skill_name: "MongoDB", percentage: 68 },
      { skill_name: "GitHub", percentage: 100 },
      { skill_name: "Kotlin", percentage: 36 },
      { skill_name: "Flutter", percentage: 36 },
      { skill_name: "AWS", percentage: 36 },

      { skill_name: "Angular", percentage: 5 },

      { skill_name: "Code Testing & Evaluation", percentage: 68 },
      { skill_name: "CI/CD automation", percentage: 36 },
    ],
  },
  projects: [
    {
      project_name: "My Portfolio",
      project_description:
        "An animated portfolio template to showcase your skills/projects/blogs/talent/others and improve your chances of getting noticed well before other candidates when you apply, next.",
      thumbnail: require(`../assets/images/delete_later/myportfolio.png`),
      tech_stack: [
        "React.js",
        "SASS",
        "GitHub",
        "Motion-Animations",
        "TypeScript",
      ],
      code_link: "https://github.com/GavinDmello97/my-portfolio",
      project_link: "https://gavindmello97.github.io/my-portfolio/",
      type: "website",
    },

    {
      project_name: "Blogica",
      project_description:
        "Blogica is a mobile-responsive web application, that acts as a platform where you can interact with and read articles published by article writers. Explore thousands of articles based on Culture and Civilization, Defence and Security, Science and Technology, Stories, Essays and other similar categories today.",
      thumbnail: require(`../assets/images/delete_later/blogica.png`),

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
      code_link: "https://github.com/GavinDmello97/blogica",
      project_link: "https://blogica.netlify.app/",
      type: "website",
    },
    {
      project_name: "Recipe Diary",
      project_description:
        "Recipe Diary is an online recipe registry application where one can share new recipes as well as browse from a large collection of existing recipes added by other users to cook something delicious. Having a craving for food or about to be visited by guest, Recipe Diary is all you need! Happy Cooking!",
      thumbnail: require(`../assets/images/delete_later/recipediary.png`),
      tech_stack: [
        "React.js",
        "SASS",
        "GitHub",
        "Express.js",
        "SQL Database",
        "Animatable JS",
        "Mongo DB + Atlas",
      ],
      code_link: "https://github.com/Build-My-Stack",
      project_link: "https://build-my-stack.github.io/recipe-diary-frontend/",
      type: "website",
    },
    // {
    //   project_name: "Dia Fit",
    //   project_description:
    //     "Dia fit is a mobile platform application for android and ios users to track your diet, use follow along excercises as well as excercise usage of other features such as BMI calculator and Fat Percentage calculator",
    //   thumbnail:
    //     "https://i.pinimg.com/736x/2c/f0/3a/2cf03abcf226439e4608d5081f897675.jpg",

    //   tech_stack: [
    //     "React-Native",
    //     "SASS",
    //     "GitHub",
    //     "Redux",
    //     "Animatable",
    //     "REST APIs",
    //     "Axios",
    //     "CI/CD",
    //   ],
    //   // code_link:
    //   //   "https://github.com/GavinDmello97/Masters_project/implementation",
    //   // project_link: "github.io/blocica/",
    //   type: "mobile",
    // },
  ],
  testimonies: [
    {
      provider_first_name: "Deepak",
      provider_last_name: "Singh",
      provider_position: "Engineering Lead",
      provider_message: `Gavin is undoubtedly an excellent engineer. He was a good team member while we worked closely at Zaya. I particularly appreciated his incredible attention to detail, enduring emphasis on quality, and always attempting a pixel perfect UI be it webapp or mobile app.\nHe is also a great communicator, able to explain topics clearly and concisely, as well as being able to debate his viewpoints calmly and objectively.`,
      provider_company_name: "Zaya Learning Labs",
    },
    {
      provider_first_name: "Pritesh",
      provider_last_name: "Pereira",
      provider_position: "Technical Lead",
      provider_message: `Gavin is someone who is able to effectively learn new programming concepts and technologies and apply them in a practical setting. He has strong foundation in computer science and able to write clean, efficient, and well-documented code. In addition, he's great team player, able to communicate effectively with both technical and non-technical colleagues, and very proactive in seeking out opportunities to learn and improve his skills. I found him very proficient at troubleshooting and debuging code and has exhibited great ability to work independently on assigned tasks.`,
      provider_company_name: "GetSetUp",
    },
    {
      provider_first_name: "Patrick",
      provider_last_name: "Owens",
      provider_position: "Eng Manager",
      provider_message: `Gavin has a number of personal and professional qualities that makes him a great asset to a team and successful in his endeavours. Gavin brings curiosity and initiative to a team and expresses ideas, needs, criticism and progress clearly. Gavin has effectively coached junior developers and convincly pitched ideas to upper management which shows that he has great potential and dedication to work he sets his mind on.`,
      provider_company_name: "GetSetUp",
    },
    {
      provider_first_name: "Amir",
      provider_last_name: "Akhavan",
      provider_position: "Professor",
      provider_message: `Gavin enjoys developing intuitive software application and shows great interest in learning, which I observed by his attentiveness and dedication to the class as well as his curiosity to learn beyond the scope of the course. To add to this, he had good communication skills and contributes effectively to all the team activities related to his coursework. I was also his project mentor for master's project and while mentoring him, I realised that he has a great sense of developing good UI/UX, takes complete ownership of the projects and appreciates feedback and inputs given by me and his application's target audience (a very important skill in the field of software development).`,
      provider_company_name: "Unversity of Massachusetts",
    },
  ],
  blogs: [
    {
      title: "MERN stack for Web Development",
      pubDate: "2022-12-25 13:10:51",
      link: "https://awstip.com/mern-stack-for-web-development-72ff226f45ec?source=rss-4cf25a6bbe58------2",
      guid: "https://medium.com/p/72ff226f45ec",
      author: "GavinDmello",
      thumbnail:
        "https://cdn-images-1.medium.com/max/1024/0*BoZuMV2kfcjiiTDV.png",
      description: `
      <figure><img alt="MERN Stack" src="https://cdn-images-1.medium.com/max/1024/0*BoZuMV2kfcjiiTDV.png"></figure><h3><strong>What is MERN?</strong></h3>
      <p>A MERN stack comprises a collection of four frameworks(MongoDB, ExpressJs, ReactJs and NodeJs) used to develop full-stack javascript solutions for rapid, scalable, and secure applications. Each framework serves a different purpose in creating successful web applications. It is an excellent choice for companies looking to develop high-quality responsive applications quickly using just one language.</p>
      <p><strong>Advantages of using MERN</strong></p>
      <ol>
      <li>Offers high-performance and customized technologies for the development process.</li>
      <li>All frameworks are open-source and have room for designing flexible and scalable applications.</li>
      <li>Coding full-stack applications using just one programming language(JavaScript / TypeScript).</li>
      <li>Ease of learning the frameworks as they follow similar patterns and support quality collaboration.</li>
      <li>High delivery speed and secure code management.</li>
      </ol>
      <h3><strong>Elements of the MERN stack</strong></h3>
      <figure><img alt="" src="https://cdn-images-1.medium.com/max/800/0*7PzQ8odzYp4p1e9r"></figure><ol>
      <li>
      <strong>MongoDB — </strong>It is an open-source document database and a leading NoSQL database. Data is stored in a JSON format called <a href="https://bsonspec.org/">BSON</a>. It is made up of schemas that define the structure of each table in the database. For this stack, the mongoose plugin can be used to build schemas and achieve a secure connection with the backend servers.</li>
      <li>
      <strong>ExpressJS — </strong>It is a minimal flexible web application framework built over NodeJs which is highly used for backend development by developers, who prefer using JavaScript/TypeScript as their primary programming language. ExpressJs is an open-source framework used for building scalable backend services and RESTful APIs, along with interacting with the database services using plugins such as mongoose.</li>
      <li>
      <strong>ReactJs — </strong>This is a frontend framework used for designing the interface, governing the user experience using the <a href="https://www.nngroup.com/articles/">UI/UX guidelines</a>, compiled and tested over decades and handling navigation between screens using the principles of <a href="https://reactnavigation.org/"><em>react-navigation </em></a>and <a href="https://github.com/remix-run/react-router#readme"><em>react-router-dom</em></a>. ReactJs also provides easy integration of npm packages and access to countless components from UI packages such as <a href="https://ant.design/">Ant Design</a>, MUI, React Bootstrap, etc.</li>
      <li>
      <strong>NodeJs — </strong>It is another open-source framework for server development. It is a JavaScript backend environment that enables developers to write backend services as well as design static web interfaces for services such as email verification, reset passwords, etc. NodeJS supports distributed development and has capabilities to support secure interaction over the network.</li>
      </ol>
      <p>Ready to create a new web application? Yes, then refer to the following articles for a step-by-step guide to configure the frameworks on your local machine.</p>
      <ol>
      <li>Configure ReactJs with TypeScript template</li>
      <li>Setting up the backend using NodeJs &amp; ExpressJs</li>
      <li>Setting up the database using Mongoose and MongoDB</li>
      </ol>
      <img src="https://medium.com/_/stat?event=post.clientViewed&amp;referrerSource=full_rss&amp;postId=72ff226f45ec" width="1" height="1" alt=""><hr>
      <p><a href="https://awstip.com/mern-stack-for-web-development-72ff226f45ec">MERN stack for Web Development</a> was originally published in <a href="https://awstip.com/">AWS Tip</a> on Medium, where people are continuing the conversation by highlighting and responding to this story.</p>
      `,
      content: `
      <figure><img alt="MERN Stack" src="https://cdn-images-1.medium.com/max/1024/0*BoZuMV2kfcjiiTDV.png"></figure><h3><strong>What is MERN?</strong></h3>
      <p>A MERN stack comprises a collection of four frameworks(MongoDB, ExpressJs, ReactJs and NodeJs) used to develop full-stack javascript solutions for rapid, scalable, and secure applications. Each framework serves a different purpose in creating successful web applications. It is an excellent choice for companies looking to develop high-quality responsive applications quickly using just one language.</p>
      <p><strong>Advantages of using MERN</strong></p>
      <ol>
      <li>Offers high-performance and customized technologies for the development process.</li>
      <li>All frameworks are open-source and have room for designing flexible and scalable applications.</li>
      <li>Coding full-stack applications using just one programming language(JavaScript / TypeScript).</li>
      <li>Ease of learning the frameworks as they follow similar patterns and support quality collaboration.</li>
      <li>High delivery speed and secure code management.</li>
      </ol>
      <h3><strong>Elements of the MERN stack</strong></h3>
      <figure><img alt="" src="https://cdn-images-1.medium.com/max/800/0*7PzQ8odzYp4p1e9r"></figure><ol>
      <li>
      <strong>MongoDB — </strong>It is an open-source document database and a leading NoSQL database. Data is stored in a JSON format called <a href="https://bsonspec.org/">BSON</a>. It is made up of schemas that define the structure of each table in the database. For this stack, the mongoose plugin can be used to build schemas and achieve a secure connection with the backend servers.</li>
      <li>
      <strong>ExpressJS — </strong>It is a minimal flexible web application framework built over NodeJs which is highly used for backend development by developers, who prefer using JavaScript/TypeScript as their primary programming language. ExpressJs is an open-source framework used for building scalable backend services and RESTful APIs, along with interacting with the database services using plugins such as mongoose.</li>
      <li>
      <strong>ReactJs — </strong>This is a frontend framework used for designing the interface, governing the user experience using the <a href="https://www.nngroup.com/articles/">UI/UX guidelines</a>, compiled and tested over decades and handling navigation between screens using the principles of <a href="https://reactnavigation.org/"><em>react-navigation </em></a>and <a href="https://github.com/remix-run/react-router#readme"><em>react-router-dom</em></a>. ReactJs also provides easy integration of npm packages and access to countless components from UI packages such as <a href="https://ant.design/">Ant Design</a>, MUI, React Bootstrap, etc.</li>
      <li>
      <strong>NodeJs — </strong>It is another open-source framework for server development. It is a JavaScript backend environment that enables developers to write backend services as well as design static web interfaces for services such as email verification, reset passwords, etc. NodeJS supports distributed development and has capabilities to support secure interaction over the network.</li>
      </ol>
      <p>Ready to create a new web application? Yes, then refer to the following articles for a step-by-step guide to configure the frameworks on your local machine.</p>
      <ol>
      <li>Configure ReactJs with TypeScript template</li>
      <li>Setting up the backend using NodeJs &amp; ExpressJs</li>
      <li>Setting up the database using Mongoose and MongoDB</li>
      </ol>
      <img src="https://medium.com/_/stat?event=post.clientViewed&amp;referrerSource=full_rss&amp;postId=72ff226f45ec" width="1" height="1" alt=""><hr>
      <p><a href="https://awstip.com/mern-stack-for-web-development-72ff226f45ec">MERN stack for Web Development</a> was originally published in <a href="https://awstip.com/">AWS Tip</a> on Medium, where people are continuing the conversation by highlighting and responding to this story.</p>
      `,
      categories: [
        "mern-stack",
        "react",
        "serverless",
        "web-development",
        "nodejs",
      ],
    },
  ],
};
