import "bootstrap/dist/css/bootstrap.min.css";
import "./Homepage.css";
import Html5 from "../../assets/html5.png";
import css from "../../assets/css.png";
import javascript from "../../assets/javascript.png";
import bootstrap from "../../assets/bootstrap.png";
import tailwind from "../../assets/tailwind.png";
import vue from "../../assets/vue.png";
import vite from "../../assets/vite.png";
import php from "../../assets/php.png";
import laravel from "../../assets/laravel.png";
import react from "../../assets/react.png";
import java from "../../assets/java.png";

function Homepage() {
  return (
    <>
      <div className="container">
        <div className="title">
          <h1>Welcome to my Portfolio!</h1>
          <span className="description">
            Hi, I'm Nicola, a passionate junior full stack Web Developer from
            Italy. Here you can see all my world!
          </span>
        </div>
        <h1 className="skills text-center">Stack</h1>
        <div className="row justify-content-center aling-items-center mt-5">
          <div className="col-md-3 mb-4">
            <div className="d-flex flex-column justify-content-space-between align-items-center">
              <h3>Html</h3>
              <img className="tech" src={Html5} alt="" />
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <h3>Css</h3>
              <img className="tech" src={css} alt=""></img>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="d-flex flex-column justify-content-center align-items-center gap-3">
              <h3>Javascript</h3>
              <img className="tech" src={javascript} alt="" />
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="d-flex flex-column justify-content-center align-items-center gap-3">
              <h3>Bootstrap</h3>
              <img className="tech" src={bootstrap} alt=""></img>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <h3>Tailwind</h3>
              <img className="tech" src={tailwind} alt=""></img>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <h3>Vue</h3>
              <img className="tech" src={vue} alt=""></img>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <h3>Vite</h3>
              <img className="tech" src={vite} alt=""></img>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <h3>Php</h3>
              <img className="tech" src={php} alt=""></img>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <h3>Laravel</h3>
              <img className="tech" src={laravel} alt=""></img>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <h3>React</h3>
              <img className="tech" src={react} alt=""></img>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <h3>Java</h3>
              <img className="tech" src={java} alt=""></img>
            </div>
          </div>
        </div>
      </div>
      {/* <Test
        // name="andrea"
        click={() => {
          console.log("clicked");
        }}
      /> */}
    </>
  );
}

// const isNameDefined = (name) => {
//   if (name) {
//     return <span>{name}</span>;
//   } else {
//     return <span>Nome non definito </span>;
//   }
// };

// const Test = ({ name, click, children }) => {
//   return (
//     <div>
//       {/* { name ? <span>{name}</span> : <span>Nome non definito</span> } */}
//       {isNameDefined(name)}
//       <span onClick={click}>Ciao sono il test</span>
//       <div>{children}</div>
//     </div>
//   );
// };

// Test.defaultProps = { name: "nicola" };

export default Homepage;
