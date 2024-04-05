let inputValue = document.getElementById('input');
let button = document.getElementById('btn');
let x = document.getElementById('x');
let y = document.getElementById('y');
let z = document.getElementById('z');
let DAY = document.getElementById('DAY');
let MONTH = document.getElementById('MONTH');
let YEAR = document.getElementById("YEAR");
let d1, m1;




let months = ['Month', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
for (const Month of months) {
    let option = document.createElement("option");
    option.value = Month;
    option.textContent = Month;
    MONTH.appendChild(option);
}

let option = document.createElement('option');
option.value = "Day";
option.textContent = "Day";
DAY.appendChild(option);

for (let i = 1; i <= 31; i++) {

    let option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    DAY.appendChild(option);
}




function ageCalculte(d1) {
    y1 = YEAR.value;
    d1 = DAY.value;
    if (MONTH.value === "Jan") {
        m1 = 1;
    }
    else if (MONTH.value === "Feb") {
        m1 = 2;
    }
    else if (MONTH.value === "Mar") {
        m1 = 3;
    } else if (MONTH.value === "Apr") {
        m1 = 4;
    } else if (MONTH.value === "May") {
        m1 = 5;
    } else if (MONTH.value === "Jun") {
        m1 = 6;
    } else if (MONTH.value === "Jul") {
        m1 = 7;
    } else if (MONTH.value === "Aug") {
        m1 = 8;
    } else if (MONTH.value === "Sep") {
        m1 = 9;
    } else if (MONTH.value === "Oct") {
        m1 = 10;
    } else if (MONTH.value === "Nov") {
        m1 = 11;
    } else if (MONTH.value === "Dec") {
        m1 = 12;
    }
    if (d1 === "Day" || m1 === "Month") {
        alert("Write the data correctly !");
    }
    else {
        let todayDate = new Date();

        let d2 = todayDate.getDate();
        let m2 = todayDate.getMonth() + 1;
        let y2 = todayDate.getFullYear();

        let y3, m3, d3;
        y3 = y2 - y1;
        if (m2 >= m1) {
            m3 = m2 - m1;
        }
        else {
            y3--;
            m3 = 12 + m2 - m1;
        }
        if (d2 >= d1) {
            d3 = d2 - d1;
        }
        else {
            m3--;
            d3 = new Date(y1, m1, 0).getDate() + d2 - d1;
        }
        if (m3 < 0) {
            m3 = 11;
            y3--;
        }

        x.innerText = y3;
        y.innerText = m3;
        z.innerText = d3;
        document.getElementById("result").classList.toggle('visible');
    }




}



button.addEventListener("click", () => {
    ageCalculte();
    


})