const fileSystem = require('fs');
const path = require('path');
const distPath = path.resolve(__dirname, '../dist');

console.log("Removing old /dist folder.");
try 
{
    if (fileSystem.existsSync(distPath)) 
    {
        fileSystem.rmSync(distPath, { recursive: true, force: true });
        console.log("Folder removed.");
    } 
    else 
    {
        console.log("Folder not found, skipping removal process.");
    }
} 
catch (err) 
{
    console.error('Error removing old /dist folder:', err);
}
