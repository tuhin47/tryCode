f = open("out.sql","w+")
table = open("table.log","w+")
mod = open("TableModified.log","w+")

update = 1
insert = 1
select = 1

uniq = set()

for x in open("read.log","r").readlines():
    x = x.lower()
    if update and " update " in x :
        line = x[x.rfind(" update "):]
        f.write(line)
        line = line.split(" ")
        table.write(" update " + line[2]+"\n")
        uniq.add(line[2]+'\n')
    if insert and " insert " in x :
        line = x[x.rfind(" insert "):]
        f.write(line)
        line = line.split(" ")
        table.write(" insert "+line[3]+"\n")
        uniq.add(line[3]+'\n')
    if select and " select " in x:
        line = x[x.rfind(" select "):]
        f.write(line)
        line = line[line.rfind(" from "):]
        line = line.split(" ")
        table.write(" select "+line[2]+"\n")
mod.write("".join(uniq))
mod.close()
f.close()
table.close()