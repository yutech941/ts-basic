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
import {logMessage} from "./function/basic"
import {isUserSignedIn, isUserSignedIn2} from './function/parameters';

logMessage("Hello TypeScript!")
isUserSignedIn("ABC", "小林")
isUserSignedIn("DEF")
isUserSignedIn2("ABC")
