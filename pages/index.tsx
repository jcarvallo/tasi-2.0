import type { NextPage } from "next";
import { Layout, NumericKeyboard } from "@components";
import styles from "../styles/Home.module.css";
import { Row, Col, Form, FormGroup, Input } from "reactstrap";

const Home: NextPage<any> = ({ actionsKeyboard, handleFocus }) => {
  return (
    <Layout>
      <Row>
        <Col lg="6" xs="12">
          <h4 className="mb-4">Ingrese DNI y Clave</h4>
          <Form>
            <FormGroup>
              <Input
                type="text"
                name="dni"
                id="dni"
                placeholder="DNI"
                // defaultValue={state.dni[0]}
                onFocus={handleFocus}
                maxLength={8}
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="password"
                name="clave"
                id="clave"
                placeholder="CLAVE"
                // defaultValue={state.clave[0]}
                onFocus={handleFocus}
                maxLength={4}
              />
            </FormGroup>
          </Form>
        </Col>
        <Col lg="6" xs="12">
          <NumericKeyboard {...actionsKeyboard} />
        </Col>
      </Row>
    </Layout>
  );
};

export default Home;
