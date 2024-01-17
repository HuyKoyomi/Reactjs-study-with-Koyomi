import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "./App.css";

function App() {
  function onChange(e) {
    console.log(e);
  }

  function asyncScriptOnLoad(e) {
    console.log(e);
  }

  function onErrored(e) {
    console.log(e);
  }

  function onExpired(e) {
    console.log(e);
  }

  return (
    <div className="App">
      <ReCAPTCHA
        sitekey="6Ld_dlIpAAAAAHqv-uzbCY42O5_DVeuM9944DPN_"
        onChange={onChange}
        asyncScriptOnLoad={asyncScriptOnLoad}
        badge="bottomleft"
        hl={"vi"}
        isolated={true}
        onErrored={onErrored}
        onExpired={onExpired}
        size={"normal"}
        tabindex={1}
        type={"image"}
        theme="dark"
      />
    </div>
  );
}

export default App;
