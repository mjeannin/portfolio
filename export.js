var fs = require('fs');
var parse = require('xml-parser');
var xml = fs.readFileSync('views/partials/articles/line1.ejs', 'utf8');
var parseString = require('xml2js').parseString;
var obj = parse(xml);
console.log(obj.root.children);

for (a in obj.root.children) {
    console.log(a);
}
parseString(xml, function (err, result) {
    console.dir(result);
});
console.log("lol");
var fastXmlParser = require('fast-xml-parser');
console.log("lol");
var jsonObj = fastXmlParser.parse(xml);
//or
console.log(jsonObj);
var options = {
        attributeNamePrefix : "@_",
        attrNodeName: "attr", //default is 'false'
        textNodeName : "#text",
        ignoreAttributes : true,
        ignoreNameSpace : false,
        allowBooleanAttributes : false,
        parseNodeValue : true,
        parseAttributeValue : false,
        trimValues: true,
        cdataTagName: "__cdata", //default is 'false'
        cdataPositionChar: "\\c",
        localeRange: "", //To support non english character in tag/attribute values.
        attrValueProcessor: a => he.decode(a, {isAttributeValue: true}),//default is a=>a
    tagValueProcessor : a => he.decode(a) //default is a=>a
};
    var jsonObj = fastXmlParser.parse(xmlData,options);
console.log(jsonObj);

//Intermediate obj
var tObj = fastXmlParser.getTraversalObj(xmlData,options);
var jsonObj = fastXmlParser.convertToJson(tObj,options);