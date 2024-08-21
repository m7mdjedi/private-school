import React, {  useState } from "react";
import shcoolVid from "../assets/فيديو عن تصميم المدرسة.mp4";
import Video from "../components/Video";
import logoImg from "../assets/logoImg.png";
import classes from "../styles/home.module.css";
import { useObserver } from "../hooks/useObserver";
import Lottie from "lottie-react";
import worldMapAnimation from "../assets/worldMap.json";

const Home = () => {
  const [visible, setVisible] = useState(false);
  const ref = React.useRef<HTMLInputElement>(null)
  const ref1 = React.useRef<HTMLInputElement>(null)
  const isVisible1 = useObserver(ref1);
  const isVisible = useObserver(ref) || visible;
  if (isVisible && !visible) {
    setVisible(true);
  }
  return (
    <div>
      <Video video={shcoolVid} width="100%" height="100%" />
      <div className={classes.homeAboutUs}>
        <div ref={ref} dir="rtl" className={classes.homeAboutUsTextDiv}>
          <h1 className={`${isVisible ? classes.show : ""}`}>
            نبذة عن المدرسة السوريّة الذكيّة{" "}
          </h1>
          <p>
            تعتبر المدرسة السورية الذكية من أولى المدارس في سوريا التي تطبق منهج
            التعلم الذكي، حيث تُعنى بتعليم الطلاب من خلال استخدام التقنيات
            الحديثة وتقديم محتوى تعليمي متكامل ومتطور، وتر كيز الطلاب على
            التفكير الناقد والابتكار
          </p>
        </div>
        <div className={classes.homeAboutUsImgDiv}>
          {/* <Video video={logoVid} width="100%" height="100%"/> */}
          <img src={logoImg} />
        </div>
      </div>
      <div className={classes.homeLocation}>
        <div ref={ref1} dir="rtl" className={classes.homeLocationTextDiv}>
          <h1 className={`${isVisible1 ? classes.show : ""}`}>
            أكثر من 7000 طالب وطالبة حول العالم{" "}
          </h1>
        </div>
        <div className={classes.homeLocationImgDev}>
          <Lottie
            animationData={worldMapAnimation}
            style={{ width: "100%", height: "300px", margin: 0, padding: 0 }}
          />
        </div>
      </div>
      <div className={classes.home_about_school}>
        <div ref={ref} dir="rtl" className={classes.home_about_school_text}>
          <h1 className={`${isVisible ? classes.show : ""}`}>عن المدرسة</h1>
          <p>
            نفخر بكونناأول مدرسة افتراضية مرخصة لتقديم المناهج العربية السورية
            عن بعد
          </p>
          <p>
            نقوم بتدريس المنهاج السوري بفرعيه العلمي والأدبي وجميع المراحل
            الدراسية المختلفة.
          </p>
          <p>
           في مدرستنا نعتمد السبر الالكتروني للطلبة الذين لم يتمكنوا من اكمال المراحل الدراسية السابقة ، و كما نوفر أساليب تعليمية حديثة تواكب التطور التقني الذي يشهده العالم. 
          </p>
        </div>
        <div className={classes.homeAboutUsImgDiv}>
          {/* <Video video={logoVid} width="100%" height="100%"/> */}
          <img src={logoImg} />
        </div>
      </div>
    </div>
  );
};

export default Home;
