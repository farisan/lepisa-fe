/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import Image from "next/image";
// assets
import styles from "../../../styles/Upcoming.module.css";
// import img_full from "../assets/homepage/image_full.png";

// component
import CardHome from "../../../Components/CardViewAll/index";
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";
import Slider from "react-slick";
import Spinner from "react-bootstrap/Spinner";
import Loader from "../../../Components/Loader/Loader";
// import Slider from "react-slick";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

export default function upcoming() {
  const [showing, setShowing] = useState([]);
   const [upcoming, setUpcoming] = useState([]);
   const [month, setMonth] = useState(1);
   const [image1, setImage1] = useState("");
   const [image2, setImage2] = useState("");
   const [image3, setImage3] = useState("");
   const [linkActive, setLinkActive] = useState("januari");
   const [subscribe, setSubscribe] = useState("");

   
   const Month = {
      // dots: true,
      infinite: true,
      // autoplay: true,
      // autoplaySpeed: 4000,
      speed: 1000,
      slidesToShow: 7,
      slidesToScroll: 7,
      responsive: [
         {
            breakpoint: 1200,
            settings: {
               slidesToShow: 4,
               slidesToScroll: 4,
               infinite: true,
            },
         },
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 3,
               infinite: true,
            },
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2,
               initialSlide: 2,
            },
         },
         {
            breakpoint: 568,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2,
            },
         },
      ],
   };

   // get movie showing
   useEffect(() => {
      axios
         .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/movie`)
         .then((res) => {
            // console.log(res.data.data);
            setShowing(res.data.data);
            setImage1(res.data.data[0].image);
            setImage2(res.data.data[1].image);
            setImage3(res.data.data[2].image);
         })
         .catch((err) => {
            console.log(err);
         });
   }, []);

   useEffect(() => {
      axios
         .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/movie/film/${month}`)
         .then((res) => {
            console.log(res.data.data);
            setUpcoming(res.data.data);
         })
         .catch((err) => {
            console.log(err);
         });
   }, [month]);

   const handleUpcoming = () => {
      axios
         .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/movie/film/${month}`, {})
         .then((res) => {
            console.log(res.data.data);
            setUpcoming(res.data.data);
         })
         .catch((err) => {
            console.log(err);
         });
   };

   const handleSubs = () => {
      axios
         .post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/subscribe/`, {
            email: subscribe,
         })
         .then((res) => {
            console.log(res);
            toast.success("Success Subscribe 😊");
         })
         .catch((err) => toast.error(err.response.data.msg));
   };
   return (
      <>
         <Navbar />
         <main className={`${styles.home_bar} `}>
            
            {/* Upcoming Movies */}
            <section>
               <section className={`${styles.showing_nav}`}>
                  <div>
                     <h2 className={styles.up__title}>Upcoming Movies</h2>
                  </div>
               </section>
               <section className={styles.month__bar}>
                  <Slider {...Month}>
                     <div className={styles.month_content}>
                        <div
                           className={styles.btn_month}
                           onClick={() => {
                              setLinkActive("januari");
                              setMonth(1);
                              handleUpcoming;
                           }}
                           style={{
                              "background-color":
                                 linkActive === "januari" ? "#5F2EEA" : "",
                              color: linkActive === "januari" ? "#fff" : "",
                           }}
                        >
                           January
                        </div>
                     </div>
                     <div className={styles.month_content}>
                        <div
                           className={styles.btn_month}
                           onClick={() => {
                              setLinkActive("februari");
                              setMonth(2);
                              handleUpcoming;
                           }}
                           style={{
                              "background-color":
                                 linkActive === "februari" ? "#5F2EEA" : "",
                              color: linkActive === "februari" ? "#fff" : "",
                           }}
                        >
                           February
                        </div>
                     </div>
                     <div className={styles.month_content}>
                        <div
                           className={styles.btn_month}
                           onClick={() => {
                              setLinkActive("maret");
                              setMonth(3);
                              handleUpcoming;
                           }}
                           style={{
                              "background-color":
                                 linkActive === "maret" ? "#5F2EEA" : "",
                              color: linkActive === "maret" ? "#fff" : "",
                           }}
                        >
                           March
                        </div>
                     </div>
                     <div className={styles.month_content}>
                        <div
                           className={styles.btn_month}
                           onClick={() => {
                              setLinkActive("april");
                              setMonth(4);
                              handleUpcoming;
                           }}
                           style={{
                              "background-color":
                                 linkActive === "april" ? "#5F2EEA" : "",
                              color: linkActive === "april" ? "#fff" : "",
                           }}
                        >
                           April
                        </div>
                     </div>
                     <div className={styles.month_content}>
                        <div
                           className={styles.btn_month}
                           onClick={() => {
                              setLinkActive("mei");
                              setMonth(5);
                              handleUpcoming;
                           }}
                           style={{
                              "background-color":
                                 linkActive === "mei" ? "#5F2EEA" : "",
                              color: linkActive === "mei" ? "#fff" : "",
                           }}
                        >
                           May
                        </div>
                     </div>
                     <div className={styles.month_content}>
                        <div
                           className={styles.btn_month}
                           onClick={() => {
                              setLinkActive("juni");
                              setMonth(6);
                              handleUpcoming;
                           }}
                           style={{
                              "background-color":
                                 linkActive === "juni" ? "#5F2EEA" : "",
                              color: linkActive === "juni" ? "#fff" : "",
                           }}
                        >
                           June
                        </div>
                     </div>
                     <div className={styles.month_content}>
                        <div
                           className={styles.btn_month}
                           onClick={() => {
                              setLinkActive("juli");
                              setMonth(7);
                              handleUpcoming;
                           }}
                           style={{
                              "background-color":
                                 linkActive === "juli" ? "#5F2EEA" : "",
                              color: linkActive === "juli" ? "#fff" : "",
                           }}
                        >
                           July
                        </div>
                     </div>
                     <div className={styles.month_content}>
                        <div
                           className={styles.btn_month}
                           onClick={() => {
                              setLinkActive("agustus");
                              setMonth(8);
                              handleUpcoming;
                           }}
                           style={{
                              "background-color":
                                 linkActive === "agustus" ? "#5F2EEA" : "",
                              color: linkActive === "agustus" ? "#fff" : "",
                           }}
                        >
                           August
                        </div>
                     </div>
                     <div className={styles.month_content}>
                        <div
                           className={styles.btn_month}
                           onClick={() => {
                              setLinkActive("september");
                              setMonth(9);
                              handleUpcoming;
                           }}
                           style={{
                              "background-color":
                                 linkActive === "september" ? "#5F2EEA" : "",
                              color: linkActive === "september" ? "#fff" : "",
                           }}
                        >
                           September
                        </div>
                     </div>
                     <div className={styles.month_content}>
                        <div
                           className={styles.btn_month}
                           onClick={() => {
                              setLinkActive("oktober");
                              setMonth(10);
                              handleUpcoming;
                           }}
                           style={{
                              "background-color":
                                 linkActive === "oktober" ? "#5F2EEA" : "",
                              color: linkActive === "oktober" ? "#fff" : "",
                           }}
                        >
                           October
                        </div>
                     </div>
                     <div className={styles.month_content}>
                        <div
                           className={styles.btn_month}
                           onClick={() => {
                              setLinkActive("november");
                              setMonth(11);
                              handleUpcoming;
                           }}
                           style={{
                              "background-color":
                                 linkActive === "november" ? "#5F2EEA" : "",
                              color: linkActive === "november" ? "#fff" : "",
                           }}
                        >
                           November
                        </div>
                     </div>
                     <div className={styles.month_content}>
                        <div
                           className={styles.btn_month}
                           onClick={() => {
                              setLinkActive("desember");
                              setMonth(12);
                              handleUpcoming;
                           }}
                           style={{
                              "background-color":
                                 linkActive === "desember" ? "#5F2EEA" : "",
                              color: linkActive === "desember" ? "#fff" : "",
                           }}
                        >
                           December
                        </div>
                     </div>
                  </Slider>
               </section>

               {/* card Upcoming */}
               <section className={styles.card__bar}>
                  {upcoming.length === 0 ? (
                     <h1 className="d-flex justify-content-center align-items-center text-center">
                        No Upcoming Movies.
                     </h1>
                  ) : (
                     < >
                        {upcoming.length > 0 && upcoming ? (
                           upcoming.map((movie) => (
                              <CardHome
                                 variant="d-none"
                                 key={movie.id}
                                 image={movie.image}
                                 tittle={movie.tittle}
                                 category={movie.name}
                                 id={movie.id}
                              />
                           ))
                        ) : (
                           <Loader />
                        )}
                     </>
                  )}
               </section>
            </section>
         </main>
         <Footer />
         <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            closeOnClick={true}
            pauseOnHover={true}
            draggable={true}
            theme="light"
         />
      </>
   );
}