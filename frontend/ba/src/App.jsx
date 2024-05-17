//import React from 'react'
//import {Cloudinary} from "@cloudinary/url-gen";
//import {AdvancedImage} from '@cloudinary/react';
//import {fill} from "@cloudinary/url-gen/actions/resize";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import  Page from "./Page";
import  Profile from "./components/Profile";
import  View from "./components/View";
//import { Callback } from "./components/Callback";

import "./App.css";

function App() {
  // const cld = new Cloudinary({
  //   cloud: {
  //     cloudName: 'dcqqva4tp'
  //   }
  // });
  // const myImage = cld.image('docs/models');
  // myImage.resize(fill().width(250).height(250));
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Page />} />
         {/* <Route path="/api/auth/login" element={<Profile />} />  */}
        <Route path="/profile" element={<Profile />} />
         <Route path="/findingamigos" element={<View />} /> 
      </Routes>
      {/* <div>
      <AdvancedImage cldImg={myImage} />
    </div> */}
    </Layout>
  );
}

export default App;
