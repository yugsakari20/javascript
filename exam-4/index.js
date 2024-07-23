let students = [];

let uimaker = () => {
    document.getElementById('tbody').innerHTML = "";
    for (let i = 0; i < students.length; i++) {
        let tr = document.createElement('tr');
        let td0 = document.createElement("td");
        td0.innerHTML = i + 1;
        let td1 = document.createElement('td');
        td1.innerHTML = students[i].name;
        let td2 = document.createElement('td');
        td2.innerHTML = students[i].grid;
        let td3 = document.createElement('td');
        td3.innerHTML = students[i].course;
        let td4 = document.createElement('td');
        td4.innerHTML = students[i].number;
        let td5 = document.createElement('td');
        td5.innerHTML = students[i].fee;

        let td6 = document.createElement('td');
        let removeButton = document.createElement("td");
        removeButton.innerHTML = "Remove";
        removeButton.onclick = () => {
          students.splice(i, 1);
          uimaker();
        };
        td6.append(removeButton);

        tr.append(td0, td1, td2, td3, td4, td5, td6);
        document.getElementById('tbody').append(tr);
    }
}

const handledata = (e) => {
    e.preventDefault();
    let data = {
        name: document.getElementById("name").value,
        grid: document.getElementById("grid").value,
        course: document.getElementById("course").value,
        number: document.getElementById("number").value,
        fee: document.getElementById("fee").value
    }
    students.push(data);
    uimaker();
}

document.getElementById("userData").addEventListener("submit", handledata);
