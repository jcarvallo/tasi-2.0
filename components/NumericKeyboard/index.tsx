import { FC } from "react";
import { Card, CardBody, Row } from "reactstrap";
import withNumericKeyboard from "./withNumericKeyboard";

const NumericKeyboard: FC<{ buttons: Function }> = ({ buttons }) => {
  return (
    <Card>
      <CardBody>
        <Row xs="3">{buttons()}</Row>
      </CardBody>
    </Card>
  );
};

export default withNumericKeyboard(NumericKeyboard);
