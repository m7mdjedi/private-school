
import image from "../assets/back7.jfif";
import classes from "../styles/thirdGrade.module.css";
import { Link } from "react-router-dom";

const ThirdGrade = () => {
  return (
    <div className={classes.thirdGrade}>
      <div>
        <img src={image} />
        <div></div>
        <div>
          <h2> المرحلةالثانوية</h2>
          <p>
            نقدم تجربة تعليمية فريدة ومبتكرة للمتعلمين الصفار إئ نلتزم بضمان
            حصول كل طفل على أساس متين في المواد الأساسية مثل الرياضيات وفنون
            اللغة والعلوم والدراسات الاجتماعية
          </p>
        </div>
      </div>
      <div>
        في هذه المرحلة يتم تعليم الطلاب العديد من المواد الأساسية مثل اللغة
        العربية واللغة الإنجليزية والرياضيات والعلوم والتاريخ والجغرافيا
        والتربية الإسلامية أو الدينيّة كما بتم تعليم الطلاب مهارات أخرى مثل
        التفكير النقدي والتواصل والتعاون والإبداع بالإضافة تدريس مواد أخرى مثل
        التربية الفنية والتربية الرياضية يهدف التعليم في المرحلة الابتدائية إلى
        تطوير شخصية الطالب وبناء أساس قوي لتعلمه في المستقبل
      </div>
      <div>
        <h3>  الصفوف الثانوية العلمية </h3>
        <ul>
        <Link to='/tenthGradeBooks' >الصف الأول الثانوي</Link>
          <Link to='/eleventhGradeBooks'>الصف الثاني الثانوي</Link>
          <Link to='/twelfthGradeBooks'>الصف الثالث الثانوي</Link>
        </ul>
      </div>
      <div>
        <h3>  الصفوف الثانوية الأدبية </h3>
        <ul>
          <Link to='/tenthGradeBooks' >الصف الأول الثانوي</Link>
          <Link to='/eleventhGradeBooks'>الصف الثاني الثانوي</Link>
          <Link to='/twelfthGradeBooks'>الصف الثالث الثانوي</Link>
        </ul>
      </div>
    </div>
    
  );
};

export default ThirdGrade;
