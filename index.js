function takeANumber(katzDeliLine, firstName) {
  katzDeliLine.push(firstName);
  return `Welcome, ${firstName}. You are number ${katzDeliLine.length} in line.`
}
