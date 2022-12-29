const colorCodes: Object = {
  default: "#151f2d",
};

const dataObjects = {
  userProfileNavigator: {
    profile: {
      key: "profile",
      icon: "fa fa-id-card-o fa-lg",
      title: "Profile",
      scrollTo: "",
    },
    about: {
      key: "about",
      icon: "fa fa-bullhorn fa-lg",
      title: "About",
      scrollTo: "",
    },

    resume: {
      key: "resume",
      icon: "fa fa-book fa-lg",
      title: "Resume",
      scrollTo: "",
    },
    projects: {
      key: "projects",
      icon: "fa fa-desktop fa-lg",
      title: "Projects",
      scrollTo: "",
    },
    testimonies: {
      key: "testimonies",
      icon: "fa fa-graduation-cap fa-lg",
      title: "Testimonies",
      scrollTo: "",
    },
    blogs: {
      key: "blogs",
      icon: "fa fa-rss-square fa-lg",
      title: "Blogs",
      scrollTo: "",
    },
  },
};

const icons: any = {
  bookmark_selected: require("../assets/icons/bookmark_selected.png"),
  bookmark_hover: require("../assets/icons/bookmark_hover.png"),
  bookmark_unselected: require("../assets/icons/bookmark_unselected.png"),
  search_black: require("../assets/icons/search_black.png"),
  search_white: require("../assets/icons/search_white.png"),
  app_logo: require("../assets/icons/app_logo.png"),
};

const images: any = {
  route_not_found: require("../assets/images/404-error.png"),
  server_down: require("../assets/images/server-down.jpg"),
  profile_pic: require("../assets/images/profile-pic-2.jpeg"),
  banner_poster: require("../assets/images/banner-poster.jpeg"),
  no_internet: require("../assets/images/no_internet.png"),
  food_background: require("../assets/images/food-background-1.jpg"),
};

const gifs: any = {
  notification_bell: require("../assets/gifs/notification-bell.gif"),
};
const svgs: any = {
  wave: require("../assets/svgs/Wave.svg"),
  loading: require("../assets/svgs/loader.svg"),
};

const randomColorGenerator: any = () => {
  const colors = [
    "#2C3639",
    "#395B64",
    "#774360",
    "#B25068",
    "#51557E",
    "#A27B5C",
    "#E7AB79",
    "#A91079",
    "#816797",
    "#C74B50",
    "#570530",
    "#04293A",
    "#064663",
    "#A13333",
    "#864879",
    "#1E5128",
    "#3D2C8D",
    "#B42B51",
    "#334756",
  ];

  return colors[Math.floor(Math.random() * colors.length)];
};

export {
  colorCodes,
  icons,
  randomColorGenerator,
  images,
  gifs,
  svgs,
  dataObjects,
};
