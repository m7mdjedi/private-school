import image from "../assets/back4.jfif";
import classes from "../styles/secondGrade.module.css";
import { Link } from "react-router-dom";

const SecondGrade = () => {
  return (
    <div className={classes.secondGrade}>
      <div>
        <img src={image} />
        <div></div>
        <div>
          <h2> المرحلة الإعداديّة</h2>
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
            <h3> الصفوف الاعدادية </h3>
            <ul> 
                <Link to='/seventhGradeBooks'>الصف السابع</Link>
                <Link to='/eighthGradeBooks'>الصف الثامن</Link>
                <Link to='/ninethGradeBooks'>الصف التاسع</Link>

            

            </ul>
      </div>
    </div>
  );
};

export default SecondGrade;
