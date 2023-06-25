import axios from "axios";
import { useEffect } from "react";
import useApi from "../../hooks/useApi";
import { useDispatch, useSelector } from "react-redux";
import { setCategories } from "../../redux/categorySlice";
import { Link } from "react-router-dom";

export default function MainPage() {
  const api = useApi();
  const dispatch = useDispatch();
  const categoryState = useSelector((state) => state.categoryState);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="page-content">
              <div className="main-banner">
                <div className="row">
                  <div className="col-lg-7">
                    <div className="header-text">
                      <h6>Main Page</h6>
                      <h4>
                        <em>test</em> test
                      </h4>
                      <div className="main-button">
                        <a href="browse.html">Browse Now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="most-popular">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="heading-section">
                      <h4>
                        <em>Categories</em>
                      </h4>
                    </div>
                    <div className="row">
                      {categoryState.categories.map((item) => (
                        <div className="col-lg-3 col-sm-6" key={item.id}>
                          <div className="item">
                            <Link to={"category/" + item.slug}>
                              <img src={item.image} alt="" />
                              <h4>{item.name}</h4>
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="gaming-library">
                <div className="col-lg-12">
                  <div className="heading-section">
                    <h4>
                      <em>Your Gaming</em> Library
                    </h4>
                  </div>
                  <div className="item">
                    <ul>
                      <li>
                        <img
                          src="assets/images/game-01.jpg"
                          alt=""
                          className="templatemo-item"
                        />
                      </li>
                      <li>
                        <h4>Dota 2</h4>
                        <span>Sandbox</span>
                      </li>
                      <li>
                        <h4>Date Added</h4>
                        <span>24/08/2036</span>
                      </li>
                      <li>
                        <h4>Hours Played</h4>
                        <span>634 H 22 Mins</span>
                      </li>
                      <li>
                        <h4>Currently</h4>
                        <span>Downloaded</span>
                      </li>
                      <li>
                        <div className="main-border-button border-no-active">
                          <a href="#">Donwloaded</a>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <ul>
                      <li>
                        <img
                          src="assets/images/game-02.jpg"
                          alt=""
                          className="templatemo-item"
                        />
                      </li>
                      <li>
                        <h4>Fortnite</h4>
                        <span>Sandbox</span>
                      </li>
                      <li>
                        <h4>Date Added</h4>
                        <span>22/06/2036</span>
                      </li>
                      <li>
                        <h4>Hours Played</h4>
                        <span>740 H 52 Mins</span>
                      </li>
                      <li>
                        <h4>Currently</h4>
                        <span>Downloaded</span>
                      </li>
                      <li>
                        <div className="main-border-button">
                          <a href="#">Donwload</a>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="item last-item">
                    <ul>
                      <li>
                        <img
                          src="assets/images/game-03.jpg"
                          alt=""
                          className="templatemo-item"
                        />
                      </li>
                      <li>
                        <h4>CS-GO</h4>
                        <span>Sandbox</span>
                      </li>
                      <li>
                        <h4>Date Added</h4>
                        <span>21/04/2036</span>
                      </li>
                      <li>
                        <h4>Hours Played</h4>
                        <span>892 H 14 Mins</span>
                      </li>
                      <li>
                        <h4>Currently</h4>
                        <span>Downloaded</span>
                      </li>
                      <li>
                        <div className="main-border-button border-no-active">
                          <a href="#">Donwloaded</a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="main-button">
                    <a href="profile.html">View Your Library</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
