const user = { firstName: "srinu", lastName: "Tirumanisetti" };
const fullName = (user) => user.firstName + " " + user.lastName;
const className = "greeting";
const rootElement = document.getElementById("root");
const element = (
  <div>
    <h1 class={className}>Hello {fullName(user)}</h1>
    <h2>Good to see you</h2>
  </div>
);
ReactDOM.render(element, rootElement);
