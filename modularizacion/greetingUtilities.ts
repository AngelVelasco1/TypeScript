
export function returnGreeting(greeting: string) {
    let greetingLength = getLength(greeting);
    console.log(`The message is ${greeting}. It is ${greetingLength} characters long.`);
}

function getLength(message: string): number {
    return message.length
}