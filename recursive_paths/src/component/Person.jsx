import React from "react";
import { useParams, useRouteMatch, Link } from "react-router-dom";

const PEEPS = [
  { id: 0, name: "Michelle", friends: [1, 2, 3] },
  { id: 1, name: "Sean", friends: [0, 3] },
  { id: 2, name: "Kim", friends: [0, 1, 3] },
  { id: 3, name: "David", friends: [1, 2] },
];

function find(id) {
  return PEEPS.find((p) => p.id === id);
}

function Person() {
  let { url } = useRouteMatch();
  let { id } = useParams();
  console.log(id);
  let person = find(parseInt(id));
  console.log(person);
  return (
    <div>
      <h3>{person.name}’s Friends</h3>

      <ul>
        {person.friends.map((id) => (
          <li key={id}>
            <Link to={`${url}/${id}`}>{find(id).name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Person;
