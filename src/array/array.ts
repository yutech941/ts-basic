export default function arraySample(){
    //シンプルな配列の型定義
    const colors:string[] = ["red","bleu"]
    colors.push("yellow")
    // colors.push(123)
    console.log("Array array sample 1:", colors);

    const even:Array<number> = [2,4,6]
    even.push(8)
    //even.push("10")
    console.log("Array array sample2:", even);

    const ids: (string | number)[] = ["ABC",123]
    ids.push("DEF")
    ids.push(456)
    //ids.push(true)
    console.log("Array array sample3:",ids);

     //配列の型推論
     const generetateSomeArray = () => {
         const _someArray = []//any[]
         _someArray.push(123)//number[]
         _someArray.push("ABC")// (string | number)[]
         return _someArray
     }

     const someArray = generetateSomeArray()
     someArray.push(456)
     //someArray.push(true)
     console.log("Array array sapmle 4:",someArray);
}