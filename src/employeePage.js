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
//===============================================================
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AssignmentIcon from '@material-ui/icons/Assignment';
import HomeIcon from '@material-ui/icons/Home';
import styles from "./components/ProfielPage/profilePage";
import GridItem from "./components/Grid/GridItem.js";
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles(styles);

export default function employeePage(props) {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const classes = useStyles();
    const { ...rest } = props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    // const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  
    return (
              <div>
            <Header
              color="transparent"
              brand="Employee Page"
              rightLinks={<HeaderLinks />}
              fixed
              changeColorOnScroll={{
                height: 200,
                color: "black"
              }}
              {...rest}
            />
            {/* <Parallax small filter image={require("./components/img/orange2.jpg")} /> */}
            <Parallax />
            <div className={classNames(classes.main, classes.mainRaised)}>
              <div>
                <div className={classes.container}>
                  <GridContainer
                     justify="flex-end"
                     alignItems="flex-end">
                    <GridItem xs={12} sm={12} md={6}>
                      <div className={classes.profile}>
                        <div>
                          
                        </div>      
                        {/* <div className={classes.name}>
                          <h3 className={classes.title}>Osama Alaaeldin</h3>
                          <h6>Software Developer</h6>
                        </div> */}
                      </div>
                    </GridItem>
                  </GridContainer>
  
                  {/* <GridContainer
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
                  </GridContainer> */}
                    {/* <div className={classes.description}>
                  
                </div> */}
                {/* <Grid
                        container
                        direction="column"
                        justify="flex-end"
                        alignItems="flex-end"
                        >
              
                </Grid> */}
                <GridContainer 
                            direction="row" 
                             justify="flex-start"
                              alignItems="flex-start" className={classes.GridInfo} >
            
                  <GridItem xs={12} sm={6} className={classes.navWrapper}>
                    <NavPills
                      alignCenter
                      color="primary"
                      tabs={[
                        {
                          tabButton: "Personal Information",
                          tabIcon: AccountBoxIcon,
                          tabContent: (
                            <GridContainer justify="center" className={classes.GridInfo}> 
                              <GridItem xs={12} sm={12} md={4} >
                                  <div className={classes.GridInfo}>
                                <h3>Code</h3>
                                <h3>Name</h3>
                                <h3>Nationality</h3>
                                <h3>Gender</h3>
                                <h3>Mobile Number</h3>
                                </div>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={4} >
                                 <h4>3301654</h4>
                                 <h4>Medhat Ahmed Adel Elfar</h4>
                                 <h4>Egyptian</h4>
                                 <h4>Male</h4>
                                 <h4>01223111494</h4>
                              </GridItem>
                            </GridContainer>
                          )
                        },
                        {
                          tabButton: "Family Information",
                          tabIcon: HomeIcon,
                          tabContent: (
                            <GridContainer justify="center">
                              <GridItem xs={12} sm={12} md={4}>
                                  <h3>Wife Name</h3>
                                  <h3>Child 1</h3>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={4}>
                                <h4>wife Name ...</h4>
                                <h4>Child Name</h4>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={4}>
                                <h4>birthDate Wife ...</h4>
                                <h4>Child 1 Birth Date</h4>
                              </GridItem>

                            </GridContainer>
                          )
                        },
                        {
                          tabButton: "Job Description",
                          tabIcon: AssignmentIcon,
                          tabContent: (
                            <GridContainer justify="center">
                              <GridItem xs={12} sm={12} md={4}>
                              
                              </GridItem>
                              <GridItem xs={12} sm={12} md={4}>
                               
                              </GridItem>
                            </GridContainer>
                          )
                        }
                      ]}
                    />
                  </GridItem>
                  <GridItem xs={3} >
                        
                  </GridItem>
                  <GridItem xs={3} >
                        <img src={profile} alt="..." className={classes.empImg}/>
                  </GridItem>
                </GridContainer>
                
                </div>
              </div>
            </div>
            <Footer />
          </div>
    );
                }
