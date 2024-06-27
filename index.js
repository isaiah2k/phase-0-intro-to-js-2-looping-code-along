function writeCards(names) {
  let messages = []
  for (let i = 0; i < names.length; i++) {
  messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
  }

  return messages
}

function countDown(number) {
  for (let i = number; i >= 0; i--) {
  console.log(i)
  }
}

countDown(9)
