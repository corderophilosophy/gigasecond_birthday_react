var React = require('react');

var SensitiveFormElement = require('./sensitive_form_element');

class InputsContainer extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    var birthday = this.props.birthday;
    var handleChange = this.props.handleChange;
    var inputs = Object.keys(birthday).map(function(unit, idx){
      return <SensitiveFormElement key={idx + 1}
                                   timeUnit={unit}
                                   timeValue={birthday[unit]}
                                   handleChange={handleChange}
                                   reactKey={idx + 1}
             />
    });

    return <div className='inputs-container'>{inputs}</div>;
  }
};

module.exports = InputsContainer;
