
import classes from '../styles/home.module.css'
import { FaArrowLeft } from 'react-icons/fa6'
import logoImg from '../assets/LogoShoolImg.png'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div>
            <div className={classes.home_registeration}> 
        <h2>التسجيل</h2> 
        <div> 
          <p>الرجاء تعبئة نموذج التسجيل لبدء في عملية التسجيل</p> 
            <Link to='/register/login' > 
            <button>  
          <FaArrowLeft />
            نموذج التسجيل 
          </button> 
            </Link>
          <p>لديك أسئلة او استفسارات ؟ </p>
        </div>
      </div>
      <div className={classes.footer}> 
       <div className={classes.footer_section }> 
       <div className={classes.footer_left}> 
        <div > 
        <h3>روابط هامة </h3> 
        <ul> 
        <li> <Link to="/">الرئيسية</Link> </li>
          <li> <Link to="/register/login">اتصل بنا</Link> </li>
          <li> <Link to="/register/login">تسجيل الدخول</Link> </li>
         
        </ul>
        </div>
        <div > 
        <h3>معلومات </h3> 
        <ul> 
        <li> <Link to="/aboutUs/aboutUsInShort">من نحن</Link> </li>
        <li> <Link to="/leadership">كادرنا </Link> </li>
        <li> <Link to="/aboutUs/news">أخبارنا </Link> </li>
          
        </ul>
        </div>
        <div > 
        <h3>روابط سريعة </h3> 
        <ul> 
       <li> <Link to="/student/acadimics">المرحلة الابتدائيّة </Link> </li>
       <li> <Link to="/student/secondGrade">المرحلة الإعداديّة </Link> </li>
       <li> <Link to="/student/thirdGrade">المرحلة الثانويّة </Link> </li>
        </ul>
        </div>
       </div>
       <div className={classes.footer_right}> 
          <div> 
            <img src={logoImg}/>
            <p>حلب - الشيخ مقصود - شارع الثورة</p>
            <p>+963982993834</p>
          </div>
         </div>
       </div> 
       <div className={classes.footer_section}> 
        <p>Created by Mohammed Aljedi</p>
       </div>
      </div>
    </div>
  )
}

export default Footer
