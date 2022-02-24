export default function typeAiliasSample(){
    //型エイリアス
    type Country = {
        capital:string
        language:string
        name:string
    }

    const japan:Country = {
        capital:'Tokyo',
        language: 'Japanese',
        name:'Japan'
    }
    console.log("Object ailias sample1:",japan);

    const america:Country = {
        capital:'Washington,D.C.',
        language:'English',
        name:'United States Of America'
    }
    console.log("Object ailias sample2:",america);

    //合併型(union)と交差型(intersection)
    type Knight = {
        hp:number
        sp:number
        weapon:string
        swordSkill:string
    }

    type Wizard = {
        hp:number
        mp:number
        weapon:string
        magicSkill:string
    }

    //合併型... KnightまたはWizardの型を持つ
    type Adventure = Knight | Wizard

    //交差型... KnightかつWizardの型を持つ
    type Paladin = Knight & Wizard
    

    //Knight寄りの冒険者
    const adventure1:Adventure = {
        hp:100,
        sp:30,
        weapon:'木の剣',
        swordSkill:'三連斬り'
    }

    //Wizard寄りの冒険者
    const adventure2:Adventure = {
        hp:100,
        mp:30,
        weapon:'木の枝',
        magicSkill:'ファイヤーボール'
    }

    console.log("Object ailias sample 3:",adventure1);
    console.log("Object ailias sample 4:",adventure2);

    const paladin: Paladin = {
        hp:300,
        sp:100,
        mp:100,
        weapon:'銀の剣',
        swordSkill:'三連斬り',
        magicSkill:'ファイヤーボール'
    }

    console.log("Object ailias sample5:",paladin);
    
}