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
set dir=db/
set host=remote
if "%server%" == "localhost" set host=local

set path=%dir%%host%-%db%.sql

@echo on
"C:/Program Files/MySQL/MySQL Server 5.7/bin/mysqldump" --add-drop-table --disable-keys --extended-insert --user=%user% --password=%pw% -h %server% %db% > %path%
@echo off
echo msgbox "Backup complete!" > "%temp%\popup.vbs"
"C:\Windows\System32\wscript.exe" "%temp%\popup.vbs"