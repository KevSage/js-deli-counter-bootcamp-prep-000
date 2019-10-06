function takeANumber(katzDeliLine, firstName) {
  katzDeliLine.push(firstName);
  return `Welcome, ${firstName}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty";
  } else {
    var serving = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${serving}.`;
  }
}
