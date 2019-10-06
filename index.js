function takeANumber(katzDeliLine, firstName) {
  katzDeliLine.push(firstName);
  return `Welcome, ${firstName}. You are number ${katzDeliLine.length} in line.`
}

function nowServing() {
  return katzDeliLine[0];
  katzDeliLine.shift();
}