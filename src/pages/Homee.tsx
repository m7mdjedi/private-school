import  React, {  useState } from "react";
import shcoolVid from "../assets/schoolVideo.mp4";
import Video from "../components/Video";
import buildingImg from '../assets/buildingImg.jfif'
import logoImg from "../assets/LogoShoolImg.png";
import student1 from '../assets/student5-removebg-preview.png' 
import student2 from '../assets/student2-removebg-preview.png'
import student3 from '../assets/student4-removebg-preview.png'
import classes from "../styles/home.module.css";
import { useObserver } from "../hooks/useObserver";
import Lottie from "lottie-react";
import worldMapAnimation from "../assets/worldMap.json";


const Home = () => {
  const [visible, setVisible] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const ref = React.useRef<HTMLInputElement>(null)
  const ref1 = React.useRef<HTMLInputElement>(null)
  const ref2 = React.useRef<HTMLInputElement>(null) 
  const ref3=React.useRef<HTMLInputElement>(null)  
  const isVisible3 = useObserver(ref3); 
  const isVisible2 = useObserver(ref2);
  const isVisible1 = useObserver(ref1); 
  const isVisible = useObserver(ref) || visible;
  if (isVisible && !visible) {
    setVisible(true);
  }
  if (isVisible3 && !visible3) {
    setVisible3(true);
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
        <div ref={ref2} dir="rtl" className={classes.home_about_school_text}>
          <h1 className={`${isVisible2 ? classes.show : ""}`}>عن المدرسة</h1>
          <p>
            نفخر بكوننا أول مدرسة افتراضية مرخصة لتقديم المناهج العربية السورية
            عن بعد
          </p>
          <p>
            نقوم بتدريس المنهاج السوري بفرعيه العلمي والأدبي وجميع المراحل
            الدراسية المختلفة.
          </p>
          <p>
            في مدرستنا نعتمد السبر الالكتروني للطلبة الذين لم يتمكنوا من اكمال
            المراحل الدراسية السابقة ، و كما نوفر أساليب تعليمية حديثة تواكب
            التطور التقني الذي يشهده العالم.
          </p>
        </div>
        <div className={classes.home_about_school_img}>
          {/* <Video video={logoVid} width="100%" height="100%"/> */}
          <img src={buildingImg} />
        </div>
      </div>
      <div  ref={ref3} className={classes.home_about_registeration}>
        <div className={`${classes.home_about_registeration_section} ${isVisible3?classes.move_left:''}`}>
        <div>  <p>نبذة عنا </p></div>
         <div> <p> المدرسين </p></div>
         <div> <p>التسجيل</p></div>
        </div>
        <div className={`${classes.home_about_registeration_section} ${isVisible3?classes.move_right:''}`}>
         <div> <p> رسالة المدرسة</p></div>
        <div>  <p> المراحل الدراسيّة</p></div>
        </div>
      </div>
      <div className={classes.home_gallery}> 
       
              <div> 
                <p> 
                  <span>33</span> 
                  <span>طلابنا في 33 دولة</span>
                </p> 
                <img src={student1} alt="picture of our students" />
              </div>

   
              <div> 
                <p> 
                  <span>7000</span> 
                  <span>عدد طلابنا حول العالم </span>
                </p> 
                <img src={student2} alt="picture of our students" />
              </div>
     
 
              <div> 
                <p> 
                  <span>#1</span> 
                  <span>أول مدرسة سورية افتراضية </span>
                </p> 
                <img src={student3} alt="picture of our students" />
              </div>
     
      </div> 

    </div>
  );
};

export default Home;
