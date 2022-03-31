import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../footer/Footer";
import MainSection from "../mainsection/MainSection";
import { Navbar } from "../navbar/Navbar";
export default function Profile() {
  let { id } = useParams();

  console.log(id);
  return (
    <>
      <Navbar />
      <MainSection />
      <section>
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-4">
              <div className="card mb-4">
                <div className="card-body text-center">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6.webp"
                    alt="avatar"
                    className="rounded-circle img-fluid"
                  />
                  <h5 className="my-3">Mohamed</h5>
                  <p className="text-muted mb-1">Seller</p>
                  <p className="text-muted mb-4">Shebin El-kom</p>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="card mb-4">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0"> Name</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">Mohamed</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Email</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">mohamed@gmail.com</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Phone</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">+20103847578</p>
                    </div>
                  </div>
                  <hr />

                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Address</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">Shebin El-kom</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
