import React, { FunctionComponent } from 'react';
import { FormikProps, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { Row, Col, Form, Button, Alert, Card } from 'react-bootstrap';

//import logo from 'src/assets/images/logo.svg';

import InputTextWithIconField from 'src/components/Form/InputTextWithIconField';

import { authRequest } from 'src/store/ducks/auth/actions';
import { AuthForm, AuthState } from 'src/store/ducks/auth/types';
import { ApplicationState } from 'src/store';

const SigninSchema = Yup.object().shape({
  email: Yup.string()
    .email('Por favor, informe um e-mail válido.')
    .required('O campo email é obrigatório.'),
  password: Yup.string().required('O campo senha é obrigatório.'),
});

const LoginForm: FunctionComponent<FormikProps<AuthForm>> = ({
  handleSubmit,
  // handleChange,
  // handleBlur,
  // values,
  // errors,
}) => {
  const { loading } = useSelector<ApplicationState, AuthState>(
    state => state.auth
  );

  return (
    <Form onSubmit={handleSubmit}>
      <InputTextWithIconField
        name="email"
        type="text"
        placeholder="Email"
        icon="envelope"
      />
      <InputTextWithIconField
        name="password"
        type="password"
        placeholder="Password"
        icon="lock"
      />
      <Row>
        <Col xs={4} className="ml-auto">
          <Button variant="primary" className="btn-block" type="submit">
            Entrar
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

const Login: FunctionComponent = () => {
  const dispatch = useDispatch();

  const initialValues: AuthForm = {
    email: 'felipe.alexandre@edinteractive.cc',
    password: 'password',
  };

  const { error } = useSelector<ApplicationState, AuthState>(
    state => state.auth
  );

  return (
    <div className="hold-transition login-page">
      <div className="login-box">
        <div className="login-logo mb-4">
          <b>Admin</b>LTE
          {/* <img src={logo} /> */}
        </div>
        <Card>
          <Card.Body className="login-card-body">
            <p className="login-box-msg">Faça login para iniciar sua sessão</p>

            {error && (
              <Alert variant="danger">Email e/ou senha inválida.</Alert>
            )}
            <Formik
              initialValues={initialValues}
              validationSchema={SigninSchema}
              onSubmit={(values, actions) => {
                dispatch(authRequest(values));
              }}
              component={LoginForm}
            ></Formik>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Login;
