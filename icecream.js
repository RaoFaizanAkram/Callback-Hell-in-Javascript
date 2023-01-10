let stocks =  {
    
        Fruits : ["Strawberry", "Grapes", "Banana", "Apple"],
        liquid : ["water", "ice"],
        holder : ["cone", "cup", "stick"],
        toppings : ["chocolate", "peanuts"],
};



let order = (Fruits_name,call_production) => {
  setTimeout(() => {
    
        setTimeout(() => {


            setTimeout(() => {

                    setTimeout(() => {

                            setTimeout(() => {

                                    setTimeout(() => {
                                            setTimeout(() => {
                                                console.log(`Here is your Icecream ${stocks.holder[0]} Boss`);
                                            }, 1000);
                                        console.log(`7.${stocks.toppings[0]} is added as a topping`)
                                    }, 1000);

                                console.log(`6.${stocks.holder[0]} has been picked`);
                            }, );


                        console.log("5.The machine is started");
                    },1000)




                console.log(`4.${stocks.liquid[0]} and ${stocks.liquid[1]} has been added`)
            }, 1000)
            console.log(`3.Ingredients are chopped`);
        },2000)


    console.log(`1.${stocks.Fruits[Fruits_name]} has been secleted`);
    call_production();
  


},3000)

}

let production = () => {
    console.log("2.Producing your Icecream");

}
order(0,production);