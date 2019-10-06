function takeANumber(katzDeliLine, firstName) {
  katzDeliLine.push(firstName);
  return `Welcome, ${firstName}. You are number ${katzDeliLine.length} in line.`
}

function nowServing() {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    katzDeliLine.shift();
  }
}
