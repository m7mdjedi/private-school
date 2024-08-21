import classes from "../styles/news.module.css";
import NewsCard from "../components/NewsCard";

const news_ar = [
  {
    id: 1,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqU_VaSNxwmTBeogpQe_-U-83jbFdbgaC6zA&usqp=CAU",
    title: "أنشطة جديدة ضمن الخطةالدراسية",
    summary: "تهدف المدرسة السورية لتطوير طريقة الأعطاء و التدريس و ذلك من أجل ",
    text: "   تهدف المدرسة السورية لتطوير طريقة الأعطاء و التدريس و ذلك من أجل تحقيق الفائدة المثلى لأحبابنا الطلاب و توفير بيئة ملائمة و مريحة لأعزائنا الطلاب  ",
  },
  {
    id: 2,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBQQRg19GBeMNhsvodF0Ty-pxatWc_43a-UywuzhzA5YO7OA-H3gqmFrlrIzRIgUBILXA&usqp=CAU",
    title: "أنشطة جديدة ضمن الخطةالدراسية",
    summary: "تهدف المدرسة السورية لتطوير طريقة الأعطاء و التدريس و ذلك من أجل ",
    text: "   تهدف المدرسة السورية لتطوير طريقة الأعطاء و التدريس و ذلك من أجل تحقيق الفائدة المثلى لأحبابنا الطلاب و توفير بيئة ملائمة و مريحة لأعزائنا الطلاب  ",
  },
  {
    id: 3,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT82c8H9tkQ4dwnD5Iwd534oNQaQMKkTaKuXA&usqp=CAU",
    title: "أنشطة جديدة ضمن الخطةالدراسية",
    summary: "تهدف المدرسة السورية لتطوير طريقة الأعطاء و التدريس و ذلك من أجل ",
    text: "   تهدف المدرسة السورية لتطوير طريقة الأعطاء و التدريس و ذلك من أجل تحقيق الفائدة المثلى لأحبابنا الطلاب و توفير بيئة ملائمة و مريحة لأعزائنا الطلاب  ",
  },
  {
    id: 4,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqU_VaSNxwmTBeogpQe_-U-83jbFdbgaC6zA&usqp=CAU",
    title: "أنشطة جديدة ضمن الخطةالدراسية",
    summary: "تهدف المدرسة السورية لتطوير طريقة الأعطاء و التدريس و ذلك من أجل ",
    text: "   تهدف المدرسة السورية لتطوير طريقة الأعطاء و التدريس و ذلك من أجل تحقيق الفائدة المثلى لأحبابنا الطلاب و توفير بيئة ملائمة و مريحة لأعزائنا الطلاب  ",
  },
  {
    id: 5,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBQQRg19GBeMNhsvodF0Ty-pxatWc_43a-UywuzhzA5YO7OA-H3gqmFrlrIzRIgUBILXA&usqp=CAU",
    title: "أنشطة جديدة ضمن الخطةالدراسية",
    summary: "تهدف المدرسة السورية لتطوير طريقة الأعطاء و التدريس و ذلك من أجل ",
    text: "   تهدف المدرسة السورية لتطوير طريقة الأعطاء و التدريس و ذلك من أجل تحقيق الفائدة المثلى لأحبابنا الطلاب و توفير بيئة ملائمة و مريحة لأعزائنا الطلاب  ",
  },
];  
const News = () => {
  return (
    <div className={classes.news_container}>
      <h2>أخبارنا </h2>
      <div>
        {news_ar.map((news) => (
          <NewsCard
            key={news.id}
            id={news.id}
            image={news.image}
            title={news.title}
            summary={news.summary}
            text={news.text}
          ></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default News;
