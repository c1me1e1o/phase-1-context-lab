function createEmployeeRecord(employeeRecord) {
  let record = {
    firstName: employeeRecord[0],
    familyName: employeeRecord[1],
    title: employeeRecord[2],
    payPerHour: employeeRecord[3],
    timeInEvents: [],
    timeOutEvents: []
  };
  return record;
}

function createEmployeeRecords(employeeData) {
  return employeeData.map(function(employee) {
    return createEmployeeRecord(employee)
  })
}

function createTimeInEvent(dateStamp) {
  const [date, hour] = dateStamp.split(" ");
  this.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(hour, 10),
    date: date
  });
   return this
}

function createTimeOutEvent(dateStamp) {
  const [date, hour] = dateStamp.split(" ");
  this.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(hour, 10),
    date: date
  });
  return this;
}

function hoursWorkedOnDate(date) {
  const timeIn = this.timeInEvents.find(event => event.date === date);
  const timeOut = this.timeOutEvents.find(event => event.date === date);
  return (timeOut.hour - timeIn.hour)/100;
}

function wagesEarnedOnDate(date) {
  
 return (hoursWorkedOnDate.call(this,date) * this.payPerHour);
}

function allWagesFor() {
  const allWages = this.timeInEvents.map(event => wagesEarnedOnDate.call(this,event.date));
  return allWages.reduce((total, wage) => total + wage);
}

function calculatePayroll(empRecords) {
  const totalForEachEmployee = empRecords.map(record => allWagesFor.call(record))
  return totalForEachEmployee.reduce((total, empTotal) => total + empTotal)
}

function findEmployeeByFirstName(src, name) {
  return src.find(record => record.firstName === name);
}