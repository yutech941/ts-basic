// import World from './world'

// const root: HTMLElement | null = document.getElementById('root')
// const world = new World('Hello World!!!')
// world.sayHello(root)

// //基本の型定義
// import {anySample, notExistSample, primitiveSample, unknownSample} from "./basic";

// anySample()
// notExistSample()
// primitiveSample()
// unknownSample()

//関数の型定義
// import {logMessage} from "./function/basic"
// import {isUserSignedIn, isUserSignedIn2, sumProductPrice} from './function/parameters';

// logMessage("Hello TypeScript!")
// isUserSignedIn("ABC", "小林")
// isUserSignedIn("DEF")
// isUserSignedIn2("ABC")
// const sum = sumProductPrice(100,200,300,400,500)
// console.log('Function parameters sample 5:', sum);

//オブジェクトの型定義
// import objectSample from "./object/object";
// import typeAiliasSample from "./object/ailias"
// objectSample();
// typeAiliasSample();

// //インデックスシグネチャ
// const capitals: {
//     [coutryName:string]:string
// } = {
// Japan:'Tokyo',
// Korea:'Seoul'
// }

// capitals.China = 'Beijing'
// capitals.Canada = 'Ottawa'

// console.log("Object object sample4",capitals);

// //06.配列とダブルの型定義
// import arraySample from "./array/array";
// import tupleSample from "./array/tuple"
// arraySample()
// tupleSample()

// 07.ジェネリック型とポリモーフィズム
import genericsBasicSample from "./generics/basic";
import genericsAdvancedSample from "./generics/advenced";
genericsBasicSample()
genericsAdvancedSample()
