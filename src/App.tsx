/**
 * Key takeaways:
 *  1. The argument passed to useState is the 'state value on first render'
 *  2. The state variable holds 'state value on current render'
 *  3. The setState function is, roughly, 'trigger rerender with this new state value'
 *
 * Task: refactor to use a common handling approach for the three buttons
 *  (instead of the three slightly different approaches we hav enow)
 */

import { useState } from "react";

/**
 * Our App function runs repeatedly - once on every render
 */
function App() {
  /**
   * name: our current state value
   * setName: a function to rerender the app using
   * "Spiderman": the state value for first render
   */
  const [name, setName] = useState("Spiderman");

  /* common convention of 'handleEvent' */
  const handleCostumeUp = () => setName("Spiderman");
  function handleCostumeDown() {
    // setName is important for what it DOES
    //  and not for any return value
    //  (like console.log)
    setName("Peter Parker");
  }

  // when does this get run?
  console.log("App is rendering with name state value as:", name);

  return (
    <div>
      <h1>Hi, I'm {name}!</h1>
      <button onClick={handleCostumeUp}>Costume up!</button>
      <button onClick={handleCostumeDown}>Costume down!</button>
      <button onClick={() => setName("Venom")}>Evil symbiote!</button>
    </div>
  );
}

export default App;
