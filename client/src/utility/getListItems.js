
function getListItems(activeLisk){
    let lists = []

    switch (activeLisk) {
        case "buy":
            return lists=["Apply now", "Purchase rates",
                "Affordable calculator", "Mortgage calculator", "Rent vs buy calculator",
                "Find an agent", "VA loans", "Learning center"
             ];
            
        case "refinance":
            return lists=[
                "Apply now", "Refinance rates", "Case-out refine calculator",
                "Learning center"
            ]
           
        case "heloc":
            return lists=["Apply now", "Calculate your cash", 
                "HOLEC vs Cash-out refinance", "Learning center"
            ];

        case "rates":
            return lists=[
                "Purchase mortgage rates", "Refinance rate",
                 "Refinance cash-out rates", "HELOC rates", "Purchase VA rates"
            ];

        case "betterPlus":
            return lists=[
                "Get Insurance", "Title and Closing", "Better Attorney Match",
                "Learning Center", "Better Agent Match", "Better Duo"
            ];

        default :
            return lists=[];

    }
    

}

export default getListItems;