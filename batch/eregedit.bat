@echo off
echo Welcome to eregedit.
echo Insert path of ereg file to read from it.
set /P p=Enter path: 
set /V
for /F "skip=0 delims=" %%i in (%p%) do set "V=%%i"&goto nextline
print %V%
:nextline
call :sub %p%
exit /b

:sub
echo %~nx1
exit /b
