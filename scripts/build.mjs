import {cp,mkdir,writeFile,rm} from 'node:fs/promises';
await rm('dist',{recursive:true,force:true});await mkdir('dist',{recursive:true});
for(const file of ['index.html','config.js','src'])await cp(file,'dist/'+file,{recursive:true});
if(process.env.SUPABASE_URL&&process.env.SUPABASE_ANON_KEY)await writeFile('dist/config.js','window.DARIJA_CONFIG = '+JSON.stringify({supabaseUrl:process.env.SUPABASE_URL,supabaseKey:process.env.SUPABASE_ANON_KEY})+';\n');
console.log('Built Darija Path in dist/');
