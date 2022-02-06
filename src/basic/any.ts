export default function anySample(){
    let name: any = '小林' //string型を代入した。
    console.log("any sample1:",typeof name,name)

    name = 28
    console.log("any sample2:",typeof name,name)
}