const retrieveEntriesArray = () => {
  let entries = localStorage.getItem("user-Entries");
  return entries ? JSON.parse(entries) : [];
};

let userEntries = retrieveEntriesArray();

const displayEntries = () => {
  const entries = retrieveEntriesArray();

  const tableEntriesOutput = entries
    .map(
      (eachEntry) => `<tr>
              <td style = "padding: 2px 4px;text-align:center">${eachEntry.name}</td>
              <td style = "padding: 2px 4px;text-align:center">${eachEntry.email}</td>
              <td style = "padding: 2px 4px;text-align:center">${eachEntry.password}</td>
              <td style = "padding: 2px 4px;text-align:center">${eachEntry.dob}</td>
              <td style = "padding: 2px 4px;text-align:center">${eachEntry.acceptedTermsAndConditions}</td>
          </tr>`
    )
    .join("\n");

  const table = `<table>
      <thead>
          <tr>
              <th style = "padding: 2px 10px">NAME</th>
              <th style = "padding: 2px 10px">EMAIL</th>
              <th style = "padding: 2px 10px">PASSWORD</th>
              <th style = "padding: 2px 10px">DOB</th>
              <th style = "padding: 2px 10px">ACCEPTED TERM?</th>
          </tr>
      </thead>
      <tbody>${tableEntriesOutput}</tbody>
  </table>`;

  let details = document.getElementById("user-entries");
  details.innerHTML = table;
};

const saveUserForm = (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const dob = document.getElementById("dob").value;
  const acceptedTermsAndConditions = document.getElementById("terms").checked;

  const entry = {
    name,
    email,
    password,
    dob,
    acceptedTermsAndConditions,
  };

  userEntries.push(entry);
  localStorage.setItem("user-Entries", JSON.stringify(userEntries));
  displayEntries();
  userForm.reset();
};

let userForm = document.getElementById("user-form");
userForm.addEventListener("submit", saveUserForm);

displayEntries();
