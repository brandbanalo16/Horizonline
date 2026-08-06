const fs = require('fs');
const path = require('path');

function replaceColorsInDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            replaceColorsInDir(fullPath);
        } else if (fullPath.endsWith('.css')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let originalContent = content;

            // Replace primary color
            content = content.replace(/28,\s*37,\s*57/g, '44, 54, 80');
            content = content.replace(/#1c2539/gi, '#2c3650');

            // Replace secondary color
            content = content.replace(/32,\s*40,\s*45/g, '38, 100, 100');
            content = content.replace(/#20282d/gi, '#266464');

            if (content !== originalContent) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log('Updated colors in ' + fullPath);
            }
        }
    }
}

replaceColorsInDir('./styles');
