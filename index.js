var customerCount = 0

function takeANumber(line){
  customerCount += 1
  line.push(customerCount)
  return `Welcome, you are number ` + (customerCount)
}

function nowServing(line){
  var serving = line[0]
  if (line.length === 0){
    return "There is nobody waiting to be served!"
  }
  else{
    line.shift()
    return "Currently serving " + serving + "."
  }
}

function currentLine(line){
  if (line.length === 0){
    return "The line is currently empty."
  } else{
    var list = "The line is currently: "
    for (let i = 0; i < line.length; i++){
      list = list + (i + 1) + '. ' + line[i]
      if (i < (line.length - 1)){
        list = list + ', '
      }
    }
    return list
  }
}
