const fs = require('fs');
const YAML = require('yamljs');
const file = YAML.parse(fs.readFileSync('../config/locales/humanizer.pt-BR.yml').toString());

console.log(YAML.parse(fs.readFileSync(process.env.HUMANIZER_DIR).toString()));