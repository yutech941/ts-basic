export default function notExistSample(){
let name = null
console.log("notExist sample1:",typeof name,name)

name = "小林"
if(!name){
    console.log("notExist sample2:","我輩は猫である。名前はまだ"+name)        
}else{
    console.log("notExist sample3:","我輩は猫である。名前は"+name);
}

let age = undefined
console.log("notExist sample4:", typeof age,age);

age = 28
if(age){
    console.log("notExist sample6:","年齢は" + age + "です。");
}else{
    console.log("notExist sample5:","年齢は秘密です");
}
}