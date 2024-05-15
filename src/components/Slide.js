import {
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiSass,
  SiMongodb,
  SiGit,
} from 'react-icons/si'

const Slide = () => {
  return (
    <div className={`slider__box`}>
      <SiExpress /> Express
      <SiReact /> React
      <SiNodedotjs /> NodeJS
      <SiJavascript /> JavaScript
      <SiMongodb /> MongoDB
      <SiSass /> Sass
      <SiGit /> Git
    </div>
  )
}

export default Slide
