export default function objectSample(){
    const a :object = {
        name:'Torahack',
        age:28
    }
    //a.name

    //オブジェクトリテラル記法で型定義
    let country: {
        language:string
        name:string
    } = {
    language:"Japanese",
    name:"Japan"
    }

    console.log("Object obkect sample 1:", country);

    country = {
        language:"English",
        name:"United States of America"
    }

    console.log("Object object sample2:", country);
    
}