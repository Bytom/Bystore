export default class Settings {

    constructor(){
        const uiLang = (chrome.i18n.getUILanguage().split('_')[0]).split('-')[0]
        this.domains = []
        this.language = uiLang||'en';
        this.netType ='bytom';
        this.network ='testnet';
        this.currency = uiLang ==='en'?'inUsd':"inCny"
        this.domainsMeta ={}
    }


    static placeholder(){ return new Settings(); }
    static fromJson(json){
        let p = Object.assign(this.placeholder(), json);
        if(json.hasOwnProperty('domains')) p.domains = json.domains;
        return p;
    }
}
