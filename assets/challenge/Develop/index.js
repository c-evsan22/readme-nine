const generateMarkdown=require("./utils/generateMarkdown")

const fs=require("fs");
const inquirer=require("inquirer");


inquirer.prompt(
    [
        {
           type: 'input',
           message:"Project Title?",
           name:'title',
        },
        {
            type:"input",
            message:"how do you install you project?",
            name:"installation",
        },
        {
            type:"input",
            message:"Project Instructions?",
            name:"instructions",
        },
        {
            type:"input",
            message:"User Credits?",
            name:"installation",
        }, 
        {
            type:"input",
            message:"How does this function?",
            name:"installation",
        },
        {
            type:"list",
            message:"License?",
            name:"license",
            choices:['The MIT License','The GPL License','Apache License','N/A']
        },
        {
            type:"input",
            message:"GitHub username?",
            name:"git",
        },
        {
            type:"input",
            message:"E-Mail",
            name:"email",
        }
    
    ]
    
)
.then((data)=>{
console.log(data);
createNewFile("README-new.md",data)

});

function createNewFile(filename,data){

    fs.writeFile(filename,generateMarkdown(data),(err)=> {
        if(err){
            console.long(err)
        }
        console.log('Your README is generated');
    })
}

// createNewFile(data)




