var display = document.getElementById('txtdisplay');
var historydiv = document.getElementById('txthistorydiv');
var dispval = '',
val1 = '',
val2 ='',
opr = '',
result = ''
historyarray = [];
function NumPress(num)
{
    if(opr === '')
    {
        val1+=num;
        display.value += num;
    }
    else
    {
        val2 +=num;
        display.value+=num;
    }
}
function Operator(operate)
{
    opr = operate;
    calculate();
    // val1 = parseFloat(dispval)
    // dispval+=" "+opr;
    // display.value = dispval;
}
function calculate()
{
    if(val1 !== '' && val2 !== '' && opr !== '')
        {
            switch(opr){
                case '+':
                    result = parseFloat(val1) + parseFloat(val2)
                    break;
                case '-':
                    result = parseFloat(val1) - parseFloat(val2)
                    break;
                case 'x':
                    result = parseFloat(val1) * parseFloat(val2)
                    break;
                case '/':
                    result = parseFloat(val1) / parseFloat(val2)
                    break;
                default:
                    return;
            }
            historyarray.push(val1+" "+opr+" "+val2+" = "+result);
            createhistory();
            display.value = result;
            val1 = result;
            val2,opr = '';
        }
}
function createhistory()
{
    historydiv.innerHTML = historyarray.join("</br>")
}
function clearHistory()
{
    historydiv.innerHTML='';
}
function clearall(){
    val1 = ''
    val2 = ''
    opr = ''
    result = ''
    display.value = '';
}