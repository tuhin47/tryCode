back = open("GOBACKSQL.sql","w+")

arr = open("python/temp.log","r").readlines()
back.write("#--"+"".join(arr))

back.write("SET FOREIGN_KEY_CHECKS=0;\n\n")
flag=True
for x in open("python/generatedDiff.log","r").readlines():
    if flag==True and len(x)>7 and x[0:7] == "+INSERT":
        y=x.split(" ")
        back.write("TRUNCATE TABLE "+y[2]+";\n")
    flag=True
    if len(x)>7 and x[0:7] == "-INSERT":
        y=x.split(" ")
        back.write("TRUNCATE TABLE "+y[2]+";\n")
        back.write(x[1:]+"\n")
        flag=False

back.write("SET FOREIGN_KEY_CHECKS=1;\n")
back.close()
