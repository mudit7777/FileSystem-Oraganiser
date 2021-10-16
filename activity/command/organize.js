let fs = require("fs");
let path = require("path");
let types = {
    media: ["mp4", "mkv", "mp3", "jpg", "png","jpeg", "JPG","PNG","JPEG","gif"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex','ipynb','pptx','ppt','pages'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}

function organizeOutput(src){
    //console.log("organize command executed with path " + src);
    //Code ----------->>>>>>
    //1. input ---> dir given
    let destPath;
    if(src == undefined){
        destPath = process.cwd();
        // return;
        console.log("Please provide the path.");
    }else{
        let isPresent = fs.existsSync(src);
        if(isPresent){
            //2.create -> organized files -> directory 
            destPath = path.join(src, "OrganizedFiles");
            if(fs.existsSync(destPath) == false){
                fs.mkdirSync(destPath);
            }

        }else{
            console.log("Please provide the correct path");
            return;
        }
    }

    //3.identify categories of al the files present in that input dir
    organizer(src,destPath);
}

// Identify categories of all the files present in that input directory
function organizer(src, dest){
    let content = fs.readdirSync(src);
    // console.log( content);
    for(let i = 0; i < content.length; i++){
        let contentAddress = path.join(src, content[i]);
        let isFile = fs.lstatSync(contentAddress).isFile(contentAddress);
        //console.log(isFile);
        if(isFile){
            let categoryOfFile = categorycheck(content[i]);
            console.log(content[i] + "  -->  " + categoryOfFile);
            putFile(contentAddress,dest,categoryOfFile);           
        }
    }
    
}

function categorycheck(name){
    let extension = path.extname(name);
    //console.log(extension);
    extension = extension.slice(1);
    //console.log(extension);
    for(let key in types){
        let currentKeyArray = types[key];
        for(let j = 0; j < currentKeyArray.length; j++){
            if(extension == currentKeyArray[j]){
                return key;
            }
        }
    }
    return "Others";
}

function putFile(src,destination,category){
    //4.copy/cut files in the organised dir
    let fileCategoryPath = path.join(destination, category);
    if(fs.existsSync(fileCategoryPath) == false){
            fs.mkdirSync(fileCategoryPath);
    }
    let tobeCopied = path.basename(src);
    // console.log("tobecopied is " + tobeCopied);
    let destPath = path.join(fileCategoryPath, tobeCopied);
    fs.copyFileSync(src, destPath);
    fs.unlinkSync(src);
    console.log(fileCategoryPath, "copied to ", category);

}

module.exports = {
    organizefxn: organizeOutput
}