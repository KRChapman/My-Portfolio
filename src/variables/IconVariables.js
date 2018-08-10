import { faLeaf, faDatabase } from '@fortawesome/free-solid-svg-icons';
import {
  faJsSquare,
  faNode,
  faPython,
  faReact,
  faSass,

} from "@fortawesome/free-brands-svg-icons";

const size = "15px";

export const icons = {
  node: {
    title: "Node", icon: faNode, color: "black", size: "19px"
  },
  mongoDB: {
    title: "MongoDb", icon: faLeaf, color: "green", size
  },
  javaScript: {
    title: "javaScript",
    icon: faJsSquare,
    color: "#cdcd21",
    size
  },
  python: {
    title: "Python",
    icon: faPython,
    color: "blue",
    size
  },
  react: {
    title: "React",
    icon: faReact,
    color: "#00d8ff",
    size: "19px"
  },

  gql: {
    title: "google app engine gql/sql",
    icon: faDatabase,

  },
  sass: {
    title: "Sass",
    icon: faSass,
  }

}

