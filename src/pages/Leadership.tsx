import image from "../assets/back5.jfif";
import classes from "../styles/leadership.module.css";

import bosPic from "../assets/bossAvata.jfif";
import menPic from "../assets/menAvatar.jfif";
import womenPic from "../assets/womenImage.jpg";

const leadershipAr = [
  {
    id: 1,
    name: "محمد السيد",
    position: "   قسم التوجيه في المدرسة السورية الافتراضية",
    image: menPic,
  },
  {
    id: 2,
    name: "عمر السيد",
    position: " قسم التوجيه في المدرسة السورية الافتراضية ",
    image: menPic,
  },
  {
    id: 3,
    name: "سها الأحمد",
    position: "معلمة في المدرسة السورية السورية الافتراضية ",
    image: womenPic,
  },
  {
    id: 4,
    name: "لما الابراهيم ",
    position: "معلمة في المدرسة السورية الافتراضية",
    image: womenPic,
  },
  {
    id: 5,
    name: "سامي الأحمد",
    position: "معلم في المدرسة السورية الافتراضية",
    image: menPic,
  },
  {
    id: 6,
    name: "وئام كامل ",
    position: "معلم في المدرسة السورية الافتراضية ",
    image: menPic,
  },
];

const Leadership = () => {
  return (
    <div className={classes.leadership}>
      <div>
        <img src={image} />
        <div></div>
        <div>
          <h2> كادرنا </h2>
          <p>
            نحن نختار الأفضل من بين المدرسين والإداريين لتعليم أطفالكم وضمان
            الجودة
          </p>
        </div>
      </div>
      <div>
        <div>
          <img src={bosPic} />
        </div>
        <div>
          <h3>محمد خالد</h3>
          <p>مدير المدرسة السورية الافتراضية</p>
        </div>
      </div>

      <div>
        {leadershipAr.map((ele) => (
          <div>
            <div>
              <img src={ele.image} />
            </div>
            <div>
              <h3>{ele.name}</h3>
              <p>{ele.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leadership;
