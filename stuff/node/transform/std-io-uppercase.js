let content = ''

process.stdin.on('data', chunk => content += chunk)

//process.stdin.on('end', () => process.stdout.write(content.toUpperCase()))

process.on('SIGINT', () => {
    process.stdout.write('\n')
    process.stdout.write(content.toUpperCase())
    
    process.exit()
})