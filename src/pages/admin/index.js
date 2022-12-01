import React from "react";

import css from "../../styles/Admin.module.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer"

import movie from "../../assets/admin/movie_image.png"
import Cardlocation from "../../Components/Card_location/Card_location"
import Image from "next/image";

function Admin() {
  return (
    <>
    <Navbar/>
      <div className={`container-fluid ${css.background_color}`}>
        <div className={css.bungkus}>
          <div className='row'>
            {/* content left */}
            <div className='col-lg-8 col-md-12 col-sm-12'>
              <p className={css.title_content}>Movie Descriptions</p>
              <div className={css.container_left}>
                {/* image movie */}
               <div className={css.content_create_movie}>
                  <div className={css.border_movie}>
                    <Image src={movie} alt="Movie" width={150} height={250} />
                  </div>
                  {/* inputan movie */}
                  <div className={css.input_detail}>
                    <div className={css.movie}>
                      <p>Movie Name</p>
                      <input type="text" name="" id="" placeholder="Input title movie" />
                    </div>
                    <div className={css.category_content}>
                      <div  className={css.category}>
                      <p>Category</p>
                      <select name="" id="" >
                        <option value="" selected></option>
                        <option value="">Action</option>
                        <option value="">Adventure</option>
                        <option value="">Sci-Fi</option>
                        <option value="">Horror</option>
                      </select>
                      </div>
                      <div className={css.category_1}>
                      <p>Age</p>
                      <select name="" id="" >
                        <option value="" selected></option>
                        <option value="">2+</option>
                        <option value="">6+</option>
                        <option value="">13+</option>
                        <option value="">17+</option>
                        <option value="">21+</option>
                      </select>
                      </div>
                    </div>
                    {/* realeased */}
                    <div className={css.box_released}>
                      <div className={css.realease}>
                        <p>Release</p>
                        <input type="date" name="" id="" />
                      </div>
                      <div className={css.duration}>
                        <p>Duration</p>
                        <div className={css.number_duration}>
                          <input type="number" name="" id="" />
                          <input type="number" name="" id="" />
                        </div>
                      </div>
                    </div>
                  </div>
               </div>

                  <div className="">
                    <div className={css.director_cast}>
                      <div className={css.director}>
                        <p>Director</p>
                        <input type="text" />
                      </div>
                      <div className={css.cast}>
                        <p>Casts</p>
                        <input type="text" />
                      </div>
                    </div>
                  </div>

                  <div className={css.synopsis}>
                    <p>Synopsis</p>
                    <textarea name="" id="" rows="3"></textarea>
                  </div>
              </div>
            </div>

            {/* content right */}
            <div className='col-lg-4 col-md-12 col-sm-12'>
              <div className="d-flex flex-column">
                <div className="">
                  <p className={css.title_content}>Premiere Location</p>
                  <div className={css.content_right}>
                    {/* location */}
                    <div className={css.location}>
                        <select name="" id="">
                          <option value="" selected>Location</option>
                          <option value="">Purwokerto</option>
                          <option value="">Jakarta</option>
                          <option value="">Bandung</option>
                          <option value="">Semarang</option>
                        </select>
                    </div>
                    {/* card bioskop */}
                    <div className="">
                      <div className="d-flex flex-row flex-wrap justify-content-center gap-4 my-5">
                      <Cardlocation />
                      <Cardlocation />
                      <Cardlocation />
                      <Cardlocation />
                      <Cardlocation />
                      <Cardlocation />
                      <Cardlocation />
                      <Cardlocation />
                      <Cardlocation />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                <p className={css.title_content}>Premiere Location</p>
                  <div className={css.content_right}>
                    {/* location */}
                    <div className={css.location}>
                        <select name="" id="">
                          <option value="" selected>Location</option>
                          <option value="">Purwokerto</option>
                          <option value="">Jakarta</option>
                          <option value="">Bandung</option>
                          <option value="">Semarang</option>
                        </select>
                    </div>
                    {/* card bioskop */}
                    <div className="">
                      
                    </div>
                  </div>
                  <div className="">

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <Footer />
    </>
  );
}

export default Admin;
