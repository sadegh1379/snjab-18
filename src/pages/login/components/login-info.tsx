import type { FC } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { LoginInfoContainer } from "../css/login-info.style";

interface ILoginInfoProps {}

const LoginInfo: FC<ILoginInfoProps> = () => {
  const [searchParams] = useSearchParams();
  const singleOrganization = searchParams.get("organization");
  const navigate = useNavigate();

  const serviceItems = [
    {
      title: "گزارش خطا",
      src: "img/login/warning.webp",
      link: `https://app.snjob.ir/login/error_report/${singleOrganization}`,
    },
    {
      title: "عوامل تهدید کننده",
      src: "img/login/fmea.webp",
      link: `https://app.snjob.ir/login/fmea/${singleOrganization}`,
    },
    {
      title: "رضایت سنجی",
      src: "img/login/rezayat.webp",
      link: `https://app.snjob.ir/login/checklist/${singleOrganization}`,
    },
    {
      title: "فرم های همگانی",
      src: "img/login/public-checklist.webp",
      link: `https://app.snjob.ir/login/public/${singleOrganization}`,
    },
    {
      title: "ارتباط با مشتریان ",
      src: "img/login/crm.webp",
      link: `/crm/public?hospital_id=${singleOrganization}`,
    },
  ];

  const getServiceHandler = (link: string) => {
    if (link.includes("http")) {
      window.location.href = link;
    } else {
      navigate(link);
    }
  };

  return (
    <LoginInfoContainer>
      <div className="swiper_container">
        <img className="app_logo" src="/img/login/logo.webp" alt="" />
        <p className="title">سامانه نوین جامع اطلاعات بیمارستان</p>
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          className="swiper_component"
          autoplay={{
            delay: 3000,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
        >
          <SwiperSlide className="swiper_slide" key={1}>
            <div className="slide_1">
              <p className="caption">ارتباط با مشتریان (CRM)</p>
              <p className="description">
                ماژول نظام انتقادات و پیشنهادات برای رضایت هرچه بیشتر بیماران و
                رعایت حقوق مشتریان شما به صورت یکپارچه طراحی و پیاده سازی شده
                است
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper_slide" key={2}>
            <div className="slide_1">
              <p className="caption">فرم و چک لیست های همگانی</p>
              <p className="description">
                بسته به نیاز بیمارستان ممکن است در بعضی از سنجه ها و استاندارد
                ها نیاز به حفظ محرمانگی تکمیل کننده فرم و یا چک لیست باشد که در
                این ماژول سنجاب هر فرمی که نیاز دارید را همگانی کنید.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper_slide" key={2}>
            <div className="slide_1">
              <p className="caption">فــرم گـزارش خطـای پزشکـی</p>
              <p className="description">
                خطـای پزشکـی و مـوارد 28 گانـه از مهمتـرین مبـاحث ایمنـی مراکـز
                درمانـی بـه حسـاب می آیـد. به نحـوی کـه کنتـرل آن می توانـد باعث
                کاهش مرگ میـر بیمـاران گردد.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper_slide" key={2}>
            <div className="slide_1">
              <p className="caption">گـزارش عـوامـل تهـدیـد کننـده ایمنـی</p>
              <p className="description">
                همانطـور که می دانیـد جهت کنتـرل عوامـل تهدیـد کننـده ایمنـی
                بیماران الـزام است کـه اقدامـات پیشگیـرانه بـه عمـل آیـد بـه
                همیـن خاطـر بـا حفظ محـرمانگـی می توانیـد ایـن عوامـل را بـه کمک
                سنجـاب شناسـایـی کنیـد.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper_slide" key={2}>
            <div className="slide_1">
              <p className="caption">رضایت سنجـی بیماران</p>
              <p className="description">
                نکته قابل توجه برای تمام مراکز درمانی این است که نیاز دارند تا
                قدم به قدم و همواره برای تحقق رضایت بیماران امر رضایت بیمار را
                مورد ارزیابی قرار دهند.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper_slide" key={2}>
            <div className="slide_1">
              <p className="caption">نظـام پیشنهـادات کارکنان</p>
              <p className="description">
                بر اسـاس نظـام پيشنهـادات كليـه كاركنـان از عاليتـرين رده
                سـازمانـی تا پاييـن تريـن سطـح آن می‌تواننـد پيشنهـادات،
                ايده‌هـا، ابتكـارات و نظرات خود را برای رفـع نارسايـی‌هـای
                موجـود در روند كاری و يا بهبود روش هـای انجـام كـار و... ارائـه
                دهنـد.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {singleOrganization && (
        <div className="single_organization_services_container">
          {serviceItems.map((service, index) => (
            <div
              onClick={() => getServiceHandler(service.link)}
              className="service"
              key={`service-${index}`}
            >
              <img className="service_image" src={service.src} alt="" />
              <p className="service_text">{service.title}</p>
            </div>
          ))}
        </div>
      )}
    </LoginInfoContainer>
  );
};

export default LoginInfo;
