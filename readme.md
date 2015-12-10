# Redux Form Validator

This NPM package is a way to standardize form validations when using
`redux-form`.  The goal is to make writing validations quick and easy and
leverage a previous validation system like `ActiveModel` from rails.

The public API will try to simulate Rails validations as best as possible.  

### Tools
```
npm test              # run test suite once
npm run test:watch    # live reloading of test suite
npm run build         # builds all the dist packages
```

### Contributing
Feel free to submit a PR for any outstanding github issues!


### Documentation

**Note** this API has not been created yet.  This is just an example of the
'ideal' api I would like to build with this project:

```
import { formValidator } from 'redux-form-validator';

const fields = ['firstName', 'email', 'zipCode'];

const validate = formValidator({
  'firstName': {
    'presence': true,
    'length: { 'min': 4, 'max': 20 }
  },
  'email': {
    'format': 'email'
  },
  'zipCode': {
    'numericality': true
  }
});


class SampleForm extends Component {
  ... React Component Here ...
}

SampleForm = reduxForm({
  form: 'sampleForm',
  fields,
  validate
})(SampleForm)

export default SampleForm;
```
