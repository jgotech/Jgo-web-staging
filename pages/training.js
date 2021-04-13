import React, { Component, useState, useEffect, useRef } from "react";
import Header from "../component/header";
import Navbar from "../component/navbar1";
import Footer from "../component/footer";
import Componentdidmount from "../component/componentdidmount";
import Link from "next/link";
import Mobilenav from "../component/mobilenav";
import NextNprogress from "nextjs-progressbar";


export default function training() {
  return (
    <>
      <Header></Header>
      <Componentdidmount></Componentdidmount>
      <NextNprogress color="#EDC728" />
      <div className="divNavbar">
        <div className="menu-btn">
          <div className="menu-btn__burger"></div>
        </div>
      </div>

     <Mobilenav></Mobilenav>
      <div className="container-fluid">
        <Navbar></Navbar>
      </div>
      <div className="container-fluid h-100 conTraining conHide">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
          
            <div className="row rowTraining">
            <div className="col-lg-12 text-center">
              <div className = "form-inline text-center mx-auto" style = {{width: "max-content", marginBottom: "25px"}}>
                <p className="pTraining">On - The</p> <img src = "Image/logo.png" className = "img-fluid imgLogoTraining"></img><p className="pTraining">Rider Training</p>
              </div>
            </div>
              <div className="col-lg-5">
                <img
                  src="Image/_DSC0062.png"
                  className="img-fluid imgTraining"
                ></img>
              </div>
              <div className="col-lg-7">
                <p className="pHeaderTraining">
                  KAIBIGAN! MALAPIT KA NANG MAGING JGO RIDER.
                </p>
                <p className="pTrainingSub">
                  Salamat sa pag submit ng iyon application.
                </p>
                <p className="pTrainingSub1">
                  Sa JGO gusto nating tayo ay MAAASAHAN ng ating mga customers
                  kaya dapat tayo ay magtulungan sa isa’t isa. Gusto namin na
                  mas guminhawa ang buhay niyo gamit ang JGO. Si JGO Rider ay
                  dapat na:
                </p>
                <p className="pFF">
                  1. Laging nakasuot ng JGO uniform at JGO ID <br /> 2. Magalang
                  at matulungin sa kanyang mga kapwa <br /> 3. Laging naka ngiti{" "}
                  <br />
                  4. Sumusond sa batas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid conHide"
        style={{
          backgroundColor: "#F2F0F0",
          padding: "75px 15px",
          boxShadow: "0 4px 2px -2px gray",
          zIndex: "9",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <p
                className="pTraining"
                style={{ color: "#4C4C4C", marginBottom: "20px" }}
              >
                JGO RIDER TRAINING VIDEO
              </p>

              <div className="container-video">
                <iframe
                  className="responsive-iframe"
                  src="https://www.youtube.com/embed/B-YpIHA3-SQ"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid conHide"
        style={{ backgroundColor: "white", paddingTop: "75px" }}
      >
        <div className="container">
          <div className="row" style={{ marginTop: "40px" }}>
            <div className="col-lg-6">
              <div className="divEasy">
                <img
                  src="Image/jgoridertest.png"
                  className="img-fluid"
                  style={{ width: "250px" }}
                ></img>
              </div>
              <div
                className="divBoxCarousel"
                style={{ padding: "50px 20px" }}
              >
                <p className="pRider text-center">
                  Kapag handa ka na, i click itong link para makapagumpisa ka na
                  sa JGO Rider Test.
                </p>
                <div className="mx-auto text-center">
                  <Link href = "https://docs.google.com/forms/d/e/1FAIpQLSfTtc5NeALFBmCbu4HkKc_iixWwPShe1bdurZ1J4nRZ-d-5HQ/viewform">
                    <a>
                    <button className="btnBegin">BEGIN TEST</button>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <img
                src="Image/girl.png"
                className="img-fluid  mx-auto d-flex"
                style={{ width: "300px" }}
              ></img>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
