

    
   export const initCountdownAracas = () => {
            //EPPGG-BA
                // Substitua esta data pela data real da prova
        const targetDate = new Date('2027-01-10T00:00:00'); 
        const today = new Date();
        today.setHours(0,0,0,0);// essa variavel é usada para calcular a diferença de dias entre a data atual e a data da prova
        const ticketPrice = 1; // Valor da passagem de ida e volta
        const diffDays = Math.ceil((targetDate - today) / 86400000); //a função Math.ceil arredonda para cima, garantindo que mesmo que falte menos de um dia, ainda seja contado como 1 dia restante
        var ticketPriceForDaysAracas = diffDays > 0 ? ticketPrice/diffDays : 0 ; // calcula quanto por dia é necessario juntar para a passagem, caso falte menos de um dia, o valor da passagem é 0
        let aracasValues = {
            valueDays: diffDays,
            valuePrice: ticketPriceForDaysAracas,
            valueTicket: ticketPrice
        };

        return aracasValues;    
        
    };
  export const initCountdownFormosa = () => {
        //Bonito
        // Substitua esta data pela data real da prova
        const targetDate = new Date('2027-01-17T00:00:00'); 
        const today = new Date();
        today.setHours(0,0,0,0);
        const ticketPrice = 195; // Valor da passagem de ida e volta
        const diffDays = Math.ceil((targetDate - today) / 86400000);
        var ticketPriceForDaysFormosa = diffDays > 0 ? ticketPrice/diffDays : 0 ; // calcula quanto por dia é necessario juntar para a passagem, caso falte menos de um dia, o valor da passagem é 0
         let formosaValues = {
            valueDays: diffDays,
            valuePrice: ticketPriceForDaysFormosa,
            valueTicket: ticketPrice

        };

        return formosaValues;
        //return ticketPriceForDaysFormosa
    };

    export const initCountdownIBGE = () => {
        //DPE-PE
        // Substitua esta data pela data real da prova
        const targetDate = new Date('2027-02-28T00:00:00'); 
        const today = new Date();
        today.setHours(0,0,0,0);
        const ticketPrice = 1; // Valor da passagem de ida e volta
        const diffDays = Math.ceil((targetDate - today) / 86400000);
        var ticketPriceForDaysIBGE = diffDays > 0 ? ticketPrice/diffDays : 0 ; // calcula quanto por dia é necessario juntar para a passagem, caso falte menos de um dia, o valor da passagem é 0
                
        let ibgeValues = {
            valueDays: diffDays,
            valuePrice: ticketPriceForDaysIBGE,
            valueTicket: ticketPrice
        };

        return ibgeValues;
    };

    export const initCountdownAllDays = () => {
        //UFBA
        const targetDate = new Date('2026-12-20T00:00:00'); 
        const today = new Date();
        today.setHours(0,0,0,0);
        const ticketPrice = 1; // Valor da passagem de ida e volta
        const diffDays = Math.ceil((targetDate - today) / 86400000);
        var ticketPriceForDaysIBGE = diffDays > 0 ? ticketPrice/diffDays : 0 ; // calcula quanto por dia é necessario juntar para a passagem, caso falte menos de um dia, o valor da passagem é 0
                
        let ibgeValues = {
            valueDays: diffDays,
            valuePrice: ticketPriceForDaysIBGE,
            valueTicket: ticketPrice
        };

        return ibgeValues;
    };
   /*export const initCountdownAllDays = (value1, value2, value3) => {
        value1 = parseFloat(value1) || 0;
        value2 = parseFloat(value2) || 0;
        value3 = parseFloat(value3) || 0;
        const totalPrice = value1 + value2 + value3;
        
        return totalPrice;
    };
*/
    //let aracasValue = initCountdownAracas().toFixed(1);
   /* let formosaValue = initCountdownFormosa().toFixed(1);
    let ibgeValue = initCountdownIBGE().toFixed(1);
    let totalValue = initCountdownAllDays(aracasValue, formosaValue, ibgeValue);*/

// let FinalValuePriceForDays = {
    // aracasValue,
     /*formosaValue,
     ibgeValue,
     totalValue*/
   // };
  



/*console.log("O valor de Formosa é: ", priceForDays().formosaValue);
console.log("O valor de IBGE é: ", priceForDays().ibgeValue);
console.log("O valor de Total é: ", priceForDays().totalValue);*/
