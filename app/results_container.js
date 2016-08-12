var React = require('react');

var birthdayAndTime = function(year, month, day, hour, minute, second) {
  return new Date(year, month - 1, day, hour, minute, second);
}

var calculateGigasecondBirthday = function(birthdayAndTime) {
  return new Date(Date.parse(birthdayAndTime) + Math.pow(10,12));
}

var ResultsContainer = React.createClass({
  render: function() {
    var birthday = birthdayAndTime(this.props.birthday.year,
                                   this.props.birthday.month,
                                   this.props.birthday.day,
                                   this.props.birthday.hour,
                                   this.props.birthday.minute,
                                   this.props.birthday.second);
    return (
      <div>
        Your birthday: {birthday.toString()}
        <br/>
        Your gigasecond birthday: {calculateGigasecondBirthday(birthday).toString()}
      </div>
    );
  }
});

module.exports = ResultsContainer;
