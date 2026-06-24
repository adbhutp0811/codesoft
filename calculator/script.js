  var disp = document.getElementById('display');

    function appendVal(val) {
        disp.value += val;
    }

    function clearDisplay() {
        disp.value = '';
    }

    function deleteLast() {
        disp.value = disp.value.slice(0, -1);
    }

    function calculate() {
        try {
            var result = eval(disp.value);
            disp.value = result;
        } catch(e) {
            disp.value = 'Error';
        }
    }