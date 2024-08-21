
import image from "../assets/back3.jfif";
import classes from "../styles/acadimics.module.css";
import { Link } from "react-router-dom";

const Acadimics = () => {
  return (
    <div className={classes.acadimics}>
      <div>
        <img src={image} />
        <div></div>
        <div>
          <h2> المرحلة الابتدائية</h2>
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
            <h3> الصفوف الابتدائية </h3>
            <ul> 
               <Link to="/firstGradeBooks"><li>الصف الأول</li></Link> 
               <Link to="/secondGradeBooks"><li>الصف الثاني</li></Link>
               <Link to="/thirdGradeBooks"><li>الصف الثالث</li></Link>
               <Link to="/fourthGradeBooks"><li>الصف الرابع</li></Link>
               <Link to="/fifthGradeBooks"><li>الصف الخامس</li></Link> 
               <Link to='/sixthGradeBooks' > الصف السادس</Link>

            </ul>
      </div>
    </div>
  );
};

export default Acadimics;
