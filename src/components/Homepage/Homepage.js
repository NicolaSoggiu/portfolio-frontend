import "bootstrap/dist/css/bootstrap.min.css";
import "./Homepage.css";

function Homepage() {
  return (
    <>
      <div className="container">
        <div className="title">Welcome to my Portfolio!</div>
        <span className="description">
          Hi, I'm Nicola, a passionate junior full stakc Web Developer from
          Italy. Here you can see all my projects and contacts!
        </span>
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
