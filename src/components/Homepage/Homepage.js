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
        <div className="title">Welcome to my Portfolio!</div>
        <span className="description">
          Hi, I'm Nicola, a passionate junior full stakc Web Developer from
          Italy. Here you can see all my projects and contacts!
        </span>
        <div className="d-flex justify-content-center gap-5 flex-wrap mt-5">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h1>Html</h1>
            <img className="tech" src={Html5} alt=""></img>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h1>Css</h1>
            <img className="tech" src={css} alt=""></img>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h1>Javascript</h1>
            <img className="tech" src={javascript} alt="" />
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h1>Bootstrap</h1>
            <img className="tech" src={bootstrap} alt=""></img>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h1>Tailwind</h1>
            <img className="tech" src={tailwind} alt=""></img>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h1>Vue</h1>
            <img className="tech" src={vue} alt=""></img>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h1>Vite</h1>
            <img className="tech" src={vite} alt=""></img>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h1>Php</h1>
            <img className="tech" src={php} alt=""></img>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h1>Laravel</h1>
            <img className="tech" src={laravel} alt=""></img>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h1>React</h1>
            <img className="tech" src={react} alt=""></img>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h1>Java</h1>
            <img className="tech" src={java} alt=""></img>
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
