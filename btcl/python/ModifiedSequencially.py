f = open("python/Sequence.sql","w+")

update = 1
insert = 1
select = 0

my_dict = {}
uniq = set()

for x in open("python/0.read.log","r").readlines():
    x = x.lower()
    if update and " update " in x :
        line = x[x.rfind(" update "):]
        table = line.split(" ")[2]
        if table in my_dict :
            my_dict[table].append(line)
        else :
            my_dict[table] = [line]
        uniq.add(table)
    if insert and " insert " in x :
        line = x[x.rfind(" insert "):]
        table = line.split(" ")[3]
        if table in my_dict :
            my_dict[table].append(line)
        else :
            my_dict[table] = [line]
        uniq.add(table)
print(uniq)
for x in sorted(uniq):
    f.write('\n\n\n'+x+':\n')
    f.write("".join(my_dict[x]))

f.close()
