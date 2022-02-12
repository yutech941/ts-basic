
//アロー関数
export const logMessage = (message:string): void => {
    console.log('Function basic sample:1',message);
}

//名前付き関数
export function logMessage2(message:string): void  {
    console.log('Function basic sample:2',message);
}

//関数式
export const logMessage3 = function (message:string): void  {
    console.log('Function basic sample:2',message)
}

//アロー関数の省略記法
export const logMessage4 = (message:string): void => console.log('Function basic sample:2',message);

export const alwaysThrowError = (message: string):never => {
    throw new Error(message)
}

//呼び出しシグネチャ(省略記法)
type Logmessage = (message:string) => void
export const logMessage6 : Logmessage = (message) => {
    console.log('Function basic sample 6', message);
}

//完全な呼び出しシグネチャ
type FullLogoessage = {
    (message:string):void
}
export const logMessage7: FullLogoessage = (message) => {
    console.log('Function basic sample7:' , message)
}
