import { useTranslation } from "react-i18next";
import classes from "../styles/navBar.module.css";
import { IoMdArrowDropdown } from "react-icons/io";
import logoImg from "../assets/logo.png";
import { useState } from "react";


import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const [dropMenuOpen, setDropMenuOpen] = useState(false);


  const { t } = useTranslation();
  //i18n.changeLanguage("ar");

  const dropIconClickHandler = () => {
    setDropMenuOpen(!dropMenuOpen);
  };
  return (
    <div className={classes.nav}>
      <Link to="/">
        <img src={logoImg} />
      </Link>
      <div onClick={dropIconClickHandler} className={classes.navDropIcon}>
        <span
          className={`${
            dropMenuOpen
              ? classes.navDropIconSpanOpenFirst
              : classes.navDropIconSpan
          }`}
        ></span>
        <span
          className={`${
            dropMenuOpen
              ? classes.navDropIconSpanOpenSecond
              : classes.navDropIconSpan
          }`}
        ></span>
        <span
          className={`${
            dropMenuOpen
              ? classes.navDropIconSpanOpenThird
              : classes.navDropIconSpan
          }`}
        ></span>
        <ul
          className={`${
            dropMenuOpen ? classes.navDropListOpen : classes.navDropListClose
          } `}
        >
          <li>
            <Link className={classes.navDropListItem} to="/">
              {t("الرئيسيّة")}
            </Link>
          </li>
          <li>
            <Link to="/aboutUs" className={classes.navDropListItem}>
              حولنا{" "}
            </Link>
          </li>
          <li>
            <Link to="/leadership" className={classes.navDropListItem}>
              {t("كوادرنا")}
            </Link>
          </li>

          <li>
            <Link to="/acceptingAndHelping" className={classes.navDropListItem}>
              التسجيل والقبول{" "}
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/news" className={classes.navDropListItem}>
              أخبارنا{" "}
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/acadimics" className={classes.navDropListItem}>
              المرحلة الابتدائيّة{" "}
            </Link>
          </li>
          <li>
            <Link to="/secondGrade" className={classes.navDropListItem}>
              المرحلة الإعدادية{" "}
            </Link>
          </li>
          <li>
            <Link to="/thirdGrade" className={classes.navDropListItem}>
              المرحلة الثانويّة{" "}
            </Link>
          </li>
          {/* <li className={classes.navDropListItem}>{t("English")}</li> */}
        </ul>
      </div>
      <ul className={classes.navList}>
        <li>
          <NavLink to="/" className={({isActive})=>(isActive ? `${classes.navListItemActive} ${classes.navListItem}` : classes.navListItem)}>
            {t("الرئيسيّة")}
          </NavLink>
        </li> 

        <NavLink to='/aboutUs' className={({isActive})=>(isActive ? `${classes.navListItemListActive} ${classes.navListItemList}` : classes.navListItemList)} >
          {t("حولنا")} <IoMdArrowDropdown size="1.5em" />
          <ul>
            <li>
              <NavLink to="/aboutUs/aboutUsInShort" className={({isActive})=>(isActive ? `${classes.navListItemActive} ${classes.navListItem}` : classes.navListItem)}>
                {t("نبذة عنا")}
              </NavLink>
            </li>
            <li>
              <NavLink to="/aboutUs/news" className={({isActive})=>(isActive ? `${classes.navListItemActive} ${classes.navListItem}` : classes.navListItem)}>
                {t("أخبارنا")}
              </NavLink>
            </li>
          </ul>
        </NavLink>
        <li><NavLink to='/leadership' className={({isActive})=>(isActive ? `${classes.navListItemActive} ${classes.navListItem}` : classes.navListItem)}>{t("كادرنا")}</NavLink></li>
          <li>        <NavLink to='acceptingAndHelping' className={({isActive})=>(isActive ? `${classes.navListItemActive} ${classes.navListItem}` : classes.navListItem)}>
          {t("القبول والتسجيل")}

       
        </NavLink></li>
        <NavLink to='/student' className={({isActive})=>(isActive ? `${classes.navListItemListActive} ${classes.navListItemList}` : classes.navListItemList)}>
          {t("منصة الطالب")}
          <IoMdArrowDropdown size="1.5em" />
          <ul>
            <li>
              <NavLink className={({isActive})=>(isActive ? `${classes.navListItemActive} ${classes.navListItem}` : classes.navListItem)} to='/student/acadimics'> المرحلة الابتدائية</NavLink>
            </li>
            <li>
              <NavLink className={({isActive})=>(isActive ? `${classes.navListItemActive} ${classes.navListItem}` : classes.navListItem)} to='/student/secondGrade'>المرحلة الإعدادية</NavLink>
            </li>
            <li>
              <NavLink className={({isActive})=>(isActive ? `${classes.navListItemActive} ${classes.navListItem}` : classes.navListItem)} to='/student/thirdGrade'>المرحلة الثانوية </NavLink>
            </li>
          </ul>
        </NavLink>
        {/* <li className={classes.navListItem}>{t("English")}</li> */}
      </ul>
    </div>
  );
};

export default NavBar;
