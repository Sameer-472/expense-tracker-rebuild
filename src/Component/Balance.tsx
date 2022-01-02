import {
  StatGroup,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
} from "@chakra-ui/react";
import { useContext } from "react";
import Global from "../Context/GlobalProvider";



export const Balance = () => {
  const { transition } = useContext(Global);
  const amount: number[] = transition.map((amount: any) => amount.amount);
  var totalamount: number = + amount.reduce((totalAmount , item) =>( totalAmount += item) , 0)
  console.log(totalamount)

  const income = transition.filter((value: any)=> value.value==='1').map((amount:any)=> amount.amount).reduce((totalAmount:any , item:any) =>( totalAmount += item) , 0).toFixed(2)
  


  const outcome = transition.filter((value: any)=> value.value==='2').map((amount:any)=> amount.amount).reduce((totalAmount:any , item:any) =>( totalAmount += item) , 0).toFixed(2)  


  const totalbalance = (income - outcome).toFixed(2) 

  return (
    <div>
      <div id="balance">
        <h1 style={{"fontSize": 30 , "fontWeight": "bolder" , "marginBottom": 30}}>Current balance:  $<span style={{"color": "red"}}>{totalbalance}</span></h1>
        <StatGroup>
          <Stat>
            <StatLabel>Total income</StatLabel>
            <StatNumber>{income}</StatNumber>
            <StatHelpText>
              <StatArrow type="increase" />
              23.36%
            </StatHelpText>
          </Stat>

          <Stat>
            <StatLabel>Total Expense</StatLabel>
            <StatNumber>{outcome}</StatNumber>
            <StatHelpText>
              <StatArrow type="decrease" />
              9.05%
            </StatHelpText>
          </Stat>
        </StatGroup>
      </div>
    </div>
  );
};
