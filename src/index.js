const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {

	try{
		const data = await fs.writeFile(fileName,fileContent)
	}
	catch(e){
		console.log("error")
	}

}

const myFileReader = async (fileName) => {
	try{
		const data = await fs.readFile(fileName,{encoding:"utf-8"})
	   console.log(data)
	}
	catch(e){
		console.log("error")
	}
}


const myFileUpdater = async (fileName, fileContent) => {
	
	try{
	const data=await fs.appendFile(fileName,fileContent)
	}

	catch(e){
		console.log("error")
	}
}

const myFileDeleter = async (fileName) => {
	try{
		const data = await fs.unlink(fileName)
	}
	catch(e){
		console.log("error")
	}
	
}

//myFileWriter("File.txt" ,"Hello")
//myFileUpdater("File.txt" , " World")
// myFileReader("File.txt" )
myFileDeleter("File.txt")

module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }