echo off
set from=%cd%
cd ..
set to= %cd%\..\client\assets\script\cmd
copy %from%\proto.d.ts %to%\proto.d.ts
copy %from%\proto.js %to%\proto.js
copy %from%\opcode.ts %to%\opcode.ts
echo 完毕
exit