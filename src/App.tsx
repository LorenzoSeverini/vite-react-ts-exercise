// import ListGroup from "./components/ListGroup";

import { useState } from "react";
import Alert from "./components/Alert"
import Button from "./components/Button";

// items array
// const items = [
//   'Rome',
//   'Milan',
//   'Turin',
//   'Genoa',
//   'Florence',
// ];

// const handleSelectItem = (item: string) => {
//   console.log(item)
// }

function App() {
  // return <div><ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/></div>

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>

      {/* Alert */}
      { alertVisible && <Alert onClose={ () => setAlertVisibility(false) }> 
        <h1>Alert primary blue!</h1>
        <code>Ohter html tag here!</code>
        <div className="card mt-2 p-2">
          <div className="card-title">
            <h2>Hello world</h2>
          </div>
          <div className="card-body">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores itaque voluptates error ea asperiores nemo repellendus quaerat dolorum cumque quia rerum distinctio recusandae exercitationem quisquam, molestiae suscipit. Fugiat, vero optio?</p>
          </div>
        </div>
      </Alert>}

      {/* Button */}
      <Button color="success" onClick={() => setAlertVisibility(true)}>
        Click me! <span>To go somewhere</span>
      </Button>

    </div>
  )
}

export default App;