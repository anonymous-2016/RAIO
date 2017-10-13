# shell copy file 


https://stackoverflow.com/questions/12355176/shell-script-to-copy-files-from-one-location-to-another-location-and-rename-add

https://technet.microsoft.com/en-us/library/ee156818.aspx



Copy-Item c:\scripts\test.txt c:\test

Copy-Item c:\scripts\* c:\test

Copy-Item c:\scripts\*.txt c:\test

Copy-Item c:\scripts c:\test -recurse

Copy-Item Aliases: cpi / cp / copy


https://www.cyberciti.biz/faq/copy-command/


https://msdn.microsoft.com/en-us/library/0xca6kdd.aspx


Tools.Shell [/command] [/output] [/dir:folder] path [args]  

Tools.Shell """C:\Program Files\SomeFile.exe"""  

"C:\Program Files\SomeFile.exe"  

>Tools.Shell /o /c xcopy.exe c:\MyText.txt c:\Text\MyText.txt  


















