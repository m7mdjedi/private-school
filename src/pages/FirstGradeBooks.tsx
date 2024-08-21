import image from "../assets/LogoShoolImg.png";
import classes from "../styles/firstGradeBooks.module.css";
import bosPic from "../assets/bossAvata.jfif";
import menPic from "../assets/menAvatar.jfif";
import womenPic from "../assets/womenImage.jpg";
import file from "../assets/files/MohammedAljedi_Cv_bilignual.pdf";
const firstGradeBooksAr= [  
  {
    id: 1,
    name: "اللغة العربية",
    image: menPic,
    src: file,
  },
  {
    id: 2,
    name: "اللغة الإنجليزية",
    image: womenPic,
    src: file,
  },
  {
    id: 3,
    name: "اللغة الفرنسية",
    image: bosPic,
    src: file,
  },
  {
    id: 4,
    name: "الرياضيات",
    image: menPic,
    src: file,
  },
  {
    id: 5,
    name: "علم الأحياء ",
    image: womenPic,
    src: file,
  },
  {
    id: 6,
    name: "الجغرافيا ",
    image: bosPic,
    src: file,
  },
  {
    id: 7,
    name: "التربية الجسدية ",
    image: menPic,
    src: file,
  },
  {
    id: 8,
    name: "التربية الفنية ",
    image: womenPic,
    src: file,
  },
  {
    id: 9,
    name: "التربية الإسلامية ",
    image: bosPic,
    src: file,
  },
  {
    id: 10,
    name: "التربية الاجتماعية ",
    image: menPic,
    src: file,
  },
  {
    id: 11,
    name: "التربية الدينية ",
    image: womenPic,
    src: file,
  },
];

const FirstGradeBooks = () => {
  return ( <div className={classes.firstGradeBooks}>
      <div>
        <img src={image} />
        <div></div>
        <div>
          <h2> الصف الأول الابتدائي </h2>
          <p>
            نحن نختار الأفضل من بين المدرسين والإداريين لتعليم أطفالكم وضمان
            الجودة
          </p>
        </div>
      </div>

      <div>
        {firstGradeBooksAr.map((ele) => ( 
           <div>
            <a href={ele.src} download={ele.name} target='_blank'>
              <div>
                <h3>تحميل</h3>
                <img src={ele.image} />
              </div>
              <div>
                <h2>{ele.name}</h2>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FirstGradeBooks;
