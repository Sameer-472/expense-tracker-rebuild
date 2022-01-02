import {
  NumberInput,
  NumberInputStepper,
  NumberInputField,
  Button,
  useToast,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import { type } from "os";
import React, { useContext } from "react";
import { useState } from "react";
import Global from "../Context/GlobalProvider";

export const Transection = () => {


  const format = (val: any) => `$` + val;
  const parse = (val: any) => val.replace(/^\$/, "");
  const toast = useToast();
  const [input, setInput] = useState("");

  const [value, setValue] = React.useState("1");

  //useState for transaction name
  const [text, settext] = useState("");
  //useState for amount
  const [amount , setamount] = useState<number>(0);

  //this is funuction run when we press the button
  const { addTransection } = useContext(Global);
  const {transition} = useContext(Global);

  const onSubmit = (e: any) => {
    console.log(transition);
    
    e.preventDefault();


    var transection = {
      id: Math.floor(Math.random() * 1000),
      text  ,
      amount ,
      value 
    };
    if(text.length>1 && amount>0 && value==='1'){
      addTransection(transection);
      // transection.text = ''
      toast({
        title: "Transection successfully done.",
        description: `we have added ${transection.amount} in your balance`, 
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    }

    if(text.length>2 && amount>0 && value==='2'){
      addTransection(transection);
      toast({
        title: "Transection successfully done.",
        description: `we have dedected $${transection.amount}.00 from your balance`, 
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
    }
    if(text.length===0 && amount==0 && (value==='1' ||  value==='2')) {
      toast({
        title: "Please fill all the fileds.",
        // description: `we have added ${transection.amount} in your balance`, 
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }

  }

  const handleInputChange = (e: any) => setInput(e.target.value);

  // const isError = input === "";
  return (
    <div>
      <FormControl>
        <FormLabel htmlFor="first-name">
          Enter name of the transaction
        </FormLabel>
        <Input
          id="first-name"
          placeholder="write name of the transaction"
          onChange={(e) => {
            settext(e.target.value);
          }}
        />
        <FormLabel htmlFor="amount">Amount</FormLabel>
        <NumberInput >
          <NumberInputField
            id="amount"
            placeholder="Enter amount of transction"
            onChange={(e: any) => {
              setamount(parseInt(e.target.value));
            }}
          />
          <NumberInputStepper></NumberInputStepper>
        </NumberInput>

        <RadioGroup onChange={setValue} value={value} mt={5}>
          <Stack direction="row">
            <Radio value="1" style={{"color": 'green'}}>Income</Radio>
            <Radio value="2" style={{"color": 'red'}}>Expense</Radio>
          </Stack>
        </RadioGroup>
        <Button mt={5} size="md" colorScheme="teal" onClick={onSubmit}>
          Add Balance
        </Button>
      </FormControl>
    </div>
  );
}; 
