import React from 'react';
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";

//==============================================================

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Button from "./components/CustomButtons/Button";
import GridContainer from "./components/Grid/GridContainer";
import HeaderLinks from "./components/Header/HeaderLinks";
import NavPills from "./components/NavPills/NavPills";
import Parallax from "./components/Parallax/Parallax";

//==============================================================

import profile from "./components/img/faces/osama.jpg";
import studio1 from "./components/img/examples/studio-1.jpg";
import studio2 from "./components/img/examples/studio-2.jpg";
import studio3 from "./components/img/examples/studio-3.jpg";
import studio4 from "./components/img/examples/studio-4.jpg";
import studio5 from "./components/img/examples/studio-5.jpg";
import work1 from "./components/img/examples/olu-eletu.jpg";
import work2 from "./components/img/examples/clem-onojeghuo.jpg";
import work3 from "./components/img/examples/cynthia-del-rio.jpg";
import work4 from "./components/img/examples/mariya-georgieva.jpg";
import work5 from "./components/img/examples/clem-onojegaw.jpg";

//===============================================================

import styles from "./components/ProfielPage/profilePage";
import GridItem from "./components/Grid/GridItem.js";

const useStyles = makeStyles(styles);
function App(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

  return (
        <div className="App">
            <div>
          <Header
            color="transparent"
            brand="Employee Page"
            rightLinks={<HeaderLinks />}
            fixed
            changeColorOnScroll={{
              height: 200,
              color: "white"
            }}
            {...rest}
          />
          <Parallax small filter image={require("./components/img/orange2.jpg")} />
          <div className={classNames(classes.main, classes.mainRaised)}>
            <div>
              <div className={classes.container}>
                <GridContainer
                   justify="flex-end"
                   alignItems="flex-end">
                  <GridItem xs={12} sm={12} md={6}>
                    <div className={classes.profile}>
                      <div>
                        <img src={profile} alt="..." className={imageClasses} />
                      </div>
                      {/* <div className={classes.name}>
                        <h3 className={classes.title}>Osama Alaaeldin</h3>
                        <h6>Software Developer</h6>
                      </div> */}
                    </div>
                  </GridItem>
                </GridContainer>

                <GridContainer
                   justify="center"
                   >
                  <GridItem xs={12} sm={12} md={6}>
                    <div className={classes.profile}>
                      <div className={classes.name}>
                        <h3 className={classes.title}>Osama Alaaeldin</h3>
                        <h6>Software Developer</h6>
                       
                      </div>
                    </div>
                  </GridItem>
                </GridContainer>
                <div>
                  <h3>Personal Information</h3>
                  



                </div>













                




                {/* <div className={classes.description}>
                  
                </div> */}
                {/* <GridContainer justify="center">
                  <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                    <NavPills
                      alignCenter
                      color="primary"
                      tabs={[
                        {
                          tabButton: "Studio",
                          tabIcon: Camera,
                          tabContent: (
                            <GridContainer justify="center">
                              <GridItem xs={12} sm={12} md={4}>
                                <img
                                
                                  alt="..."
                                  src={studio1}
                                  className={navImageClasses}
                                />
                                <img
                                  alt="..."
                                  src={studio2}
                                  className={navImageClasses}
                                />
                              </GridItem>
                              <GridItem xs={12} sm={12} md={4}>
                                <img
                                  alt="..."
                                  src={studio5}
                                  className={navImageClasses}
                                />
                                <img
                                  alt="..."
                                  src={studio4}
                                  className={navImageClasses}
                                />
                              </GridItem>
                            </GridContainer>
                          )
                        },
                        {
                          tabButton: "Work",
                          tabIcon: Palette,
                          tabContent: (
                            <GridContainer justify="center">
                              <GridItem xs={12} sm={12} md={4}>
                                <img
                                  alt="..."
                                  src={work1}
                                  className={navImageClasses}
                                />
                                <img
                                  alt="..."
                                  src={work2}
                                  className={navImageClasses}
                                />
                                <img
                                  alt="..."
                                  src={work3}
                                  className={navImageClasses}
                                />
                              </GridItem>
                              <GridItem xs={12} sm={12} md={4}>
                                <img
                                  alt="..."
                                  src={work4}
                                  className={navImageClasses}
                                />
                                <img
                                  alt="..."
                                  src={work5}
                                  className={navImageClasses}
                                />
                              </GridItem>
                            </GridContainer>
                          )
                        },
                        {
                          tabButton: "Favorite",
                          tabIcon: Favorite,
                          tabContent: (
                            <GridContainer justify="center">
                              <GridItem xs={12} sm={12} md={4}>
                                <img
                                  alt="..."
                                  src={work4}
                                  className={navImageClasses}
                                />
                                <img
                                  alt="..."
                                  src={studio3}
                                  className={navImageClasses}
                                />
                              </GridItem>
                              <GridItem xs={12} sm={12} md={4}>
                                <img
                                  alt="..."
                                  src={work2}
                                  className={navImageClasses}
                                />
                                <img
                                  alt="..."
                                  src={work1}
                                  className={navImageClasses}
                                />
                                <img
                                  alt="..."
                                  src={studio1}
                                  className={navImageClasses}
                                />
                              </GridItem>
                            </GridContainer>
                          )
                        }
                      ]}
                    />
                  </GridItem>
                </GridContainer> */}
              </div>
            </div>
          </div>
          <Footer />
        </div>
    </div>
  );
}

export default App;
