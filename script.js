This is javascript file
const calculateTemp = () => {
    const numberTemp = document.getElementById('temp').value;
    console.log(numberTemp);

    const tempSelected = document.getElementById('temp_opt');
    const valueTemp = temp_opt.options[tempSelected.selectedIndex].value;

    const CelToFah = (cel) => {
        let fahrenheit = Math.round((cel * 9/5) + 32);
        return fahrenheit;
    }
    const fehTocel = (feh) => {
        let celcius = Math.round((feh -32) * 5/9);
        return celcius;
    }
    let result;

    if (valueTemp == 'cel') {
        result = CelToFah(numberTemp);
        document.getElementById('resultcont').innerHTML = `= ${result}°Fahrenheit`;
    } else {
        result = fehTocel(numberTemp);
        document.getElementById('resultcont').innerHTML = `=${result}°Celcius`;
    }
}
