import { NextPage } from "next";
import withOperations from "./withOperations";

const Operations: NextPage<any> = ({ title }) => {
  return (
    <div>
      <h3>{title}</h3>
    </div>
  );
};

export default withOperations(Operations);
