import "./App.css";
import { Balance } from "../src/Component/Balance";
import { Transection } from "../src/Component/Transection";
import { Container } from "@chakra-ui/react";
import { TransectionList } from "../src/Component/TransectionList";
import { GlobalProvider } from "./Context/GlobalProvider";
import firebase from "./firebase";
import "firebase/messaging";

function App() {
  const messaging = firebase.messaging();
  messaging.getToken({
    vapidKey:
      "BNaTynzk5nnSqKbFLcwDPcUMkiQ0vmCAG8gFheh0wi7QgsZ3Mm2gGv3AaB43A_wiXxWHpm0Soil5sy_LXgY37Bw",
  }).then((currentToken)=>{
    if(currentToken){
      console.log('cuurent token is ' , currentToken)
    }
    else{
      console.log('no regestration token available');
    }
  }).catch((error)=>{
    console.log('an error is ', error)
  });


  return (
    <div className="App">
      <GlobalProvider>
        <Container mt={50}>
          <Balance />
          <Transection />
          <TransectionList />
        </Container>
      </GlobalProvider>
    </div>
  );
}

export default App;
