import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faPaw, faBone } from "@fortawesome/free-solid-svg-icons";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./Profile";
import { Link } from "react-router-dom";
//import AnchorLink from './AnchorLink';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isLoading, loginWithRedirect, logout } = useAuth0();
  const toggle = () => setIsOpen(!isOpen);

  const handleSignUp = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/profile",
      },
      // authorizationParams: {
      //   screen_hint: "signup",
      // },
    });
  };
  //ask code connector and 100devs about routig error//

   const handleSignIn = async () => {
    await loginWithRedirect({
      appState: {
       returnTo: "/profile",
    },
      authorizationParams: {
        screen_hint: "signin",
      },
    });
   };

  return (
    <>
      <div className="header hislop">
        <div id="title">
          <div className="container-fluid navcon">
            <Navbar light expand="lg" id="links">
              <NavbarBrand id="heading" href="/">
                <img
                  src="/assets/namenoback.png"
                  alt="BarkAmigos Title"
                  className="cover"
                />
              </NavbarBrand>
              <NavbarToggler onClick={toggle} />
              <Collapse isOpen={isOpen} navbar>
                <Nav className="me-auto" navbar>
                  <NavItem>
                    <NavLink href="#footer">Contact</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pricing">Pricing</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#cta">Sign Up</NavLink>
                  </NavItem>
                  {!isLoading && !user && (
                    <>
                    <Link id="qsLoginBtn" className="log" to="/api/auth/login" 
                        onClick={handleSignIn}>
                 
                      
                        
                        Sign INN
                      
                      {/* turn buttons into navlinks */}
                      {/* <button className="btn btn-primary btn-margin" onClick={() => loginWithRedirect({ screen_hint: 'signup' })}>
                        sign up
                      </button> */}
                    </Link>
                    <NavLink id="qsLoginBtn" className="log">
                      <button
                      className="btn btn-primary btn-margin"
                      onClick={handleSignUp}>Sign$ Up</button>
                      </NavLink>
</>
                  )}
                  {user && (
                    <>
                  
                      <Nav
                        id="nav-mobile"
                        className="justify-content-between "
                        navbar
                      >
                        <NavItem>
                          <Link href={ Profile }>My Profile</Link>
                        </NavItem>
                        <NavItem id="qsLogoutBtn">
                          {/* <PageLink
                          href="/api/auth/logout"
                          className="btn btn-link p-1"
                         >
                          Log out
                        </PageLink> */}
                          <button className="btn btn-link p-1"
                            onClick={() =>
                              logout({
                                logoutParams: {
                                  returnTo: window.location.origin,
                                },
                              })
                            }
                          >
                            Log Out
                          </button>
                        </NavItem>
                      </Nav>
                    </>
                  )}
                </Nav>
              </Collapse>
            </Navbar>
            </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;