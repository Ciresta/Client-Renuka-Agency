@echo off
setlocal enabledelayedexpansion

:: Initialize counter
set counter=1

:: Loop through all files in the current directory
for %%f in (*) do (
    if not "%%~ff"=="%~f0" (
        :: Get file extension
        set "extension=%%~xf"

        :: Rename the file
        ren "%%f" "program!counter!!extension!"

        :: Increment the counter
        set /a counter+=1
    )
)

endlocal
