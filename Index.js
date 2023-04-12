const result = "123";

let insert = document.getElementById("insert");

function getHint(contents) {
  let S = 0;
  let B = 0;
  for (let i = 0; i < contents.length; i++) {
    let digit = result.indexOf(contents.substr(i, 1));

    S += digit === i ? 1 : 0;
    B += digit > -1 && digit !== i ? 1 : 0;
  }

  if (S === result.length) {
    return "O.K.";
  } else {
    return `B: ${B},S: ${S}`;
  }
}

insert.addEventListener("click", function () {
  const table = document.getElementById("table");

  const newRow = table.insertRow();
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  const cell3 = newRow.insertCell(2);

  let inputTxt = document.getElementById("numberInput").value;

  cell1.innerText = table.rows.length - 1;
  cell2.innerText = inputTxt;
  cell3.innerText = getHint(inputTxt);
});
