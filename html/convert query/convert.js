var doublequote=['name','type_3','assetId','type_7','order1_assetPair_PriceAsset'];
function replaceAll(searchString, replaceString, str) {
    return str.split(searchString).join(replaceString);
 }
function convertQuery(query) {
    query = query.replace(/\n/g, ' ');
    console.log(query);
    while (query.includes('  ')) query = query.replace(/  /g, ' ');
    console.log('double',query);
    query = query.replace(/= /g, '=');
    query = query.replace(/"/g, '\'');
    console.log(query);
    doublequote.forEach(el=>{
        query = query.replaceAll(el,'"'+el+'"',query);
    });
    console.log(query);
    query = query.replaceAll('is null', "='",query);
    return query;

}

const readQuery = async file => {
    const response = await fetch(file);
    const text = await response.text();
    console.log(convertQuery(text));

}

readQuery('mysql.txt');
