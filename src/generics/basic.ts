export default function genericsBasicSample(){
    //ジェネリック型を使わない場合
    const stringReduce = (array:string[], initialValue: string): string => {   
        let result = initialValue
        for(let i=0; i < array.length; i++){
            result += array[i]
        }
        return result
    }

    console.log("Generics basic sample1:",stringReduce(["May ","the ", "force ", "be " , "with ", "you "],"")); 

    type Reduce = {
        (array:string[],initialValue:string): string 
        (array:number[],initialValue:number): number
    }

    type GenericsReduce<T> = {
        (array: T[], initialValue: T):T
    }

    const genericStringReduce: GenericsReduce<string> = (array,initialValue) => {
        let result = initialValue
        for (let i=0; i< array.length; i++){
            result += array[i]
        }
        return result
    }
    console.log("Generics basic sample3:", genericStringReduce(["MAKE ", "TYPESCRIPT ","GREAT ","AGAIN"],""))

    const genericNumberReduce: GenericsReduce<number> = (array,initialValue) => {
        let result = initialValue
        for (let i=0; i< array.length; i++){
            result += array[i]
        }
        return result
    }
    console.log("Generic basic sample 4:", genericNumberReduce([-100,-200,-300],1000));

    //いろいろなジェネリック型の定義方法
    //完全な呼び出しシグネチャ(ここのシグネチャにジェネリック型を割り当てる)
    type GenericReduce2 = {
        <T>(array:T[],initialValue:T): T
        <U>(array:U[],initialValue:U): U
    }

    //呼び出しシグネチャの省略記法
    type GenericReduce3<T> = (array:T[],initialValue: T) => T
    type GenericReduce4 = <T>(array: T[],initialValue:T) => T
    
}