class calculator{
    constructor(previousOperand,currentOperand){
        this.previousOperand=previousOperand
        this.currentOperand=currentOperand
        this.clear()
    }
    clear(){
        this.previousOperand=''
        this.currentOperand=''
        this.operation=''
        this.display()
    }
    appendCurrent(button){
        
        if(this.currentOperand.indexOf('.')!=-1 && button=='.'){
            return
        }this.currentOperand=this.currentOperand+button
        


    }
    appendPrevious(button){
        this.previousOperand=this.previousOperand+button
    }
    display(){
        currentOperand.innerText=this.currentOperand.toString()
        previousOperand.innerText=this.previousOperand.toString()
        if(this.operation){previousOperand.innerText+=this.operation}
        

    }
    appendOperator(button){
        this.operation=button.innerText
    }
    compute(){
        let computation
        switch(this.operation){
            
            case '+' :
                computation=(parseFloat(this.currentOperand)+parseFloat(this.previousOperand)).toString()
                break
                

            case '-' :
                computation=(parseFloat(this.previousOperand)-parseFloat(this.currentOperand)).toString()
                break
                

            case '÷' :
                computation=(parseFloat(this.previousOperand)/parseFloat(this.currentOperand)).toString()
                break
               

            case '*' :
                computation=(parseFloat(this.currentOperand)*parseFloat(this.previousOperand)).toString()
                break
            default:
                return
        }
            this.currentOperand = computation
            this.operation = undefined
            this.previousOperand = ''
    }

    delete(){
        if(this.currentOperand!=''){
            this.currentOperand=this.currentOperand.slice(0,-1)
            this.display()

        }
        else if(this.operation){
            this.operation=undefined
            previousOperand.innerText=previousOperand.innerText.slice(0,-1)
            this.currentOperand=this.previousOperand
            this.previousOperand=''
            this.display()
        }
        else if(this.operation==undefined && this.previousOperand!=''){
            this.previousOperand=this.previousOperand.slice(0,-1)
            this.display()
        }
        
    }

    equal(){
        
        
         if(this.compute()!=='NaN') {this.display()}  
        
        
    }

}










let nums=document.querySelectorAll("[data-num]")
let operations=document.querySelectorAll("[data-oper]")
let del=document.querySelector("[data-del]")
let ac=document.querySelector("[data-clear]")
let equal=document.querySelector("[data-equal]")
let currentOperand=document.querySelector(".current-operand")
let previousOperand=document.querySelector(".previous-operand")

calculator=new calculator(previousOperand,currentOperand)


nums.forEach((num)=>{
    num.addEventListener('click',()=>{
        if(calculator.currentOperand==''&& num.innerText=='.')return
        calculator.appendCurrent(num.innerText)
        currentOperand.innerText=calculator.currentOperand
        calculator.display()
       
            
            
        // }
        
    })
})

operations.forEach((operator)=>{
    
    operator.addEventListener('click',()=>{
            if(calculator.operation){return}
            else if(calculator.currentOperand!=''){calculator.appendOperator(operator)
                calculator.previousOperand=calculator.currentOperand
                calculator.currentOperand=''
                calculator.display()
                // previousOperand.innerText+=calculator.operation  
            }
            
            

})
})  

del.addEventListener('click',()=>{
    calculator.delete()
})

ac.addEventListener('click',()=>{
    calculator.clear();
})
equal.addEventListener('click',()=>{
     if(calculator.currentOperand!=''&& calculator.previousOperand!=''&& calculator.operation!=''){
        calculator.equal()}
    
    
})

        
        // calculator.operation=calculator.operation+operator.innerText;










