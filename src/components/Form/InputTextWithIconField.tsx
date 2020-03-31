import React, { FunctionComponent } from 'react';
import { useField, ErrorMessage } from 'formik';
import { Form, InputGroup, FormControl } from 'react-bootstrap';

interface Props {
  placeholder: string;
  icon: string;
  name: string;
  type: string;
}

const InputTextWithIconField: FunctionComponent<Props> = ({
  placeholder,
  icon,
  ...props
}) => {
  const [field] = useField(props);

  return (
    <InputGroup className="mb-3">
      <Form.Control {...field} {...props} placeholder={placeholder} />
      <InputGroup.Append>
        <InputGroup.Text>
          <span className={`fas fa-${icon}`}></span>
        </InputGroup.Text>
      </InputGroup.Append>
      <ErrorMessage name={props.name}>
        {msg => (
          <FormControl.Feedback type="invalid" className="d-block">
            {msg}
          </FormControl.Feedback>
        )}
      </ErrorMessage>
    </InputGroup>
  );
};

export default InputTextWithIconField;
