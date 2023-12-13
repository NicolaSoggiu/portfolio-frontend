function Homepage() {
  return (
    <>
      <div style={{ color: "#FAF446" }}>Ciao sono la homepage</div>
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
