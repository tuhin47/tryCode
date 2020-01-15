@echo off
set preferecnce=1
REM set /p preferecnce="1.(Default)localhost  2.Remote="
set user=root
set server=localhost
set pw="root"
if %preferecnce%==2 set user=
if %preferecnce%==2 set server=
if %preferecnce%==2 set pw=
set db=btcl_automation_DEV
set dir=
set host=remote
if "%server%" == "localhost" set host=local

set path=%dir%%host%-%db%.sql

@echo on
"C:/Program Files/MySQL/MySQL Server 5.7/bin/mysql"  --user=%user% --password=%pw% -h %server% %db% < %path%

@echo off
echo msgbox "Retrieve complete!" > "%temp%\popup.vbs"
"C:\Windows\System32\wscript.exe" "%temp%\popup.vbs"