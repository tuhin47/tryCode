@echo off

set old=
set curr=HEAD
set file=db/local-btcl_automation_DEV.sql

git show-branch --no-name %old% > python/temp.log
git diff %old% %curr% %file% > python/generatedDiff.log

python python/BackToState.py
DEL .\python\temp.log
